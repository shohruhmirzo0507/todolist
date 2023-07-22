const word = (state="Bye", action) => {
    switch(action.type){
        case "WORD":
            return state = action.payload
        default:
            return state
    }
}

export default word