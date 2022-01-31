const initialStaet = {
   product: []
  
};

function productReduser(state= initialStaet, action){
   switch (action.type) {
      case 'ADD-PRODUCT':
         return{...state, product: action.payload};
         
   
      default:
         return state;
   }
}

export default productReduser;