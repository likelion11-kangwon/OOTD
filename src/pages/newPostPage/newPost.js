import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import store from '../../store';
import { SERVER_URL } from '../../service/constants';
import PostEditComp from '../../components/postEdit_comp';
import PostUHeader from '../../components/postUploadHeader';
import '../../styles/newPost.scss';

function NewPost() {
    const navigate = useNavigate();
    /**
     * {userId: int, Category: String, postImageUrl, title: String, contents: String} -> 성공시{status: 200}
     */
    const postNewPost = () => {
        const postdata = {
            userId: 123321,
            postImageUrl: store.getState().postReducer.postImageUrl,
            category: store.getState().postReducer.category,
            title: store.getState().postReducer.title,
            contents: store.getState().postReducer.contents,
        };
        axios
            .post(`${SERVER_URL}/newPost`, postdata)
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
            <PostEditComp imgPath="images/uploadImage.png" />
            <div className="submit_btn_container">
                <button
                    className="submit_btn"
                    type="button"
                    onClick={postNewPost}
                >
                    upload
                </button>
            </div>
        </div>
    );
}

export default NewPost;
