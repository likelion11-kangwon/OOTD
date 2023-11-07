import '../postUploadHeader.scss';
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
            <h1>POST</h1>
        </div>
    );
};
export default PostDetailHeader;
