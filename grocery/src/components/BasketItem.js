import React from 'react'
import {useDispatch,useSelector} from 'react-redux';
import { RemoveItem } from '../store/method/ItemMethods';
import { deleteAllItem } from '../store/method/ItemMethods';

function BasketItem() {
    const  dispatch = useDispatch();
    const {cart} =  useSelector(state => state.ItemReducer);
    const removeFromBasket=(index)=>e=>{
        dispatch(RemoveItem(index));  
    }
    const deleteAll=(e)=>{
        dispatch(deleteAllItem());
    }

    

    return (
        <div className="allItems">
            <h1 className="grocerylist">Basket Items</h1>
            <svg xmlns="http://www.w3.org/2000/svg" onClick={deleteAll} class="h-5 w-5 delete" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
            { 
            cart.map((item,index)=>{

                return (
                    <div className="item" key={item.index}>
                        <div className="icon-item">
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={removeFromBasket(index)} class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        </div>
                        <li>{item.name}</li>
                        
                        
                    </div>
                )
                
            })
        }

        </div>
    )
}

export default BasketItem
