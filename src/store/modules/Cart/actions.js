const addToCard = (product) => ({type: "@cart/ADD", product}) 

export const removeFromCart = (id) => ({ type: "@cart/REMOVE", id });

export default addToCard