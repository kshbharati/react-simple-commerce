import { Types } from "../constants/_loginActions";

export const ActionCreators={
    login: (user:any)=>({type:Types.LOGIN,payload: {user}}),
}