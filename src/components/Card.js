const Card = ({ id, img, title, author }) => {
    return (
        <article className="card">
            <h3>{title}</h3>
            <h4>{author}</h4>
            <div>
                <img alt="card" src={img} />
            </div>
        </article>
    );
};

export default Card;
