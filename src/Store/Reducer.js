const intialState = {
    message: 'Hii Zeus'
}

const reducer  = (state = intialState, action) => {
    const newState = {...state}

    if(action.type === "Message Change")
    {
        newState.message = 'Thanks'
    }

    return newState
}

export default reducer;