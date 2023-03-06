import { Reservation } from "./reservation";

export class Room {
    id: number = 0;
    roomNumber: number = 0;
    price: number = 0;
    name: string = '';
    description: string = '';
    capacity: number = 0;
    pictures: string[] = [];
    reservations: Reservation[] = [];
}


export const RoomsMock = [
    {
        "id": 1,
        "roomNumber": 1,
        "name": "Room 1",
        "price": 22,
        "description": "Lorem ipsumis a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups.",
        "capacity": 3,
        "pictures": ['https://th.bing.com/th/id/OIP.rWTV5kGQ6N8b3ij-0h-dCQHaFS?pid=ImgDet&rs=1','https://images.unsplash.com/flagged/photo-1556438758-8d49568ce18e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9', 'https://i.pinimg.com/originals/dc/8b/27/dc8b275c373728eed125eb0ee7a2acd7.jpg', 'https://www.corinthia.com/media/1563/corinthia-lisbon-deluxe-king-bedroom.jpg','https://i.pinimg.com/originals/58/41/49/584149ec5a9dfd4b56f6e50120b2f3a7.jpg','https://wallpapercave.com/wp/wp6957342.jpg','https://wallpapercave.com/wp/wp6957266.jpg','https://cache.marriott.com/marriottassets/marriott/YOWMC/yowmc-guestroom-0054-hor-clsc.jpg?interpolation=progressive-bilinear&'],
      } as Room,
      {
        "id": 2,
        "roomNumber": 2,
        "name": "Room 2",
        "price": 66,
        "description": "Lorem ipsum dolor sit amet, debet definitionem eos id, doming cotidieque sea no. Cum tation sapientem honestatis ut, primis verear meliore at nec. Possim dissentias quaerendum ad duo, pri no aperiri adolescens. No pro luptatum delicata.",
        "capacity": 3,
        "pictures": ['https://images.unsplash.com/flagged/photo-1556438758-8d49568ce18e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9','https://th.bing.com/th/id/OIP.rWTV5kGQ6N8b3ij-0h-dCQHaFS?pid=ImgDet&rs=1', 'https://cache.marriott.com/marriottassets/marriott/YOWMC/yowmc-guestroom-0054-hor-clsc.jpg?interpolation=progressive-bilinear&', 'https://indigoeastend.com/wp-content/uploads/2015/08/rooms-4.jpg', 'https://images.pexels.com/photos/1470945/pexels-photo-1470945.jpeg?cs=srgb&dl=architecture-apartment-room-1470945.jpg&fm=jpg', 'https://images.pexels.com/photos/2631746/pexels-photo-2631746.jpeg?cs=srgb&dl=bedroom-2631746.jpg&fm=jpg' ],
    } as Room,
    {
      "id": 3,
      "roomNumber": 3,
      "name": "Room 3",
      "price": 88,
      "description": "Ea animal electram mel, eu sit paulo scripta quaeque, quem impetus dignissim ex eos. Vim saperet tractatos ut, est tale scaevola intellegebat in. Et quaeque sensibus disputationi pri. No cum esse soleat tibique, an integre singulis inciderint per. ",
      "capacity": 3,
      "pictures": ['https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?cs=srgb&dl=cabinet-ceiling-clean-1669799.jpg&fm=jpg','https://images.unsplash.com/flagged/photo-1556438758-8d49568ce18e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9', 'https://i.pinimg.com/originals/dc/8b/27/dc8b275c373728eed125eb0ee7a2acd7.jpg', 'https://www.corinthia.com/media/1563/corinthia-lisbon-deluxe-king-bedroom.jpg'],
    } as Room,
    {
      "id": 4,
      "roomNumber": 4,
      "name": "Apartement 2",
      "price": 100,
      "description": "Nec ex option percipit, in mei erant fuisset, animal minimum intellegebat an pri. An sea enim doctus legimus. Eum in inani detracto iracundia. Eu quod sumo usu. Ex vim error nostrud, ei per magna justo nostrud, ad qui quas appareat insolens..",
      "capacity": 3,
      "pictures": ['https://th.bing.com/th/id/R.7ea0dd38b3ba2aa3ee963df74b19f799?rik=4G64opJ2KL%2bMzA&riu=http%3a%2f%2fwww.zastavki.com%2fpictures%2f1920x1200%2f2012%2fInterior_Hotel_Room_033155_.jpg&ehk=Y%2fHByKgua4N6%2bjkE7Y6ToEUe8tHywdh4FapMAJEncV0%3d&risl=&pid=ImgRaw&r=0','https://images.unsplash.com/flagged/photo-1556438758-8d49568ce18e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9','https://th.bing.com/th/id/OIP.rWTV5kGQ6N8b3ij-0h-dCQHaFS?pid=ImgDet&rs=1'],
    } as Room,
    {
      "id": 5,
      "roomNumber": 5,
      "name": "Apartement 1",
      "price": 100,
      "description": "An quo sumo graecis concludaturque, vide laoreet praesent eu ius. Eum iriure fuisset no, adhuc suavitate imperdiet mel ut, erant sententiae usu at. Te mel erant equidem principes. No mea omittam conclusionemque, et his fuisset voluptaria dissentiet.",
      "capacity": 4,
      "pictures": ['https://i.pinimg.com/originals/dc/8b/27/dc8b275c373728eed125eb0ee7a2acd7.jpg', 'https://www.corinthia.com/media/1563/corinthia-lisbon-deluxe-king-bedroom.jpg','https://th.bing.com/th/id/OIP.rWTV5kGQ6N8b3ij-0h-dCQHaFS?pid=ImgDet&rs=1'],
    } as Room,
    {
      "id": 6,
      "roomNumber": 6,
      "name": "Room 4",
      "price": 150,
      "description": "Lorem ipsumis a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups.",
      "capacity": 2,
      "pictures": ['https://ihouse.unimelb.edu.au/__data/assets/image/0004/3014824/Scheps-174.jpg','https://images.unsplash.com/flagged/photo-1556438758-8d49568ce18e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9', 'https://i.pinimg.com/originals/dc/8b/27/dc8b275c373728eed125eb0ee7a2acd7.jpg', 'https://www.corinthia.com/media/1563/corinthia-lisbon-deluxe-king-bedroom.jpg','https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?cs=srgb&dl=cabinet-ceiling-clean-1669799.jpg&fm=jpg'],
    } as Room,
    {
      "id": 7,
      "roomNumber": 7,
      "name": "Condo",
      "price": 400,
      "description": "Lorem ipsumis a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups.",
      "capacity": 6,
      "pictures": ['https://images7.alphacoders.com/693/693201.jpg','https://ihouse.unimelb.edu.au/__data/assets/image/0004/3014824/Scheps-174.jpg','https://images.unsplash.com/flagged/photo-1556438758-8d49568ce18e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9', 'https://i.pinimg.com/originals/dc/8b/27/dc8b275c373728eed125eb0ee7a2acd7.jpg', 'https://www.corinthia.com/media/1563/corinthia-lisbon-deluxe-king-bedroom.jpg'],
    } as Room,
    {
      "id": 8,
      "roomNumber": 8,
      "name": "Apartement 5",
      "price": 120,
      "description": "Lorem ipsumis a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups.",
      "capacity": 3,
      "pictures": ['https://images2.alphacoders.com/264/264500.jpg','https://images.unsplash.com/flagged/photo-1556438758-8d49568ce18e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9', 'https://i.pinimg.com/originals/dc/8b/27/dc8b275c373728eed125eb0ee7a2acd7.jpg', 'https://www.corinthia.com/media/1563/corinthia-lisbon-deluxe-king-bedroom.jpg','https://www.karrathacentralapartments.com.au/data/deposit/galleryImage.9557.image/image.jpg', 'https://www.karrathacentralapartments.com.au/data/deposit/galleryImage.9557.image/image.jpg'],
    } as Room,
    {
      "id": 9,
      "roomNumber": 9,
      "name": "Apartement 4",
      "price": 202,
      "description": "Lorem ipsumis a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups.",
      "capacity": 4,
      "pictures": ['https://www.karrathacentralapartments.com.au/data/deposit/galleryImage.9557.image/image.jpg','https://images.unsplash.com/flagged/photo-1556438758-8d49568ce18e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9', 'https://i.pinimg.com/originals/dc/8b/27/dc8b275c373728eed125eb0ee7a2acd7.jpg', 'https://www.corinthia.com/media/1563/corinthia-lisbon-deluxe-king-bedroom.jpg'],
    } as Room
];
