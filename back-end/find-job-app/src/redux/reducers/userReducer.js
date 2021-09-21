export const reducer = (state = null, action) => {
    if (action.type === 'login')
        return action.payload
    return state
}













// import { LOGIN, LOGOUT } from "../actions/actionTypes"

// // State mặc định
// const initialState = {
//     user: {},
// }

// // Nếu không nhận vào state nào thì state vẫn như cũ (init)
// const userReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case LOGIN: {
//             return {
//                 // Spread operator, lấy object từ payload map vào object state, 
//                 // ghi đè các trường cùng key, tạo mới nếu state không có
//                 ...state.user,
//                 ...action.payload
//             }
//         }
//         case LOGOUT: {
//             return {...state.user}
//         }
//         default:
//             return state;
//     }
// }

// export default userReducer;