import {ADD_ITEM,REMOVE_ITEM,DELETE_ALL} from '../types/ActionTypes';

export const AddItem = (item)=>{
    return async(dispatch)=>{
        dispatch({type:ADD_ITEM,item});
    }
};
export const RemoveItem =(index)=>{
    return async(dispatch)=>{
        dispatch({type:REMOVE_ITEM,index});
    }
}
export const deleteAllItem =(index)=>{
    return async(dispatch)=>{
        dispatch({type:DELETE_ALL});
    }
}