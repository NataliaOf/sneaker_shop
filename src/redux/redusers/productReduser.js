const initialStaet = {
   product: [],
   active: null,
   filter: false,
   card: [],
   cardProduct: {},
   viewCadProduct: false,
   addProduct: [],
  
};

function productReduser(state= initialStaet, action){
   switch (action.type) {
      case 'ADD-PRODUCT':
         return{...state, product: action.payload};
      
       case 'ADD-ACTIVE':
         return{...state, active: action.payload};   
          
       case 'ADD-FILTER':
         return{...state, filter: action.payload}; 

         case 'ADD-CARD':
            return{...state, card: action.payload};  

        case 'ADD-CARDPRODUCT':
           return{ ...state,  cardProduct : action.payload };

           case 'VIEW-CARDPRODUCT':
            return{ ...state,   viewCadProduct : action.payload };

        case 'ADD-PRODUCT-BASKET' :
           return {...state, ...state.addProduct.push(action.payload)  };
         
        case 'REMOVE-PRODUCT-BASKET':
           return{...state, addProduct: action.payload }   
      default:
         return state;
   }
}

export default productReduser;