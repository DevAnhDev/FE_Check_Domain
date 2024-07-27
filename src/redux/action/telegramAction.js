
import {

    ADD_TELEGRAM_FAILE,
    ADD_TELEGRAM_REQUEST,
    ADD_TELEGRAM_SUCCESS,
    DELETE_TELEGRAM_REQUEST,
    DELETE_TELEGRAM_SUCCESS,
    GET_ALL_TELEGRAM_FAILE,
    GET_ALL_TELEGRAM_REQUEST,
    GET_ALL_TELEGRAM_SUCCESS,
    UPDATE_TELEGRAM_FAILE,
    UPDATE_TELEGRAM_REQUEST,
    UPDATE_TELEGRAM_SUCCESS,

 } from "../../constans/constaincase";
import { createItem, deleteItem, getAllItems, updateItem } from "../../serviceAPI/apiservice";


export const addTelegramAction = (endpoint, item)=>{
    return async (dispatch)=>{
            dispatch({type: ADD_TELEGRAM_REQUEST});
        try {
            await createItem(endpoint, item);
            dispatch({type:ADD_TELEGRAM_SUCCESS})
        } catch (error) {
            dispatch({type:ADD_TELEGRAM_FAILE})

             
        }

    }
}

export const getAllTelegramAction = (endpoint)=>{
    return async (dispatch)=>{
            dispatch({type: GET_ALL_TELEGRAM_REQUEST});
        try {
            const response = await getAllItems(endpoint);
            console.log("data123: ", response)
            if(response?.statusCode === 200){
                dispatch({type:GET_ALL_TELEGRAM_SUCCESS, payload: {data: response}})
            }
            else{
                dispatch({type:GET_ALL_TELEGRAM_FAILE, payload: {data: [], error: true}})
            }
        } catch (error) {
            dispatch({type:GET_ALL_TELEGRAM_FAILE, payload: {data: [], error: true}})
            
        }

    }
}

export const UpdateTelegramAction = (endpoint,id, item)=>{
    return async (dispatch)=>{
            dispatch({type: UPDATE_TELEGRAM_REQUEST});
        try {
            const response = await updateItem(endpoint, id, item);
            if(response?.statusCode === 200){
                dispatch({type:UPDATE_TELEGRAM_SUCCESS})
            }else{
            dispatch({type:UPDATE_TELEGRAM_FAILE})
            }
        } catch (error) {
            dispatch({type:UPDATE_TELEGRAM_FAILE})
            
        }
    }
}

export const DeleteTelegramAction = (endpoint,id)=>{
    return async (dispatch)=>{
            dispatch({type: DELETE_TELEGRAM_REQUEST});
            console.log("cscks requesrt")
        try {
            await deleteItem(endpoint, id);
            dispatch({type: DELETE_TELEGRAM_SUCCESS})
            console.log("cscks success")
        } catch (error) {
            dispatch({type: DELETE_TELEGRAM_SUCCESS})
            
        }
    }
}


