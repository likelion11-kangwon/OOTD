import { useState, useEffect } from 'react';

import store from '../../store';
import * as actions from '../../actions';

/**
 * postEdit_comp - title, contents
 */
export default function PostText() {
    const [title, setTitle] = useState(undefined);
    const [contents, setContents] = useState(undefined);
    useEffect(() => {
        setTitle(store.getState().postReducer.title);
        setContents(store.getState().postReducer.contents);
    }, [
        store.getState().postReducer.title,
        store.getState().postReducer.contents,
    ]);

    return (
        <div>
            <div className="postInput" id="titleIn">
                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        id="title"
                        type="text"
                        placeholder="제목을 입력하세요"
                        value={title}
                        onChange={event => {
                            store.dispatch(
                                actions._setTitle(event.target.value),
                            );
                            setTitle(event.target.value);
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
                        value={contents}
                        onChange={event => {
                            store.dispatch(
                                actions._setContents(event.target.value),
                            );
                            setContents(event.target.value);
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
