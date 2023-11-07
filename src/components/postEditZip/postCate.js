import { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as actions from '../../actions';

export default function PostCate() {
    const radioBtn = [useRef(), useRef(), useRef()];
    const dispatch = useDispatch();
    const category = useSelector(state => state.postReducer.category);
    useEffect(() => {
        let cate_id = -1;
        if (category) {
            switch (category.charAt(0)) {
                case 'c':
                    cate_id = 0;
                    break;
                case 's':
                    cate_id = 1;
                    break;
                default:
                    cate_id = 2;
            }
        }
        setRadioCheck(cate_id);
    }, [category]);

    const radioClicked = cate => {
        dispatch(actions._setCategory(cate));
    };
    const setRadioCheck = cate_id => {
        if (cate_id < 0) {
            radioBtn[0].current.style.setProperty(
                'background-color',
                '#e3e3e3',
            );
            radioBtn[1].current.style.setProperty(
                'background-color',
                '#e3e3e3',
            );
            radioBtn[2].current.style.setProperty(
                'background-color',
                '#e3e3e3',
            );
        } else {
            radioBtn[cate_id].current.style.setProperty(
                'background-color',
                '#b5b5b5',
            );
            radioBtn[(cate_id + 1) % 3].current.style.setProperty(
                'background-color',
                '#e3e3e3',
            );
            radioBtn[(cate_id + 2) % 3].current.style.setProperty(
                'background-color',
                '#e3e3e3',
            );
        }
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
                            radioClicked('clothes');
                        }}
                    >
                        clothes
                    </button>
                    <button
                        type="button"
                        ref={radioBtn[1]}
                        onClick={() => {
                            radioClicked('shoes');
                        }}
                    >
                        shoes
                    </button>
                    <button
                        type="button"
                        ref={radioBtn[2]}
                        onClick={() => {
                            radioClicked('acc');
                        }}
                    >
                        acc
                    </button>
                </span>
            </div>
        </div>
    );
}
