import { createSlice } from "@reduxjs/toolkit";

export let userWalaSlice = createSlice({
    name:'user-slice',
    initialState:{
        city:'fsd',
        cart:[ ]
    },
 
    reducers:{
    // actions
        createUser:(puranaData, nyaData)=>{
            
            puranaData.cart.push(nyaData.payload);

                console.log(nyaData)

        },
         removeUser:(puranaData, nyaData)=>{
            
             puranaData.cart.splice(nyaData.payload, 1 );

         },
        // updateUser:(puranaData, nyaData)=>{

        //     // users[index] = user;
        //     puranaData.users[nyaData.payload.i] = nyaData.payload.user;


        // }
    }
});


export let {createUser, removeUser, updateUser} = userWalaSlice.actions;