import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import store from '../../store';
import PostEditComp from '../../components/postEdit_comp';
import PostUHeader from '../../components/postUploadHeader';
import '../../styles/newPost.scss';

function NewPost() {
    const navigate = useNavigate();
    const handleUpload = () => {
        let isAllFill = true;
        let reducerJson = store.getState().postReducer;
        isAllFill = reducerJson.postImageUrl ? isAllFill : false;
        isAllFill = reducerJson.category ? isAllFill : false;
        isAllFill = reducerJson.title ? isAllFill : false;
        isAllFill = reducerJson.contents ? isAllFill : false;

        if (isAllFill) {
            postNewPost();
        } else {
            alert('모든 항목이 입력되었는지 확인해주세요.');
        }
    };
    /**
     * {userId: int, Category: String, postImageUrl, title: String, contents: String} -> 성공시{status: 200}
     */
    const postNewPost = () => {
        axios
            .post(`/api/post`, store.getState().postReducer)
            .then(() => {
                navigate('/main');
            })
            .catch(error => {
                console.error('There was a problem with the request:', error);
            });
    };

    return (
        <div className="newPost">
            <PostUHeader headTitle="NEW POST" />
            <PostEditComp />
            <div className="submit_btn_container">
                <button
                    className="submit_btn"
                    type="button"
                    onClick={handleUpload}
                >
                    upload
                </button>
            </div>
        </div>
    );
}

export default NewPost;
