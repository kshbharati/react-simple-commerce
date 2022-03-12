import { Types } from "../constants/_loginActions";

const initialState={
    profile:{
        email:'',
        password:'',
    },
    formSubmitted:false,
}

const reducer=(state=initialState,action:any)=>{
    switch(action.type){
        case Types.LOGIN:
            console.log('login',action.payload.user)
            return {
                ...state,
                profile:action.payload.user,
                formSubmitted:false
            }
        default:
            return state;
    }
}

export default reducer;