import '../../styles/card.scss';

function Card(board) {
    return (
        <div>
            <div className="cardContainer">
                <img
                    src={`https://mobile.busan.com/nas/wcms/wcms_data/photos/2019/06/11/2019061107265195371_l.jpg`}
                    alt="img"
                />
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
