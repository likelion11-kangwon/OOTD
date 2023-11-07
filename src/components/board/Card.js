import '../../styles/card.scss';

function Card(board) {
    return (
        <div className="cardContainer">
            {/*<img src={`URL_${board}`} alt="img"/>*/}
            <h2>{board.title}</h2>
            <h4>{board.author}</h4>
        </div>
    );
}

export default Card;
