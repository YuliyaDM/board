import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import IMainBoard from '../../common/interfaces/@types/IMainBoard';
import MainBoard from './components/MainBoard/MainBoard';
import './HomeScss/Home.css';

type StateType = Readonly<{}>;

type PropsType = Readonly<{
    boards: Array<IMainBoard>
}>;

export default class MainBoards extends React.Component<StateType, PropsType>{
    constructor(props: PropsType){
        super(props);
        this.state = {
            boards: [
                {id: 1, title: "Games"},
                {id: 2, title: "Friends"},
                {id: 3, title: "School"},
                {id: 4, title: "Social Networks"},
            ]
        }
    }
    render(): React.ReactNode {
        return (
            <div className="MainBoardsContainer">
                <div className="MainBoards">
                    {this.state.boards.map((element) => {
                        return(
                            <MainBoard id={element.id} title={element.title}/>
                        )
                    })}
                </div>
                <div className="ButtonAddMainBoardContainer">
                    <button>Add Board</button>
                </div>
            </div>
        )
    }
}