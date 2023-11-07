// import axios from 'axios';
// import { useContext, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
//
// /* 댓글 컴포넌트 */
// function Comment(props) {
//     const comment = props.obj;
//
//     const navigate = useNavigate();
//
//     const [show, setShow] = useState(false);
//     const [content, setContent] = useState(comment.body);
//     const changeContent = event => {
//         setContent(event.target.value);
//     };
//
//     /* 댓글 삭제 */
//     const deleteComment = async () => {
//         await axios
//             .delete(`http://localhost:8090/comments`)
//             .then(resp => {
//                 console.log('deleteComment() success :)');
//                 console.log(resp.data);
//
//                 if (resp.data.deletedRecordCount == 1) {
//                     alert('답글을 성공적으로 삭제했습니다 :D');
//                     navigate(0);
//                 }
//             })
//             .catch(err => {
//                 console.log('deleteComment() error :<');
//                 console.log(err);
//             });
//     };
//
//     function updateToggle() {
//         setShow(show => !show);
//     }
//
//     // 삭제되지 않은 댓글의 경우
//     if (comment.del == 0) {
//         return (
//             <>
//                 {/* 상단 영역 (프로필 이미지, 댓글 작성자) */}
//                 <div className="my-1 d-flex justify-content-center">
//                     <div className="col-1">
//                         <img
//                             src="/images/profile-placeholder.png"
//                             alt="프로필 이미지"
//                             className="profile-img"
//                         />
//                     </div>
//                     <div className="col-5">
//                         <div className="row">
//                             <span className="comment-id">{comment.id}</span>
//                         </div>
//                     </div>
//
//                     <div className="col-4 d-flex justify-content-end">
//                         <button
//                             className="btn btn-outline-danger"
//                             onClick={deleteComment}
//                         >
//                             <i className="fas fa-trash-alt"></i>
//                             삭제
//                         </button>
//                     </div>
//                 </div>
//             </>
//         );
//     } else {
//         return (
//             <>
//                 <div className="my-5 d-flex justify-content-center">
//                     <div className="comment">
//                         <span className="del-span">
//                             ⚠️ 작성자에 의해 삭제된 댓글입니다.
//                         </span>
//                     </div>
//                 </div>
//             </>
//         );
//     }
// }
//
// export default Comment;
