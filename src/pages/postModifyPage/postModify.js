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
                let res = await axios.get(`/api/post/${postId}`, { withCredentials: true });
                store.dispatch(actions._setImage(null));
                store.dispatch(actions._setCategory(res.data.category));
                store.dispatch(actions._setTitle(res.data.title));
                store.dispatch(actions._setContents(res.data.contents));
            } catch (error) {
                console.error('There was a problem with the request: ', error);
            }
        }
        fetchData();
    }, []);
    const handleSave = () => {
        let isAllFill = true;
        let reducerJson = store.getState().postReducer;
        isAllFill = reducerJson.postImageUrl ? isAllFill : false;
        isAllFill = reducerJson.category ? isAllFill : false;
        isAllFill = reducerJson.title ? isAllFill : false;
        isAllFill = reducerJson.contents ? isAllFill : false;

        if (isAllFill) {
            postPatch();
        } else {
            alert('모든 항목이 입력되었는지 확인해주세요.');
        }
    };
    /**
     * {postId: int, Category: String, postImageUrl, title: String, contents: String} ->성공/실패 코드
     */
    const postPatch = () => {
        axios
            .patch(`/api/post/${postId}`, { withCredentials: true }, store.getState().postReducer)
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
            <PostEditComp />
            <div className="submit_btn_container">
                <button
                    className="submit_btn"
                    type="button"
                    onClick={handleSave}
                >
                    save
                </button>
            </div>
        </div>
    );
}

export default PostModify;
