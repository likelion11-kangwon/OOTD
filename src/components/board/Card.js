import '../../styles/card.scss';

function Card(board) {
    return (
        <div>
            <div className="cardContainer">
                <img src={board.imageUrl} alt="img" />
                <div className="card-info">
                    <div className="text-container">
                        <h2>{board.title}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
