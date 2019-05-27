
let initState = {
    photos : [
        {
            "id": 1,
            "title": "the umbrella girl",
            "thumbnailUrl": "https://images.pexels.com/photos/1260301/pexels-photo-1260301.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "author" : "Leanne Graham",
          },
          {
            "author" : "Ervin Howell",
            "id": 2,
            "title": "story of traditional girls",
            "thumbnailUrl": "https://images.pexels.com/photos/904117/pexels-photo-904117.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          },
          {
            "author" : "Ervin Howell",
            "id": 3,
            "title": "happines on its peak",
            "thumbnailUrl": "https://images.pexels.com/photos/2068033/pexels-photo-2068033.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          },
          {
            "author" : "Ervin Howell",
            "id": 4,
            "title": "i don't need anyone",
            "thumbnailUrl": "https://images.pexels.com/photos/1790475/pexels-photo-1790475.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          },
          {
            "author" : "Ervin Howell",
            "id": 5,
            "title": "love the nature",
            "thumbnailUrl": "https://images.pexels.com/photos/1874914/pexels-photo-1874914.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          },
          {
            "author" : "Ervin Howell",
            "id": 6,
            "title": "me and you forever",
            "thumbnailUrl": "https://images.pexels.com/photos/1468066/pexels-photo-1468066.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          },
          {
            "author" : "Ervin Howell",
            "id": 7,
            "title": "a perfect shoot",
            "thumbnailUrl": "https://images.pexels.com/photos/1139450/pexels-photo-1139450.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          },
          {
            "author" : "Ervin Howell",
            "id": 8,
            "title": "the wild naturalist girl",
            "thumbnailUrl": "https://images.pexels.com/photos/1936986/pexels-photo-1936986.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          },
          {
            "author" : "Ervin Howell",
            "id": 9,
            "title": "an evening in snowfall",
            "thumbnailUrl": "https://images.pexels.com/photos/905012/pexels-photo-905012.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          },
          {
            "author" : "Ervin Howell",
            "id": 10,
            "title": "a trip to mexico",
            "thumbnailUrl": "https://images.pexels.com/photos/1898990/pexels-photo-1898990.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          },
          
    ]
}


const rootReducer = (state = initState , action) =>{
  if(action.type === 'DELETE_POST'){
   let newPhotos = state.photos.filter((photo)=>{
     return photo.id !== action.id
   });
   return{
     ...state,
     photos : newPhotos
   }
  }

  return state;
}

export default rootReducer;