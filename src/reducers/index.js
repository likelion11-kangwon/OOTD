import { combineReducers } from 'redux'; //다중 리듀서를 사용할때 리듀서를 넘겨주기 위한 용도
import postReducer from './postReducer';

export default combineReducers({ postReducer }); //다중으로 사용 되기 때문에 JSON타입 특성상 redux_settingData키로 값이 들어가기 때문에 this.propsredux_settingData.setting 가 된다.
