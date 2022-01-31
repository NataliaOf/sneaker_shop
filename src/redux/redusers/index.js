import { combineReducers } from 'redux';
import  viewModalReduser  from './viewModal';
import   favoritReduser  from './favoritReduser';
import productReduser from './productReduser';


const rootReduser = combineReducers({
   viewModal:viewModalReduser,
   favorit: favoritReduser,
   product: productReduser
})

export default  rootReduser;