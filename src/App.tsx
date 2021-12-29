import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Create } from './Create';
import { Home } from './Home'

function App() {
  return (
    <div className="App">
      <div className='container'>
        <h1 className='header'>West Sacramento Recreational Center</h1>
        <BrowserRouter>
          <Routes>
            {/* Right now we'll just have the display page until we write more code */}
              <Route path="/" element={< Create />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
