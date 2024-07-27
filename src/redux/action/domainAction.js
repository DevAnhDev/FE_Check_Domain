
import { ADD_DOMAIN_FAILE, ADD_DOMAIN_REQUEST, ADD_DOMAIN_SUCCESS, DELETE_DOMAIN_FAILE, DELETE_DOMAIN_REQUEST, DELETE_DOMAIN_SUCCESS, GET_ALL_DOMAIN_FAILE, GET_ALL_DOMAIN_REQUEST, GET_ALL_DOMAIN_SUCCESS, SCAN_DOMAIN_FAILE, SCAN_DOMAIN_REQUEST, SCAN_DOMAIN_SUCCESS, UPDATE_DOMAIN_FAILE, UPDATE_DOMAIN_REQUEST, UPDATE_DOMAIN_SUCCESS } from "../../constans/constaincase";
import { createItem, deleteItem, getAllItems, updateItem } from "../../serviceAPI/apiservice";

export const addDomainAction = (endpoint, item)=>{
    return async (dispatch)=>{
            dispatch({type: ADD_DOMAIN_REQUEST});
        try {
            await createItem(endpoint, item);
            dispatch({type:ADD_DOMAIN_SUCCESS})
        } catch (error) {
            dispatch({type:ADD_DOMAIN_FAILE})

            
        }

    }
}
export const scanDomainAction = (endpoint)=>{
    return async(dispatch)=>{
        dispatch({type: SCAN_DOMAIN_REQUEST})
        try {
            await getAllItems(endpoint);
            let progress = 0;
            const interval = setInterval(() => {
                progress += 10;
                if (progress >= 110) {
                  clearInterval(interval);
                  dispatch({ type: SCAN_DOMAIN_SUCCESS });
                }
              }, 1000);
        } catch (error) {
            let progress = 0;
            const interval = setInterval(() => {
                progress += 10;
                if (progress >= 110) {
                  clearInterval(interval);
                  dispatch({type: SCAN_DOMAIN_FAILE})
                }
              }, 1000);       
        }
    }
}
export const getAllDomainAction = (endpoint)=>{
    return async (dispatch)=>{
            dispatch({type: GET_ALL_DOMAIN_REQUEST});
        try {
            const response = await getAllItems(endpoint);
            if(response?.statusCode === 200){
                dispatch({type:GET_ALL_DOMAIN_SUCCESS, payload: {data: response}})
            }
            else{
                dispatch({type:GET_ALL_DOMAIN_FAILE, payload: {data: [], error: true}})
            }
        } catch (error) {
            dispatch({type:GET_ALL_DOMAIN_FAILE, payload: {data: [], error: true}})
            
        }

    }
}

export const UpdateDomainAction = (endpoint,id, item)=>{
    return async (dispatch)=>{
            dispatch({type: UPDATE_DOMAIN_REQUEST});
        try {
            const response = await updateItem(endpoint, id, item);
            if(response?.statusCode === 200){
                dispatch({type:UPDATE_DOMAIN_SUCCESS})
            }else{
            dispatch({type:UPDATE_DOMAIN_FAILE})
            }
        } catch (error) {
            dispatch({type:UPDATE_DOMAIN_FAILE})
            
        }
    }
}

export const DeleteDomainAction = (endpoint,id)=>{
    return async (dispatch)=>{
            dispatch({type:DELETE_DOMAIN_REQUEST});
        try {
            await deleteItem(endpoint, id);
            dispatch({type:DELETE_DOMAIN_SUCCESS})
        } catch (error) {
            dispatch({type:DELETE_DOMAIN_FAILE})
            
        }
    }
}


