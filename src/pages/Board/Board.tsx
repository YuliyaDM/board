import React, { ComponentElement, JSXElementConstructor } from "react";

// components

import List from "./components/List/List";
import Card from "./components/Card/Card";

// interfaces
import ICard from '../../common/interfaces/@types/ICard';
import IList from '../../common/interfaces/@types/IList';

//functions

import withRouter from "../../common/functions/withRouter";

// styles
import './BoardScss/Board.css';
import { RouteComponentProps, useLocation } from "react-router";

type StateType = Readonly<{}>;

type PropsType = Readonly<{
  title: string,
  lists: IList[],
}>;

class Board extends React.Component<StateType & RouteComponentProps<{}>, PropsType> {
  constructor(props: PropsType & RouteComponentProps) {
    super(props);
    this.state = {
        title: "My first Board",
        lists: [
        {
          id: 1,
          title: "Plan",
          cards: [
            {id: 1, title: "Wash the cat"},
            {id: 2, title: "Make soup"},
            {id: 3, title: "Go to the supermarket"}
          ]
        },
        {
          id: 2,
          title: "Trash",
          cards: [
            {id: 4, title: "Watch TV"},
            {id: 5, title: "Eat some candies"},
            {id: 6, title: "Drink some tea with sugar"}
          ]
        },
        {
          id: 3,
          title: "Forgotten",
          cards: [
            {id: 5, title: "Play the Mario"},
            {id: 6, title: "Watch 'Stranger things'"}
          ]
        },
        {
          id: 3,
          title: "Completed yesterday",
          cards: [
            {id: 5, title: "Play UnderTale"},
            {id: 6, title: "Help parents for the house"}
          ]
        },
        {
          id: 3,
          title: "Completed one month ago",
          cards: [
            {id: 5, title: "Do homework"},
            {id: 6, title: "Go to the party of your friend"},
            {id: 7, title: 'Take a dog for a walk'}
          ]
        }
      ]    
    }
  }
  render() {
    console.log(this);
    console.log(this.props);
    const card_title = this.state.title;
    return (
      <div className="Board">
        <div className="BoardTitle">
          <span>
            {card_title}
          </span>
        </div>
        <div className="BoardsAndButtonsContainer">
          <div className="Cards">
            {this.state.lists.map((element: IList) => {
              return(
                <>
                  <List title={element.title} cards={element.cards}/>
                </>
              )
            })}
          </div>
          <div className="AddCard">
            <button>Add card</button>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Board);