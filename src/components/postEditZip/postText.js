import { useSelector, useDispatch } from 'react-redux';

import * as actions from '../../actions';

/**
 * postEdit_comp - title, contents
 */
export default function PostText() {
    const post = useSelector(state => state.postReducer);
    const dispatch = useDispatch();

    return (
        <div>
            <div className="postInput" id="titleIn">
                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        id="title"
                        type="text"
                        placeholder="제목을 입력하세요"
                        value={post.title}
                        onChange={event => {
                            dispatch(actions._setTitle(event.target.value));
                        }}
                    />
                </div>
            </div>
            <div className="postInput" id="contentsIn">
                <div>
                    <label htmlFor="contents">Comment</label>
                    <textarea
                        id="contents"
                        type="text"
                        rows={5}
                        placeholder="문구를 입력하세요"
                        value={post.contents}
                        onChange={event => {
                            dispatch(actions._setContents(event.target.value));
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
