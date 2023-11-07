function Card({ board }) {
    return (
        <div className="cardContainer">
            <img src={`URL_${board}`} alt="img" />
            <h2>{board.title}</h2>
            <p>{board.author}</p>
        </div>
    );
