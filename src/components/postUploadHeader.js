import './postUploadHeader.scss';

function PostUHeader({ headTitle }) {
    return (
        <div className="postUHeader">
            <button className="backBtn">&lt;Back</button>
            <h1>{headTitle}</h1>
        </div>
    );
}

export default PostUHeader;
