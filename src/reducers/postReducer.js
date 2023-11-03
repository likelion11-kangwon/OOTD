import * as types from '../actions/actionTyeps'; //액션 코드로 가져온다.

const post_reducer = {
    postImageUrl: null,
    category: null,
    title: '리덕스 테스트',
    contents: null,
};
export default function postReducer(state = post_reducer, action) {
    switch (action.type) {
        case types._SETIMAGE:
            return { ...state, postImageUrl: action.data };
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
