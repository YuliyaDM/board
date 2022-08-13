import { format } from 'node:path/win32';
import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route} from 'react-router-dom';
import Board from './pages/Board/Board';
import Home from './pages/Home/Home';
import Error from './pages/Error/Error';
import './AppScss/App.css';
import { RouteComponentProps } from "react-router";
import { Link } from 'react-router-dom';

function App(){
    const handleClick = (): void => {
        let phoneMenu = document.querySelector('.phoneMenu');
        let html = document.querySelector('html');
        if (phoneMenu !== null) {
            phoneMenu.classList.add('activePhoneMenu');
            if (html !== null){
                html.classList.add('closeWindow');
            }
        };
    };
    const closePhoneMenu = (): void => {
        let phoneMenu = document.querySelector('.phoneMenu');
        let html = document.querySelector('html');
        if (phoneMenu !== null) {
            phoneMenu.classList.remove('activePhoneMenu');
            if (html !== null){
                html.classList.remove('closeWindow');
            }
        };
    }
    return(
        <>
            <header className='links'>
                <div className="iconContainer iconContainerClose">
                    <div className="icon close" onClick={handleClick}>
                        <div className="line"></div>
                    </div>
                </div>
                <div className="linksContainer">
                    <a href="/board" className='link linkBoard'>
                        <span>Board</span>
                    </a>
                    <a href="/" className='link linkHome'>
                        <span>Home</span>
                    </a>
                </div>
            </header>
            <div className="phoneMenu">
                    <div className="iconPhoneMenuContainer">
                        <div className="icon iconPhoneMenu" onClick={closePhoneMenu}></div>
                    </div>
                    <div className="borderBottom"></div>
                    <div className="borderRight"></div>
                    <div className="linksMenu">
                        <Link to="/board" className='link linkBoard'>
                            <span>Board</span>
                        </Link>
                        <Link to="/" className='link linkHome'>
                            <span>Home</span>
                        </Link>
                    </div>
                </div>
            <Routes>
                <Route path='/board' element={ <Board /> }></Route>
                <Route path='/' element={ <Home />}></Route>
                <Route path='*' element={ <Error /> }></Route>
            </Routes>
        </>
    )
}

export default App;