const products = [
  { id: 1, name: "Jaqueta Hino...", price: 299.99, image: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/9da06782ff3d4e86a52cace700a632a1_9366/jaqueta-hino-juventus-tiro.jpg" },
  { id: 2, name: "Bolsa Gym ...", price: 89.90, image: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/ad1684fc9ffb4959a504ace700a98ac2_9366/bolsa-gym-sack-juventus.jpg" },
  { id: 3, name: "Calça Treino...", price: 249.99, image: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/da58014b91e44af19e50ac6400b3d69e_9366/Calca_Treino_Juventus_Human_Race_Branco_GK7789_21_model.jpg"},
  { id: 4, name: "Camisa Juventus", price: 199.99, image: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/72b621c3001445ed9f16ab1f00cfc960_9366/Camisa_Juventus_1_Branco_EI9900_01_laydown.jpg"}
];

const productsReducer = (state = products, action) => {
  return state;
};

export default productsReducer;
