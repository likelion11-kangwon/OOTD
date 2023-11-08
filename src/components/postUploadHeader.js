import { useNavigate } from 'react-router-dom';

import './postUploadHeader.scss';

function PostUHeader({ headTitle }) {
    const navigator = useNavigate();

    return (
        <div className="postUHeader">
            <button
                className="backBtn"
                onClick={() => {
                    navigator('/board');
                }}
            >
                &lt;Back
            </button>
            <h1>{headTitle}</h1>
        </div>
    );
}

export default PostUHeader;
