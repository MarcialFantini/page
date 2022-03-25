import { combineReducers, createStore } from "redux";
import { themeWhiteDark } from "./reducers/themeReducer";

const pageApp = combineReducers({
    themeWhiteDark
})



const store = createStore(
    pageApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.table(store.getState())
export default store