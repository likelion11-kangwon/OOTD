import '../postUploadHeader.scss';
import toMypageIcon from '../../assets/images/iconToMyPage.png';
import { useNavigate } from 'react-router-dom';

const BoardHeader = () => {
    const navigate = useNavigate();
    const navigateToMyPage = () => {
        navigate('/myPage');
    };
    const navigateToMain = () => {
        navigate('/main');
    };

    return (
        <div className="postUHeader-wrapper">
            <div className="postUHeader">
                <button onClick={navigateToMain} className="backBtn">
                    &lt;Back
                </button>
                <button onClick={navigateToMyPage} className="move-to-mypage">
                    <img src={toMypageIcon} className="tomypage" />
                </button>
            </div>
        </div>
    );
};
export default BoardHeader;
