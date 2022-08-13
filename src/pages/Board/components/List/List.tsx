import { createReadStream } from "fs";
import React from "react";
import ReactDOM from 'react-dom';
import ICard from '../../../../common/interfaces/@types/ICard';
import ICardTasks from "../../../../common/interfaces/@types/ICardTasks";
import Card from "../Card/Card";
import './ListScss/List.css'

export default function List(props: ICardTasks){
    return (
        <div className="Card">
            <Card title={props.title}/>
            <div className="CardsTasks">
                {props.cards.map((element: ICard) => {
                    return (
                        <>
                            <div className="taskTitle">{element.title}</div>
                        </>
                    )
                })}
            </div>
        </div>
    );
};