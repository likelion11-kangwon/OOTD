import store from '../../store';
import * as actions from '../../actions';

/**
 * postEdit_comp - title, contents
 */
export default function PostText() {
    return (
        <div>
            <div className="postInput" id="titleIn">
                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        id="title"
                        type="text"
                        placeholder="제목을 입력하세요"
                        value={store.getState().postReducer.title}
                        onChange={event => {
                            store.dispatch(
                                actions._setTitle(event.target.value),
                            );
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
                        value={store.getState().postReducer.contents}
                        onChange={event => {
                            store.dispatch(
                                actions._setContents(event.target.value),
                            );
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
