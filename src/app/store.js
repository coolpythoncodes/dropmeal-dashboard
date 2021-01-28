import {createStore} from "redux"
const initialState={
  user:null,
  userData:null,
  initializing:true,
  meals:[],
  property:null,
  myProperties:[],
  amenities:[],
  results:[],
  users:[],
  searchQuery:null,
  dashboard:true,
  photoURL:null,
  env:null,
  latestProperties:[],
  adminProperties:[],
  categories:[],
  activities:[],
  notifications:[],
  histories:[],
  earnings:{
      balance:0,
      pending:0,
  },
  chart:{
      monthly:[],
      yearly:[],
      weekly:[]
  }
}
const reducer = (prevState =initialState, action)=>{
  switch(action.type){
      case 'RETRIVE_USER':
          return{
              ...prevState,
              user:action.payload.user,
              userData:action.payload.userData
          }
      case 'SET_STATE':
          return{
              ...prevState,
              initializing:action.payload.initializing
          }
      case 'GET_NOTIFICATIONS':
          return{
              ...prevState,
              notifications:action.payload.notifications
          }
      case 'GET_MEALS':
        return{
            ...prevState,
            meals:action.payload.meals
        }
    case 'GET_CATEGORIES':
    return{
        ...prevState,
        categories:action.payload.categories
    }
      case 'GET_PHOTO':
          return{
              ...prevState,
              photoURL:action.payload.photoURL
          }
   
      case 'GET_ADMIN_USERS':
          return{
              ...prevState,
              users:action.payload.users
          }
   
      case 'GET_DASHBOARD':
          return{
              ...prevState,
              dashboard:action.payload.dashboard
          }
      default:
          return prevState
  }
}
const store = createStore(reducer)
export default store