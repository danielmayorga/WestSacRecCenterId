import React, { useState } from 'react';
import { 
  BrowserRouter, 
  Routes, 
  Route, 
  Navigate,
  Link
} from 'react-router-dom';
import { Create } from './Create';
import { Home } from './Home'
import { 
  IOsInstructions,
  IOsNeedsToSee,
} from './IOsInstructions';
import { 
  AppRoutes, 
  getUserInfo, 
  UserInfo, 
  setUserInfo as storeUserInfo, 
  logoutLocal
} from './helper';

function App() {
  const [userInfo, setUserInfo] = useState(getUserInfo);
  const [iOsWebIgnore, setIOsWebIgnore] = useState(() => !IOsNeedsToSee());

  const setInfo = (userInfo: UserInfo) =>{
    setUserInfo(userInfo);
    storeUserInfo(userInfo);
  }

  const logout = () =>{
    setUserInfo(null);
    logoutLocal();
  }

  const HomeRedirect = () => {
    if (iOsWebIgnore === false){
      return <Navigate to={AppRoutes.IOs}/>;
    }
    if ( userInfo == null){
      return < Navigate to={AppRoutes.Create}/>;
    }
    return  <Home userInfo={userInfo} /> ;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <nav className="navbar navbar-light bg-light sticky-top justify-content-between">
          <Link to={AppRoutes.Home} className="navbar-brand" style={{marginLeft: "1em"}}>
            West Sac Id
          </Link>
          <form className="form-inline" style={{marginRight: "1em"}}>
            <button className="btn btn-sm btn-outline-secondary" 
            type="button" 
            onClick={logout}>
              Logout
            </button>
          </form>
        </nav>
        <div className='container'>
          <Routes>
              <Route path={AppRoutes.Home} element={HomeRedirect()} />
              <Route path={AppRoutes.Create} element={< Create setUserInfo={setInfo} />} />
              <Route path={AppRoutes.IOs} element={<IOsInstructions setIOsWebIgnore={setIOsWebIgnore} />}/>
          </Routes>
      
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
