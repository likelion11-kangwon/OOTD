import { useState } from 'react';
import { useDispatch } from 'react-redux';

import PostCate from './postEditZip/postCate';
import PostText from './postEditZip/postText';
import * as actions from '../actions';
import nullImg from '../assets/images/uploadImage.png';
import './postEdit_comp.scss';

function PostEditComp({ imgP }) {
    const [imgPath, setImgPath] = useState(imgP);
    const dispatch = useDispatch();

    const handleImage = async e => {
        const file = e.target.files[0];
        const err = checkImage(file);

        if (err) return window.alert(err);
        if (file) {
            setImgPath(URL.createObjectURL(file));
            const bodyFormData = new FormData();
            bodyFormData.append('multipartFile', file);
            dispatch(actions._setImage(bodyFormData));
        }
    };
    const checkImage = file => {
        let err = '';

        if (!file) return 'File does not exist.';
        if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
            err = 'Image format is incorrect.';
        }

        return err;
    };

    return (
        <div className="postEdit">
            <div id="imgIn">
                <div>
                    <img
                        src={imgPath ? imgPath : nullImg}
                        alt="게시물 이미지"
                    />
                </div>
                <div>
                    <label htmlFor="imgInput">이미지 선택</label>
                    <input
                        id="imgInput"
                        className="imgSelect"
                        type="file"
                        accept="image/*"
                        onChange={handleImage}
                    />
                </div>
            </div>
            <PostCate />
            <PostText />
        </div>
    );
}

export default PostEditComp;
