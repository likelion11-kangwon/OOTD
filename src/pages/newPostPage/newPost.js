import PostEditComp from '../../components/postEdit_comp';
import PostUHeader from '../../components/postUploadHeader';
import '../../styles/newPost.scss';

function NewPost() {
    return (
        <div className="newPost">
            <PostUHeader headTitle="NEW POST" />
            <PostEditComp imgPath="images/uploadImage.png" />
            <div className="submit_btn_container">
                <button className="submit_btn" type="button">
                    upload
                </button>
            </div>
        </div>
    );
}

export default NewPost;
