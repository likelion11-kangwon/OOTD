import '../../styles/card.scss';

function Card(board) {
    return (
        <div className="cardContainer">
            {/*<img src={`URL_${board}`} alt="img"/>*/}
            <h4>{board.username}</h4>
            <h2>{board.title}</h2>
        </div>
    );
}

export default Card;
