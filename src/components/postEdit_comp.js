import store from '../store';

import PostCate from './postEditZip/postCate';
import './postEdit_comp.scss';

function PostEditComp({ imgPath }) {
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
            <PostCate />
            <div className="postInput" id="titleIn">
                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        id="title"
                        type="text"
                        placeholder="제목을 입력하세요"
                        value={store.getState().postReducer.title}
                    />
                </div>
            </div>
            <div className="postInput" id="contentsIn">
                <div>
                    <label htmlFor="contents">Comment</label>
                    <textarea
                        id="contents"
                        type="text"
                        rows={5}
                        placeholder="문구를 입력하세요"
                        value={store.getState().postReducer.contents}
                    />
                </div>
            </div>
        </div>
    );
}

export default PostEditComp;
