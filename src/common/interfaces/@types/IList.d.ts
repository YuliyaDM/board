import ICard from "./ICard";

interface IList{
    readonly id: number;
    readonly title: string;
    readonly cards: ICard[];
}

export default IList;