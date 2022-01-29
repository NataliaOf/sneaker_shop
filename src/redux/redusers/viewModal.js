const initialStaet = {
   modalAvatar: false,
   modalBasket: false,
   modalQuestion: false
}

 function viewModalReduser(state = initialStaet, action) {
   switch (action.type) {
     case 'ADD-MODAL':
       return {...state, modalAvatar:  action.payload}

       case 'ADD-MODAL-BASKET':
         return {...state,  modalBasket: action.payload}

         case 'ADD-MODAL-QUESTION':
            return {...state,  modalQuestion: action.payload}
     default:
       return state;
   }
 };

 export default viewModalReduser;