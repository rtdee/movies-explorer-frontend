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

import ProtectedRoute from '../../utils/ProtectedRoute';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import { api } from '../../utils/MainApi.js';
import { register, authorize, checkToken } from '../../utils/auth.js';
import { moviesApi } from '../../utils/MoviesApi.js';

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
        <Outlet />
        <Footer />
      </>
    )
  }

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isNavMenuOpened, setIsNavMenuOpened] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [errortext, setErrortext] = React.useState('');
  const [isErrorVisible, setIsErrorVisible] = React.useState(false);
  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([])

  function showError(text) {
    setErrortext(`Что-то пошло не так: ${text}`);
    setIsErrorVisible(true);
    setTimeout(() => {
      setIsErrorVisible(false);
      setErrortext('');
    }, 3000);
  }

   React.useEffect(() => {
     moviesApi.getMovies()
     .then((res) => {
      const arr = [];
      res.forEach(movie => {
        arr.push(movie)
      });
      localStorage.setItem('movies', JSON.stringify(arr));
     })
     .catch(err => showError(err));
  }, []);

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    api.getSavedMovies(token)
    .then((res) => {
      if (res) {
        const arr = [];
        res.forEach(movie => {
          arr.push(movie)
        });
        setSavedMovies(arr)
      } else {
        setSavedMovies([])
      }
    })
    .catch(err => showError(err));
  }, []);

  React.useEffect(() => {
    setMovies(JSON.parse(localStorage.getItem('movies')));
  }, [])

   React.useEffect(() => {
     handleTokenCheck();
   }, []);

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    api.getUserInfo(token)
      .then((res) => {
        setCurrentUser({
          username: res.username,
          email: res.email,
        });
      })
      .catch(err => showError(err));
  }, []);


  function handleCloseNavMenu() {
    setIsNavMenuOpened(false);
  }

  function handleClickProfile() {
    navigate('/profile');
    handleCloseNavMenu();
  }

  function handleEditProfile(data) {
    const token = localStorage.getItem('token');
    api.patchUserInfo(data, token)
    .then(() => {
      setCurrentUser({
        username: data.username,
        email: data.email,
      });
    })
    .catch(err => showError(err));
  }

  function handleLogin(data) {
    authorize(data)
    .then((res) => {
      if (res) {
        localStorage.setItem('token', res);
        return res;
      }
    })
    .then(() => {
      handleTokenCheck();
    })
    .catch(err => showError(err));
  }

   function handleLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('search');
    setLoggedIn(false);
    navigate('/');
   }

  function handleSignup(data) {
    register(data)
    .then(res => console.log(res))
    .catch(err => showError(err));
  }

  function handleTokenCheck() {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token')
      checkToken(token)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            return res;
          }
        })
        // .then(() => {
        //   navigate('/', { replace: true })
        // })
        .catch(err => showError(err));
    }
  }

  function handleSaveMovie(movie) {
    const token = localStorage.getItem('token');
    api.saveMovie(movie, token)
    .then(res => console.log(res))
    .catch(err => showError(err));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='app'>
        <span className={`app__error-span ${isErrorVisible && 'app__error-span_visible'}`}>{errortext}</span>
        <Routes>
          <Route element={<HeaderLayout />}>
            <Route element={<FooterLayout />}>
              <Route path='/' element={<Main />} />
              <Route path='/movies' element={
                <ProtectedRoute loggedIn={loggedIn} element={
                  <Movies isSaved={false}
                          movies={movies}
                          saveMovie={handleSaveMovie}
                  />}
                />
              }/>
              <Route path='/saved-movies' element={
                <ProtectedRoute loggedIn={loggedIn} element={
                  <Movies isSaved={true}
                          savedMovies={savedMovies}
                  />}
                />
              }/>
            </Route>
            <Route path='/profile' element={
              <ProtectedRoute loggedIn={loggedIn} element={
                <Profile onEditProfile={handleEditProfile}
                         onLogout={handleLogout} />}
              />
            }/>
          </Route>
          <Route path='/login' element={<Login onSubmit={handleLogin}/>} />
          <Route path='/signup' element={<Register onSubmit={handleSignup} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <NavMenu isOpened={isNavMenuOpened}
                 onClickProfile={handleClickProfile}
                 onClose={handleCloseNavMenu} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
