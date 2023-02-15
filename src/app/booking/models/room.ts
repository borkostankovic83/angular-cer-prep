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
        "pictures": ['https://images.unsplash.com/flagged/photo-1556438758-8d49568ce18e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9', 'https://i.pinimg.com/originals/dc/8b/27/dc8b275c373728eed125eb0ee7a2acd7.jpg', 'https://www.corinthia.com/media/1563/corinthia-lisbon-deluxe-king-bedroom.jpg'],
      } as Room,
      {
        "id": 2,
        "roomNumber": 2,
        "name": "Room 2",
        "price": 66,
        "description": "Lorem ipsum dolor sit amet, debet definitionem eos id, doming cotidieque sea no. Cum tation sapientem honestatis ut, primis verear meliore at nec. Possim dissentias quaerendum ad duo, pri no aperiri adolescens. No pro luptatum delicata.",
        "capacity": 3,
        "pictures": ['https://images.unsplash.com/flagged/photo-1556438758-8d49568ce18e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9' ],
    } as Room,
    {
      "id": 3,
      "roomNumber": 3,
      "name": "Room 3",
      "price": 88,
      "description": "Ea animal electram mel, eu sit paulo scripta quaeque, quem impetus dignissim ex eos. Vim saperet tractatos ut, est tale scaevola intellegebat in. Et quaeque sensibus disputationi pri. No cum esse soleat tibique, an integre singulis inciderint per. ",
      "capacity": 3,
      "pictures": ['https://images.unsplash.com/flagged/photo-1556438758-8d49568ce18e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9', 'https://i.pinimg.com/originals/dc/8b/27/dc8b275c373728eed125eb0ee7a2acd7.jpg', 'https://www.corinthia.com/media/1563/corinthia-lisbon-deluxe-king-bedroom.jpg'],
    } as Room,
    {
      "id": 4,
      "roomNumber": 4,
      "name": "Apartement 2",
      "price": 100,
      "description": "Nec ex option percipit, in mei erant fuisset, animal minimum intellegebat an pri. An sea enim doctus legimus. Eum in inani detracto iracundia. Eu quod sumo usu. Ex vim error nostrud, ei per magna justo nostrud, ad qui quas appareat insolens..",
      "capacity": 3,
      "pictures": ['https://images.unsplash.com/flagged/photo-1556438758-8d49568ce18e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9'],
    } as Room,
    {
      "id": 5,
      "roomNumber": 5,
      "name": "Apartement 1",
      "price": 100,
      "description": "An quo sumo graecis concludaturque, vide laoreet praesent eu ius. Eum iriure fuisset no, adhuc suavitate imperdiet mel ut, erant sententiae usu at. Te mel erant equidem principes. No mea omittam conclusionemque, et his fuisset voluptaria dissentiet.",
      "capacity": 4,
      "pictures": ['https://i.pinimg.com/originals/dc/8b/27/dc8b275c373728eed125eb0ee7a2acd7.jpg', 'https://www.corinthia.com/media/1563/corinthia-lisbon-deluxe-king-bedroom.jpg'],
    } as Room,
    {
      "id": 6,
      "roomNumber": 6,
      "name": "Room 4",
      "price": 150,
      "description": "Lorem ipsumis a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups.",
      "capacity": 2,
      "pictures": ['https://images.unsplash.com/flagged/photo-1556438758-8d49568ce18e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9', 'https://i.pinimg.com/originals/dc/8b/27/dc8b275c373728eed125eb0ee7a2acd7.jpg', 'https://www.corinthia.com/media/1563/corinthia-lisbon-deluxe-king-bedroom.jpg'],
    } as Room,
    {
      "id": 7,
      "roomNumber": 7,
      "name": "Condo",
      "price": 400,
      "description": "Lorem ipsumis a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups.",
      "capacity": 6,
      "pictures": ['https://images.unsplash.com/flagged/photo-1556438758-8d49568ce18e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9', 'https://i.pinimg.com/originals/dc/8b/27/dc8b275c373728eed125eb0ee7a2acd7.jpg', 'https://www.corinthia.com/media/1563/corinthia-lisbon-deluxe-king-bedroom.jpg'],
    } as Room,
    {
      "id": 8,
      "roomNumber": 8,
      "name": "Apartement 5",
      "price": 120,
      "description": "Lorem ipsumis a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups.",
      "capacity": 3,
      "pictures": ['https://images.unsplash.com/flagged/photo-1556438758-8d49568ce18e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9', 'https://i.pinimg.com/originals/dc/8b/27/dc8b275c373728eed125eb0ee7a2acd7.jpg', 'https://www.corinthia.com/media/1563/corinthia-lisbon-deluxe-king-bedroom.jpg'],
    } as Room,
    {
      "id": 9,
      "roomNumber": 9,
      "name": "Apartement 4",
      "price": 202,
      "description": "Lorem ipsumis a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups.",
      "capacity": 4,
      "pictures": ['https://images.unsplash.com/flagged/photo-1556438758-8d49568ce18e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9', 'https://i.pinimg.com/originals/dc/8b/27/dc8b275c373728eed125eb0ee7a2acd7.jpg', 'https://www.corinthia.com/media/1563/corinthia-lisbon-deluxe-king-bedroom.jpg'],
    } as Room
];
