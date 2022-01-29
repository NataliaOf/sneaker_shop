import { combineReducers } from 'redux';
import  viewModalReduser  from './viewModal';
import   favoritReduser  from './favoritReduser';


const rootReduser = combineReducers({
   viewModal:viewModalReduser,
   favorit: favoritReduser
})

export default  rootReduser;