import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import store from '../../store';
import * as actions from '../../actions';
import { SERVER_URL } from '../../service/constants';
import PostEditComp from '../../components/postEdit_comp';
import PostUHeader from '../../components/postUploadHeader';
import '../../styles/newPost.scss';

function PostModify() {
    const navigate = useNavigate();
    const postId = useParams().postId;
    useEffect(() => {
        async function fetchData() {
            try {
                let res = await axios.get(`${SERVER_URL}/post/${postId}`);
                let img = res.data.postImageUrl;
                store.dispatch(actions._setImage(img ? img : undefined));
                store.dispatch(actions._setCategory(res.data.category));
                store.dispatch(actions._setTitle(res.data.title));
                store.dispatch(actions._setContents(res.data.contents));
            } catch (error) {
                console.error('There was a problem with the request: ', error);
            }
        }
        fetchData();
    }, []);
    /**
     * {userId: int, postId: int, Category: String, postImageUrl, title: String, contents: String} ->성공/실패 코드
     */
    const postPatch = () => {
        const postdata = {
            userId: 123321,
            postImageUrl: store.getState().postReducer.postImageUrl,
            category: store.getState().postReducer.category,
            title: store.getState().postReducer.title,
            contents: store.getState().postReducer.contents,
        };
        axios
            .patch(`${SERVER_URL}/postModify/${postId}`, postdata)
            .then(() => {
                navigate('/mypage');
            })
            .catch(error => {
                console.error('There was a problem with the request:', error);
            });
    };

    return (
        <div className="postModify">
            <PostUHeader headTitle="EDIT POST" />
            <PostEditComp imgPath="images/uploadImage.png" />
            <div className="submit_btn_container">
                <button
                    className="submit_btn"
                    type="button"
                    onClick={postPatch}
                >
                    save
                </button>
            </div>
        </div>
    );
}

export default PostModify;
