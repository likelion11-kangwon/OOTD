import './postUploadHeader.scss';
import { useNavigate } from 'react-router-dom';

const PostDetailHeader = () => {
    const navigate = useNavigate();
    const navigateToBoard = () => {
        navigate('/board');
    };
    return (
        <div className="postUHeader">
            <button onClick={navigateToBoard} className="backBtn">
                &lt;Back
            </button>
        </div>
    );
};
export default PostDetailHeader;
