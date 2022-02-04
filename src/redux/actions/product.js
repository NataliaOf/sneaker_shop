export const setProduct = (id ) => ({
   type: 'ADD-PRODUCT',
   payload: id,
   });

export const setActive = (id) => ({
   type: 'ADD-ACTIVE',
   payload:id,
}) 

export const setFilter = (view) => ({
   type: 'ADD-FILTER',
   payload: view
})

export const setCard = (name) => ({
   type:'ADD-CARD',
   payload: name
})

export const setCardProduct = (id) => ({
   type:'ADD-CARDPRODUCT',
   payload: id
})

export const viewCardProduct = (card) =>({
   type: 'VIEW-CARDPRODUCT',
   payload: card
})

export const addProductBascet = (product) =>({
   type: 'ADD-PRODUCT-BASKET',
   payload: product
})
export const removeProductBasket = (product) => ({
   type: 'REMOVE-PRODUCT-BASKET',
   payload: product
})

