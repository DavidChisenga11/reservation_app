
import {createStore} from 'vuex';

export default createStore({
    state:{
        adults: 1,
        children: 0,
        room: 1,
    },
    mutations:{
        increment(state, adults, children, room){
            state[adults]++;
            state[children]++;
            state[room]++;
        },
        decrement(state, adults, children, room){
            state[adults]--;
            state[children]--;
            state[room]--;
        },
    },
    getters:{
        isDecrementDisabled: (state) => (adults) =>{
            return state[adults] === 0;
        },
        isChildDecrementDisabled: (state) => (children)=>{
            return state[children] === 0;
        },
        isRoomDecrementDisabled: (state) => (room) =>{
            return state[room] === 0;
        }
    }
})