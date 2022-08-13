import './CardScss/Card.css';
import ICardTitle from '../../../../common/interfaces/@types/ICardTitle';

export default function Card(props: ICardTitle){
    return(
        <div className="CardTitle">
            {props.title}
        </div>
    )
}