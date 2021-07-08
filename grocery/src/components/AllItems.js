import React from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { AddItem } from '../store/method/ItemMethods';

// const allItems= [
//     {
//         index:1,name:'Strawberry'
//     },
//     {
//         index:2,name:'Blueberry'
//     },
//     {
//         index:3,name:'Orange'
//     },
//     {
//         index:4,name:'Banana'
//     },
//     {
//         index:5,name:'Apple'
//     },
//     {
//         index:6,name:'Carrot'
//     },
//     {
//         index:7,name:'Celery'
//     },
//     {
//         index:8,name:'Mushroom'
//     },
//     {
//         index:9,name:'Eggs'
//     },
//     {
//         index:10,name:'Cheese'
//     },
//     {
//         index:11,name:'Butter'
//     },
//     {
//         index:12,name:'Rice'
//     },
//     {
//         index:13,name:'Bread'
//     },
// ]

function AllItems() {
    const  dispatch = useDispatch();
    const {AllItem} = useSelector(state => state.ItemReducer);


    const addToBasket=(item)=>e=>{
        dispatch(AddItem(item));  
    }
    return (
        <div className="allItems">
            <h1 className="grocerylist">All Items</h1>
            {
            AllItem.map((item)=>{
                return (
                    <div className="item" key={item.index}>
                        <div className="icon-item">
                        <svg onClick={addToBasket(item)} xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
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

export default AllItems
