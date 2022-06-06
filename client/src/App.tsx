import React from 'react';
import  './styles/index.scss';
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";


function App() {
  return (
    <div className={"app"}>
        <Header/>
        <MainPage/>
    </div>
  );
}

export default App;
