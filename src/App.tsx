import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Link, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { User } from './components/User';
import DetailUser from './components/DetailUser';
import AddUser from './components/AddUser';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div>
          <Link to={'user'} >User</Link>
          <Link to={'album'} >Album</Link>
          <Link to={'post'} >Post</Link>
        </div>

        <Routes>
          <Route path="user" element={<User />} />
          <Route path="user/add" element={<AddUser />} />
          <Route path="user/:id" element={<DetailUser />} />
          <Route path="album" element={<p>Album</p>} />
          <Route path="post" element={<p>Post</p>} />
          <Route element={<p>Not Found</p>} />
        </Routes>
        
      </header>
    </div>
  );
}

export default App;
