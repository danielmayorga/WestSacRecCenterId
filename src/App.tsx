import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Create } from './Create';
import { Home } from './Home'
import { AppRoutes, getUserInfo, UserInfo, setUserInfo as storeUserInfo, logoutLocal } from './helper';

function App() {
  const [userInfo, setUserInfo] = useState(getUserInfo);

  const setInfo = (userInfo: UserInfo) =>{
    setUserInfo(userInfo);
    storeUserInfo(userInfo);
  }

  const logout = () =>{
    setUserInfo(null);
    logoutLocal();
  }

  return (
    <div className="App">
      <nav className="navbar navbar-light bg-light justify-content-between">
        <a className="navbar-brand" style={{marginLeft: "1em"}}>
          West Sac Rec
        </a>
        <form className="form-inline" style={{marginRight: "1em"}}>
          <button className="btn btn-sm btn-outline-secondary" 
          type="button" 
          onClick={logout}>
            Logout
          </button>
        </form>
      </nav>
      <div className='container'>
        <BrowserRouter>
          <Routes>
              <Route path={AppRoutes.Home} element={ userInfo != null?  <Home userInfo={userInfo} /> : < Navigate to={AppRoutes.Create} />}/>
              <Route path={AppRoutes.Create} element={< Create setUserInfo={setInfo} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
