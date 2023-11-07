import '../postUploadHeader.scss';
import { useNavigate } from 'react-router-dom';

const BoardHeader = () => {
    const navigate = useNavigate();
    const navigateToMain = () => {
        navigate('/main');
    };
    return (
        <div className="postUHeader">
            <button onClick={navigateToMain} className="backBtn">
                &lt;Back
            </button>
        </div>
    );
};
export default BoardHeader;
