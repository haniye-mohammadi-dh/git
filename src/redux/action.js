// import axios from "axios";

import axios from "axios";

// import axios from "axios"

// export const getData = () => async (dispatch, getState) => {
//     dispatch({ type: "loading" ,payload:{data:[],loading:true,error:""}});
//   try {
//       const { data } = await axios(`https://jsonplaceholder.typicode.com/posts`);
//       dispatch({ type: "success",payload:{data:[...data],loading:false,error:""} });
//     console.log(data);
//   } catch (error) {
//     dispatch({ type: "failed",payload:{data:[],loading:false,error:error.message} });
//     console.log(error.message);
//   }
// };
// export const getData=()=>async(dispatch,getState)=>{
//     dispatch({ type: "loading",payload:{data:[],loading:true,error:""}})
// try {
// const {data}=await axios(`https://jsonplaceholder.typicode.com/posts`)
//     dispatch({ type: "success",payload:{data:[...data],loading:false,error:""}})
// } catch (error) {
//     dispatch({ type: "failed",payload:{data:[],loading:false,error:error.message}})
// }
// }

// export const getData = () => async (dispatch, getState) => {
//   dispatch({
//     type: "loading",
//     payload: { data: [] },
//     loading: true,
//     error: "",
//   });
//   try {
//     const { data } = await axios(`https://jsonplaceholder.typicode.com/posts`);
//     dispatch({
//       type: "success",
//       payload: { data: [...data] },
//       loading: false,
//       error: "",
//     });
//     localStorage.setItem("posts", JSON.stringify(data));
//   } catch (error) {
//     dispatch({
//       type: "failed",
//       payload: { data: [] },
//       loading: false,
//       error: error.message,
//     });
//   }
// };
// export const editText = (index, text) => (dispatch, getState) => {
//   const posts = JSON.parse(JSON.stringify(getState().posts.data));
//   posts[index].title = text;
//   localStorage.setItem("posts", JSON.stringify(posts));
//   dispatch({
//     type: "edit",
//     payload: { loading: false, data: [...posts], error: "" },
//   });
// };

export const getData = () => async (dispatch, getState) => {
  dispatch({
    type: "loading",
    payload: { loading: true, data: [], error: "" },
  });
  try {
    const { data } = await axios(`https://jsonplaceholder.typicode.com/posts`);
    dispatch({
      type: "success",
      payload: { loading: false, data: [...data], error: "" },
    });
    localStorage.setItem("posts",JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: "failed",
      payload: { loading: false, data: [], error: error.message },
    });
  }
};

export const editText = (text, index) => (dispatch, getState) => {
  const posts = JSON.parse(JSON.stringify(getState().posts.data));
  posts[index].title = text;
  localStorage.setItem("posts", JSON.stringify(posts))
  console.log(posts);
  dispatch({
    type: "edit",
    payload: { loading: false, data: [...posts], error: "" },
  });
};
