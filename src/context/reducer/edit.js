const edit = (state = null, action) => {
switch (action.type) {
case "EDIT":
    return state = action.payload
case "CANCEL_EDIT":
    return state = null

     default:
        return state
}
}

export default edit