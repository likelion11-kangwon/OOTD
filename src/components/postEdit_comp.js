import PostCate from './postEditZip/postCate';
import PostText from './postEditZip/postText';
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
            <PostText />
        </div>
    );
}

export default PostEditComp;
