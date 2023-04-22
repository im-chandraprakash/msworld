import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({

    name:"user",
    initialState:[],
    reducers:{
        addNote(state , action ){   
            console.log(action.payload);
            state.push(action.payload);
        },
        removeNotes(state , action){

        },
    }

});

export default userSlice.reducer;
export const {addNote , removeNotes} = userSlice.actions;