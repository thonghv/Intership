import * as types from "./../constant/type"
var initialState=[
];
var products =(state=initialState,action)=>{
    switch(action.type){
    case types.LIST_ALL:
        return state;
    default : return state;
    }
};

export default products;