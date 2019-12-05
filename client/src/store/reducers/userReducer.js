 import { LOG_IN_USER, LOG_OUT_USER, RELOAD_LOG_IN } from '../constants'

 const initialState = {
    username: "",
    image: "",
    token: ""
 }

 export default (state = initialState, action) => {
  
    console.log("ACTION", action.type)
    console.log("USER", action.user)

    switch (action.type) {

  
        case LOG_IN_USER: {

            localStorage.clear()

            localStorage.setItem('token', action.user.data.token)
            localStorage.setItem('image', action.user.data.image)
            localStorage.setItem('username', action.user.data.username)
            localStorage.setItem('id', action.user.data.id)

             return {...state,
                token: action.user.data.token,
                image: action.user.data.image,
                username: action.user.data.username,
                id: action.user.data.id,
                favList: action.user.data.itineraryFavorites
            }
    
         }

         case RELOAD_LOG_IN: {
  
            return {...state,
                token: localStorage.getItem('token'),
                image: localStorage.getItem('image'),
                username: localStorage.getItem('username'),
                id: localStorage.getItem('id')
            }
         }

         case LOG_OUT_USER: {

            localStorage.clear()

            return {...state,
                token: '',
                image: '',
                username: '',
                id: ''
            }

         }

         default: return state
     }
 }