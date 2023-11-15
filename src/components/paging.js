import './paging.scss';

function PictureBox({ postId, imageUrl, title, navigate }) {
    return (
        <div
            className="picture-box"
            onClick={() => {
                navigate(`/board/${postId}`);
            }}
        >
            <div className="picture-image">
                <img
                    src={imageUrl}
                    alt={`post-preview-${postId}`}
                    className="post-preview"
                />
            </div>
            {title.length >= 10 ? title.slice(0, 9) + ' ...' : title}
        </div>
    );
}

function NumberBox({ idx, currentPage, setCurrentPage }) {
    return (
        <div className="number-box" onClick={() => setCurrentPage(idx)}>
            <div className={`number ${currentPage === idx ? 'active' : ''}`}>
                {idx + 1}
            </div>
        </div>
    );
}

export { PictureBox, NumberBox };
