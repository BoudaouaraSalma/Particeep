import{DELETE_CARD,LIKE_CARD,DISLIKE_CARD} from '../actions/ActionType'
const filmList=[
    {
        id: '1',
        title: 'Oceans 8',
        category: 'Comedy',
        likes: 4,
        dislikes: 1,
        img:'https://musicimage.xboxlive.com/catalog/video.movie.8D6KGWXN1X0V/image?locale=fr-fr&mode=crop&purposes=BoxArt&q=90&h=300&w=200&format=jpg'
    }, {
        id: '2',
        title: 'Midnight Sun',
        category: 'Comedy',
        likes: 2,
        dislikes: 0,
        img:'https://media.services.cinergy.ch/media/box1600/e577d27591123120497457ee90dbf7a277226924.jpg'
    }, {
        id: '3',
        title: 'Les indestructibles 2',
        category: 'Animation',
        likes: 3,
        dislikes: 1,
        img:'https://fr.web.img6.acsta.net/pictures/18/04/13/15/09/0323902.jpg'
    }, {
        id: '4',
        title: 'Sans un bruit',
        category: 'Thriller',
        likes: 6,
        dislikes: 6,
        img:'https://fr.web.img5.acsta.net/pictures/21/05/06/15/58/0640312.jpg'
    }, {
        id: '5',
        title: 'Creed II',
        category: 'Drame',
        likes: 16,
        dislikes: 2,
        img:'https://fr.web.img6.acsta.net/pictures/18/10/04/11/18/5464085.jpg'
    }, {
        id: '6',
        title: 'Pulp Fiction',
        category: 'Thriller',
        likes: 11,
        dislikes: 3,
        img:'https://fr.web.img4.acsta.net/medias/nmedia/18/36/02/52/18846059.jpg'
    }, {
        id: '7',
        title: 'Pulp Fiction',
        category: 'Thriller',
        likes: 12333,
        dislikes: 32,
        img:'https://fr.web.img4.acsta.net/medias/nmedia/18/36/02/52/18846059.jpg'
    }, {
        id: '8',
        title: 'Seven',
        category: 'Thriller',
        likes: 2,
        dislikes: 1,
        img:'https://imgsrc.cineserie.com/2016/11/282283.jpg?ver=1'
    }, {
        id: '9',
        title: 'Inception',
        category: 'Thriller',
        likes: 2,
        dislikes: 1,
        img:'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg'
    }, {
        id: '10',
        title: 'Gone Girl',
        category: 'Thriller',
        likes: 22,
        dislikes: 12,
        img:'https://www.ecranlarge.com/uploads/image/001/148/7xkj1acu40bjzlhvprilwjfvw7-555.jpg'
    },

    ]

export const reducerFilm=(state= filmList,action)=>{
    switch(action.type){

        case LIKE_CARD:
            return state.map(el =>el.id === action.payload.id ?
                ({ ...el} = {...action.payload,likes:action.payload.likes+1 } ) : el ,
          );

        case DISLIKE_CARD:
            return state.map(el =>el.id === action.payload.id ?
                ({ ...el } ={...action.payload,dislikes: action.payload.dislikes+1 }) :  el,
                );

        case DELETE_CARD:
            return(state.filter(el=>el.id!==action.payload)
            );
        default:
            return state;
    }

}
