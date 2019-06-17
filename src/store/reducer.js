const initialState ={
    age:21
}


const reducer = (state = initialState, action) =>{

    let newState = {...state};
    if(action.type === 'ageUp'){
        newState.age++;
    }

    if(action.type === 'ageDown'){
        newState.age--;
    }


    return newState;
};


export default reducer;