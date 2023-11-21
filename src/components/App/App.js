import './App.css';

import React from 'react';
import { Route, Routes, useNavigate, Outlet } from 'react-router-dom';

import NotFound from '../NotFound/NotFound';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import NavMenu from '../NavMenu/NavMenu';
import Footer from '../Footer/Footer';

function App() {
  const navigate = useNavigate();

  function HeaderLayout() {
    return (
      <>
        <Header loggedIn={loggedIn}
                onClickProfile={handleClickProfile}
                onClickMenu={setIsNavMenuOpened}
        />
        <Outlet />
      </>
    )
  }

  function FooterLayout() {
    return (
      <>
        <main>
          <Outlet />
        </main>
        <Footer />
      </>
    )
  }

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isNavMenuOpened, setIsNavMenuOpened] = React.useState(false);

  function handleCloseNavMenu() {
    setIsNavMenuOpened(false);
  }

  function handleClickProfile() {
    navigate('/profile');
    handleCloseNavMenu();
  }

  function handleEditProfile() {
  }

  function handleLogin({email, password}) {
    alert({email, password})
    setLoggedIn(true);
    navigate('/')
  }

  function handleLogout() {
    setLoggedIn(false);
    navigate('/');
  }


  return (
    <div className='app'>
      <Routes>
        <Route element={<HeaderLayout />}>
          <Route element={<FooterLayout />}>
            <Route path='/' element={<Main />} />
            <Route path='/movies' element={<Movies isSaved={false}/>} />
            <Route path='/saved-movies' element={<Movies isSaved={true} />} />
          </Route>
          <Route path='/profile' element={
            <Profile onEditProfile={handleEditProfile}
                     onLogout={handleLogout} />} />
        </Route>
        <Route path='/login' element={<Login onSubmit={handleLogin}/>} />
        <Route path='/signup' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <NavMenu isOpened={isNavMenuOpened}
               onClickProfile={handleClickProfile}
               onClose={handleCloseNavMenu} />
    </div>
  );
}

export default App;
