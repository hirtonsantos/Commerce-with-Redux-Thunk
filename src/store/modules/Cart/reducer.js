
const defaultState = JSON.parse(localStorage.getItem("cart")) || [];

const cartReducer = ((state = defaultState, action) => {
    switch (action.type){
    case "@cart/ADD":
        const {product} = action
        const {add} = product
        localStorage.setItem("cart", JSON.stringify([...state, add]));
        return [...state, add]

    case "@cart/REMOVE":
        const { id } = action;
        const {remove} = id
        const index = state.map((item) => item.id).indexOf(Number(remove))
        state.splice(index, 1)
        localStorage.setItem("cart", JSON.stringify([...state]));
        return state

        default:
            return state
    }
})

export default cartReducer