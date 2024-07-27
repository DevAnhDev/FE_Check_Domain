import { ADD_DOMAIN_FAILE, ADD_DOMAIN_REQUEST, ADD_DOMAIN_SUCCESS, DELETE_DOMAIN_FAILE, DELETE_DOMAIN_REQUEST, DELETE_DOMAIN_SUCCESS, GET_ALL_DOMAIN_FAILE, GET_ALL_DOMAIN_REQUEST, GET_ALL_DOMAIN_SUCCESS, SCAN_DOMAIN_FAILE, SCAN_DOMAIN_FAILE_UPDATE_STATUS, SCAN_DOMAIN_REQUEST, SCAN_DOMAIN_SUCCESS, UPDATE_DOMAIN_FAILE, UPDATE_DOMAIN_REQUEST, UPDATE_DOMAIN_SUCCESS } from "../../constans/constaincase"

const initialState = {
    isLoading: null,
    data: [],
    error: true,
    isUpdate: null,
    isUpdateSuccess: null,
    isDelete: null,
    isAddNew: null,
    isScan: null,
    isLoadingUpdate: true,
    isLoadingAddnew: true,
    isLoadingDelete: true,
    isScanLoading: false,



}

const domainReducer = (state= initialState, action)=>{
    switch(action.type){
        case GET_ALL_DOMAIN_REQUEST:
            return {...state, isLoading: null, data: [], error: true}
        case GET_ALL_DOMAIN_SUCCESS:
            return {...state, isLoading: true, data: action.payload?.data?.data, error: false}
        case GET_ALL_DOMAIN_FAILE:
            return {...state, isLoading: false, data: [], error: true}
        
        case UPDATE_DOMAIN_REQUEST:
            return {...state,isUpdate: null, isLoadingUpdate: true}
        case UPDATE_DOMAIN_SUCCESS :
            return {...state,isUpdate: true, isLoadingUpdate: false}
        case UPDATE_DOMAIN_FAILE :
            return {...state,isUpdate: false, isLoadingUpdate: false}

        case DELETE_DOMAIN_REQUEST:
            return {...state, isDelete: null, isLoadingDelete: true}
        case DELETE_DOMAIN_SUCCESS:
            return {...state, isDelete: true, isLoadingDelete: false}
        case DELETE_DOMAIN_FAILE:
            return {...state, isDelete: false, isLoadingDelete: false}

        case ADD_DOMAIN_REQUEST:
            return {...state, isAddNew: null, isLoadingAddnew: true}
        case ADD_DOMAIN_SUCCESS:
            return {...state, isAddNew: true, isLoadingAddnew: false}
        case ADD_DOMAIN_FAILE:
            return {...state, isAddNew: false, isLoadingAddnew: false}
        
        case SCAN_DOMAIN_REQUEST:
            return {...state, isScan: null, isScanLoading: true}
        case SCAN_DOMAIN_SUCCESS:
            return {...state, isScan: true,  isScanLoading: false}
        case SCAN_DOMAIN_FAILE:
            return {...state, isScan: false, isScanLoading: false}
        case SCAN_DOMAIN_FAILE_UPDATE_STATUS:
            return {...state, isLoading: null}
            
    
        default:
        return state;
    }
};



export default domainReducer;