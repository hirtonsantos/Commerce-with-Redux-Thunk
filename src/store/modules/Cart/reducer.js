
const defaultState = JSON.parse(localStorage.getItem("cart")) || [];

const cartReducer = ((state = defaultState, action) => {
    switch (action.type){
    case "@cart/ADD":
        const {product} = action
        localStorage.setItem("cart", JSON.stringify([...state, product]));
        return [...state, product]

    case "@cart/REMOVE":
        const { id } = action;
        const index = state.map((item) => item.id).indexOf(Number(id))
        state.splice(index, 1)
        localStorage.setItem("cart", JSON.stringify([...state]));
        return state

        default:
            return state
    }
})

export default cartReducer