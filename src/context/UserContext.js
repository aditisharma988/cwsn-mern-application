import{createContext, useReducer} from 'react'

export const UserContext = createContext()
export  const userReducer =(state,action)=>{
    switch(action.type){
        case'SET_USER':
        console.log('Setting user data:', action.payload);
        return{
            ...state,
            user: action.payload,
        }
        case'USER_CREATED':
        return{
            ...state,
            user: [action.payload, ...state.user],
        }
        case'DELETE_USER':
        return{
            ...state,
            user: state.user.filter((w)=>w._id !==action.payload._id)
        }
        default:
            return state
        }
    }

export const UserContextProvider = ({children}) =>{
const [state,dispatch] =useReducer(userReducer,{
    user:[]
});
console.log('UserContextProvider state:', state);

    return(
        <UserContext.Provider value = {{...state,dispatch}}>
{children}
        </UserContext.Provider>
    )
}