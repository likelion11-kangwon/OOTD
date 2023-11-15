import { useNavigate } from 'react-router-dom';
import './postUploadHeader.scss';

const PostDetailHeader = () => {
    const navigate = useNavigate();
    const navigateToBoard = () => {
        navigate('/board');
    };
    return (
        <div className="postUHeader-wrapper">
            <div className="postUHeader">
                <button onClick={navigateToBoard} className="backBtn">
                    &lt;Back
                </button>
            </div>
        </div>
    );
};
export default PostDetailHeader;
