import { createStore } from 'redux';
import mailAppReducer from './reducers';

const store = createStore(mailAppReducer);
export default store;
