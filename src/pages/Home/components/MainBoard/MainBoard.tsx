import React from "react";
import { ReactDOM } from "react";
import IMainBoard from "../../../../common/interfaces/@types/IMainBoard";
import {Link} from 'react-router-dom';
import './MainBoardScss/MainBoard.css';

let random = (max: number, min: number) => Math.round(Math.random() * (max - min) + min);

export default function MainBoard(props: IMainBoard){
    let boardId = '/board/:' + props.id;
    let color = `hsl(${random(255, 0)}, 100%, 50%)`;
    return(
        <div className="MainBoardTitleContainer" style={{background: color}}>
            <Link to={boardId}>
                <p className="MainBoardTitle">{props.title}</p>
            </Link>
        </div>
    )
}