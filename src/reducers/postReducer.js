import * as types from '../actions/actionTyeps'; //액션 코드로 가져온다.

const post_reducer = {
    imageFile: null,
    category: undefined,
    title: undefined,
    contents: undefined,
};
export default function postReducer(state = post_reducer, action) {
    switch (action.type) {
        case types._SETIMAGE:
            return { ...state, imageFile: action.data };
        case types._SETCATEGOTY:
            return { ...state, category: action.data };
        case types._SETTITLE:
            return { ...state, title: action.data };
        case types._SETCONTENTS:
            return { ...state, contents: action.data };
        default:
            return state;
    }
}
