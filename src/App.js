// import { useDispatch, useSelector } from 'react-redux';
// import React, { useEffect } from 'react';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { getData } from './redux/action';
// function App() {
//   const {data,loading,error}=useSelector((state)=>state.posts)
//   const dispatch=useDispatch()
//   useEffect(()=>{
//     dispatch(getData())
//   },[])
//   console.log(data);
//   return (
//     <div className="App">

//     </div>
//   );
// }

// import React, { useEffect } from "react";
// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { useDispatch, useSelector } from "react-redux";
// import { getData } from "./redux/action";
// function App() {
//   const { data, error, loading } = useSelector((state) => state.posts);
//   const dispatch = useDispatch();
//   const datas={}
//   useEffect(() => {
//     dispatch(getData());
//   }, []);
//   return (
//     <div className="App">
//       {datas.map((item,index) => (
//         <div>{item.userId}</div>
//       ))}
//     </div>
//   );
// }

// export default App;

// import React, { useEffect, useState } from "react";
// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { useDispatch, useSelector } from "react-redux";
// import { editText, getData } from "./redux/action";
// import { Button, Spinner } from "react-bootstrap";

// function App() {
//   const { data, loading, error } = useSelector((state) => state.posts);
//   const [select, setSelet] = useState("");
//   const [text, setText] = useState("");
//   const dispatch = useDispatch();
//   useEffect(() => {
//     const data = JSON.parse(npm.getItem("posts"))
//     if (!data?.length) {
//       dispatch(getData());
//     }
//   }, []);
//   return (
//     <div className="App">
//       {loading ? (
//         <Spinner animation="border" variant="info" />
//       ) : error ? (
//         <p>{error}</p>
//       ) : (
//         data.map((item, index) => {
//           if (select === item.id) {
//             return (
//               <div>
//                 <input
//                   value={text}
//                   onChange={(e) => {
//                     setText(e.target.value);
//                   }}
//                 />
//                 <Button
//                   variant="info"
//                   onClick={() => {
//                     dispatch(editText(index, text));
//                     setSelet(null);
//                   }}
//                 >
//                   edit
//                 </Button>
//               </div>
//             );
//           } else {
//             return (
//               <p
//                 key={item.id}
//                 onClick={() => {
//                   setSelet(item.id);
//                   setText(item.title);
//                 }}
//               >
//                 {item.title}
//               </p>
//             );
//           }
//         })
//       )}
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { editText, getData } from "./redux/action";
import { Button, Spinner } from "react-bootstrap";
function App() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.posts);
  const [select, setSelect] = useState("");
  const [text, setText] = useState("");
  useEffect(() => {
    const data=JSON.parse(localStorage.getItem("posts"));
    if(!data?.length){

      dispatch(getData());
    }
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Spinner animation="border" variant="info" />
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        data.map((item, index) => {
          if (select === item.id) {
            return (
              <div>
                <input
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                ></input>
                <Button onClick={() =>{ dispatch(editText(text, index));setSelect(null)}}>
                  edit
                </Button>
              </div>
            );
          } else {
            return (
              <p
                key={item.id}
                onClick={() => {
                  setSelect(item.id);
                  setText(item.title);
                }}
              >
                {item.title}
              </p>
            );
          }
        })
      )}
    </div>
  );
}
export default App;
