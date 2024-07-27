import { 
    ADD_TELEGRAM_FAILE,
    ADD_TELEGRAM_REQUEST,
    ADD_TELEGRAM_SUCCESS,
    DELETE_TELEGRAM_FAILE,
    DELETE_TELEGRAM_REQUEST,
    DELETE_TELEGRAM_SUCCESS,
    GET_ALL_TELEGRAM_FAILE,
    GET_ALL_TELEGRAM_REQUEST,
    GET_ALL_TELEGRAM_SUCCESS,
    UPDATE_TELEGRAM_FAILE,
    UPDATE_TELEGRAM_REQUEST,
    UPDATE_TELEGRAM_SUCCESS,
 } from "../../constans/constaincase"

const initialState = {
    isLoading: null,
    data: [],
    isAdd: null,
    isUpdate: null,
    isDelete: null,

    isLoadingAdd: true,
    isUpdateLoading: true,
    isDeleteLoading: true





}

const telegramReducer = (state= initialState, action)=>{
    switch(action.type){
        
        case GET_ALL_TELEGRAM_REQUEST:
            return {...state, isLoading: false, data:[]}
        case GET_ALL_TELEGRAM_SUCCESS:
            return {...state, isLoading: true, data: action?.payload?.data?.data}
        case GET_ALL_TELEGRAM_FAILE:
            return {...state, isLoading: true, data: [] }

        case ADD_TELEGRAM_REQUEST:
            return {...state, isAdd: null, isLoadingAdd: true }
        case ADD_TELEGRAM_SUCCESS:
            return {...state, isAdd: true, isLoadingAdd: false }
        case ADD_TELEGRAM_FAILE:
            return {...state, isAdd: false, isLoadingAdd: false }

        case UPDATE_TELEGRAM_REQUEST:
            return {...state, isUpdate: null, isUpdateLoading: true }
        case UPDATE_TELEGRAM_SUCCESS:
            return {...state, isUpdate: true, isUpdateLoading: false }
        case UPDATE_TELEGRAM_FAILE:
            return {...state, isUpdate: false, isUpdateLoading: false }

        case DELETE_TELEGRAM_REQUEST:
            return {...state, isDelete: null, isDeleteLoading: true }
        case DELETE_TELEGRAM_SUCCESS:
            return {...state, isDelete: true, isDeleteLoading: false }
        case DELETE_TELEGRAM_FAILE:
            return {...state, isDelete: false, isDeleteLoading: false }

        default:
        return state;
    }
};



export default telegramReducer;