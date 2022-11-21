// import {
//   legacy_createStore as createStore,
//   combineReducers,
//   applyMiddleware,
// } from "redux";
// import thunk from "redux-thunk";
// import { posts } from "./reducer";
// const middleware =[thunk]
// const reducers = combineReducers({posts});
// const store = createStore(reducers,applyMiddleware(...middleware));
// export default store;

// import {  legacy_createStore as createStore,combineReducers,applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import {posts } from "./reducer";
// const middleware=[thunk]
// const reducers = combineReducers({posts});
// const store = createStore(reducers,applyMiddleware(...middleware));
// export default store;

// import {
//   legacy_createStore as createStore,
//   combineReducers,
//   applyMiddleware,
// } from "redux";
// import thunk from "redux-thunk";
// import { posts } from "./reducer";
// const middleWare = [thunk];
// const data = JSON.parse(localStorage.getItem("posts"))?JSON.parse(localStorage.getItem("posts")):[];
// const initialState = { posts: { data:[...data],loading:false,error:''} };
// const reducers = combineReducers({ posts });
// const store = createStore(
//   reducers,
//   initialState,
//   applyMiddleware(...middleWare)
// );

// export default store;

import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { posts } from "./reducer";
const middleWare = [thunk];
const data= JSON.parse(localStorage.getItem("posts"))?JSON.parse(localStorage.getItem("posts")):[];
const initialState = {posts:{ loading: false, data: [...data], error: ""}};
const reducers = combineReducers({posts});
const store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middleWare)
);

export default store;


