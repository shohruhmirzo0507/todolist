
let todosData = JSON.parse(localStorage.getItem("todos"))

const todos = ( state=todosData || [], action ) => {
    switch(action.type){
        case "ADD_TODO":
            return state = [...state, action.payload]
        case "REMOVE_TODO":
            return state = state.filter(el => el.id !== action.payload.id)
        case "UPDATE_TODO":
            return state = action.payload
        case "DELETE_ALL":
            return state = []
        default:
            return state
    }
}

export default todos