
const initState = {
    restaurants:[
       { id:1,name:'Appellees American' ,		location: 'Decatur' , rating:'5'	},
       { id:2, name:"araby's Sandwiches"	, location:'Boardman', rating:'4.7'},
       { id:3,name:'Auntie Anne'	, location:'Downtown ', rating:'4.8'},
       { id:4, name:'Baton Rouge Steak'	, location:'Montreal', rating:'4.3'},
       { id:5,   name:'BeaverTails	Baked'	, location:'Ottawa', rating:'4.9'},
       { id:6, name:'Big Smoke Burger'	, location:'Toronto', rating:'4.6'},
       { id:7, name:'Bronchos Chicken'	, location:'london', rating:'4.5'}	
    ],
    
     name: null 
    
}
const rootReducer =   (state = initState, action) => {
    
    if(action.type === 'DELETE_USER')
    {
        return { ...state,
            name:null }
    }
    if(action.type === 'ADD_USER')
    {
        let name= action.name;
        
        return{
           ...state,
            name: name
        }
    }
 return state;
}
export default rootReducer