const showCartReducer = ((state = false, action) => {
    switch(action.type){
    case "@cart/ACTIVE":
    const onCart = action
    return onCart;

    default:
            return state
    }
  })
  
export default showCartReducer;
  