// import React from 'react';
//
// const Comment = () => {
//     const [userName, getUserName] = useState('');
//     const [comment, setComment] = useState('');
//     const [feedComments, setFeedComments] = useState([]);
//     const [isValid, setIsValid] = useState(false);
//
//     const post = e => {
//         const copyFeedComments = [...feedComments];
//         copyFeedComments.push(comment);
//         setFeedComments(copyFeedComments);
//         setComment('');
//     };
//     return(
//         <div>
//             <div className='comment-card'>
//                 <input type="text"
//                        className="inputComment"
//                        placeholder="댓글 달기..."
//                        onChange={ e => {
//                            setComment(e.target.value);
//                        }}
//                        onKeyUp={e => {
//                            e.target.value.length > 0
//                                ? setIsValid(true)
//                                : setIsValid(false);
//                        }}
//                        value={comment} />
//                 <button type="button"
//                         className={
//                             comment.length > 0
//                             ? 'submitCommentActive'
//                                 : 'submitCommentInactive'
//                         }
//                         onClick={post}
//                         disabled={isValid ? false : true}
//                         ></button>
//             </div>
//             {feedComments.map((commentArr, i) => {
//                 return(
//                     <CommentList
//                         userName={userName}
//                         userComment={commentArr}
//                         key={{i}} />
//                 )
//             })}
//         </div>
//     )
// }