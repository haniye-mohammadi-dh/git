// export const posts=(state={data:[],loading:false,error:""},{type,payload})=>{
// switch (type) {
//     case "success":
//         return payload

//     case "loading":
//         return payload

//     case "failed":
//         return payload

//     default:

// }return state
// }
// export const posts=(state={data:[],loading:false,error:''},{type,payload})=>{
// switch (type) {
//     case "loading":
//         return payload
//     case "success":
//         return payload
//     case "failed":
//         return payload

//     default:
// return state
// }
// }
// export const posts=(state={data:[],loading:false,error:''},{type,payload})=>{
// switch (type) {
//     case "success":
//         return payload

//     case "loading":
//         return payload

//     case "failed":
//         return payload

//     case "edit":
//         return payload

//     default:
//         return state
// }
// }

export const posts = (
  state = { loading: false, data: [], error: "" },
  { type, payload }
) => {
  switch (type) {
    case "loading":
      return payload;

    case "success":
      return payload;

    case "failed":
      return payload;
    case "edit":
      return payload;

    default:
      return state;
  }
};
