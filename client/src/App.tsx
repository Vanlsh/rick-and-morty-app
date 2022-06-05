import React from 'react';
import  './styles/index.scss';
import Header from "./components/Header/Header";
import {Route, Routes } from 'react-router-dom';
import {userAPI} from "./services/UserService";
import Login from "./components/Login/Login";
import MainPage from "./components/MainPage/MainPage";


function App() {
    const {data} = userAPI.useFetchUserQuery('')
  return (
    <div className={"app"}>
        <Header/>
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    </div>
  );
}

export default App;
