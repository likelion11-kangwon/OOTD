import * as types from './actionTyeps';

export const _setImage = data => {
    return {
        type: types._SETIMAGE,
        data,
    };
};
export const _setCategory = data => {
    return {
        type: types._SETCATEGOTY,
        data,
    };
};
export const _setTitle = data => {
    return {
        type: types._SETTITLE,
        data,
    };
};
export const _setContents = data => {
    return {
        type: types._SETCONTENTS,
        data,
    };
};
