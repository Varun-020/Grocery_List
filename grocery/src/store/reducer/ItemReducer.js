import { ADD_ITEM,REMOVE_ITEM ,DELETE_ALL} from "../types/ActionTypes";

const initState ={
    cart:[],
    AllItem: [
        {
            index:1,name:'Strawberry',count:0
        },
        {
            index:2,name:'Blueberry',count:0
        },
        {
            index:3,name:'Orange',count:0
        },
        {
            index:4,name:'Banana',count:0
        },
        {
            index:5,name:'Apple',count:0
        },
        {
            index:6,name:'Carrot',count:0
        },
        {
            index:7,name:'Celery',count:0
        },
        {
            index:8,name:'Mushroom',count:0
        },
        {
            index:9,name:'Eggs',count:0
        },
        {
            index:10,name:'Cheese',count:0
        },
        
    ],
    
}

const ItemReducer = (state=initState,action)=>{

    if(action.type === ADD_ITEM){        
        const cart = [...state.cart,action.item];
        return {...state,cart:cart};
    }
    
    else if(action.type === REMOVE_ITEM){
        const cart = [...state.cart];
        cart.splice(action.index,1)
        return {...state,cart:cart};
    }
    else if(action.type === DELETE_ALL){
        return {...state,cart:[]};
    }
    else return state;
}

export default ItemReducer;