import { SIGNUP } from "../constants";

const initialState = {
    signUpStatus : false,
}

const SignUpReducer = (state = initialState, action) => {
    switch (action.type){
        case SIGNUP : 
        return {
            ...state,
            signUpStatus : true,

        }
        default :
        return state,
    }
}

export default SignUpReducer;