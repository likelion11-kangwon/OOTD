import { useRef } from 'react';

import store from '../../store';
import * as actions from '../../actions';

export default function PostCate() {
    const radioBtn = [useRef(), useRef(), useRef()];

    const radioClicked = cate => {
        radioBtn[cate].current.style.setProperty('background-color', '#b5b5b5');
        radioBtn[(cate + 1) % 3].current.style.setProperty(
            'background-color',
            '#e3e3e3',
        );
        radioBtn[(cate + 2) % 3].current.style.setProperty(
            'background-color',
            '#e3e3e3',
        );

        let category = null;
        switch (cate) {
            case 0:
                category = 'clothes';
                break;
            case 1:
                category = 'shoes';
                break;
            default:
                category = 'acc';
        }

        store.dispatch(actions._setCategory(category));
    };

    return (
        <div className="postInput" id="categoryIn">
            <div>
                <label htmlFor="category">Category</label>
                <span id="category" className="type-select">
                    <button
                        type="button"
                        ref={radioBtn[0]}
                        onClick={() => {
                            radioClicked(0);
                        }}
                    >
                        clothes
                    </button>
                    <button
                        type="button"
                        ref={radioBtn[1]}
                        onClick={() => {
                            radioClicked(1);
                        }}
                    >
                        shoes
                    </button>
                    <button
                        type="button"
                        ref={radioBtn[2]}
                        onClick={() => {
                            radioClicked(2);
                        }}
                    >
                        acc
                    </button>
                </span>
            </div>
        </div>
    );
}
