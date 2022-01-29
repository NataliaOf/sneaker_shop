const initialStaet = {
   view: 'everyday',
  
}

 function favoritReduser(state = initialStaet, action) {
   switch (action.type) {
     case 'ADD-EVERYDAY':
       return {...state, view: action.payload};
     case 'ADD-RUNNING':
         return {...state, view: action.payload};
     case 'ADD-TRAVEL':
            return {...state, view: action.payload}   ;  

       
     default:
       return state;
   }
 };

 export default  favoritReduser;