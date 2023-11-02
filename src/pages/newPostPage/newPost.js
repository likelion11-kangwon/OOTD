import PostEditComp from "../../components/postEdit_comp";
import PostUHeader from "../../components/postUploadHeader";
import '../../styles/newPost.scss';

function NewPost(){
  return(
    <div className="newPost">
      <PostUHeader headTitle={"NEW POST"}/>
      <PostEditComp imgPath={"images/uploadImage.png"}/>
      <button type="button">upload</button>
    </div>
  )
}

export default NewPost;