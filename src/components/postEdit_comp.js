import './postEdit_comp.scss';

function PostEditComp({ imgPath, title, contents }) {
    return (
        <div className="postEdit">
            <div id="imgIn">
                <div>
                    <img src={imgPath} alt="게시물 이미지" />
                </div>
                <div>
                    <button className="imgSelect" type="button">
                        이미지 선택
                    </button>
                </div>
            </div>
            <div className="postInput" id="categoryIn">
                <div>
                    <label htmlFor="category">Category</label>
                    <span className="type-select">
                        <button type="button">clothes</button>
                        <button type="button">shoes</button>
                        <button type="button">acc</button>
                    </span>
                </div>
            </div>
            <div className="postInput" id="titleIn">
                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        name="title"
                        type="text"
                        placeholder="제목을 입력하세요"
                        value={title}
                    />
                </div>
            </div>
            <div className="postInput" id="contentsIn">
                <div>
                    <label htmlFor="contents">Comment</label>
                    <textarea
                        name="contents"
                        type="text"
                        rows={5}
                        placeholder="문구를 입력하세요"
                        value={contents}
                    />
                </div>
            </div>
        </div>
    );
}

export default PostEditComp;
