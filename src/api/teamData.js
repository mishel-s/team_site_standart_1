import logo from '../assets/img/logo/logo-odessa.png';

import dimitrov from '../assets/img/players/dimitrov.png';
import bugaiov from '../assets/img/players/bugaiov.png';
import savastru from '../assets/img/players/savastru.png';
import kirichenko from '../assets/img/players/kirichenko.png';
import kovalyov from '../assets/img/players/kovalyov.png';
import budushevskiy from '../assets/img/players/budushevskiy.png';

import esfu from '../assets/img/partners/esfu.png';
import givova from '../assets/img/partners/givova.png';
import huawei from '../assets/img/partners/huawei.png';
import mind_games from '../assets/img/partners/mind_games.png';
import select from '../assets/img/partners/select.png';

import image1 from '../assets/img/images/image1.jpg';
import image2 from '../assets/img/images/image2.jpg';
import image3 from '../assets/img/images/image3.jpg';
import image4 from '../assets/img/images/image4.jpeg';
import image5 from '../assets/img/images/image5.jpg';
import image6 from '../assets/img/images/image6.jpg';

import p1image from '../assets/img/logo/logo-png.png';
import p3image from '../assets/img/partners/must_media.png';
import p4image from '../assets/img/partners/mind_games.png';
import p6image from '../assets/img/players/savastru.png';

import italy from '../assets/img/logo/countries/italy.png';
import germany from '../assets/img/logo/countries/germany.png';
import france from '../assets/img/logo/countries/france.png';
import ukraine from '../assets/img/logo/countries/ukraine.png';
import spain from '../assets/img/logo/countries/spain.png';
import united_kingdom from '../assets/img/logo/countries/united_kingdom.png';

export const teamData = 
  {
    id: 777,
    logo: logo,
    name: "FC Odessa",
    date_creation: "2016-04-25",
    country: "Ukraine",
    city: "Kiev",
    contact_person: "Mishel",
    phone: "+38 (093) 333-33-33",
    email: "fcodessa@ukr.net",
    description: "команды единомышленников, которые связаны футболом и спортивным образом жизни",
    fans: 0,
    photos: [
      {id: 2, image: image5, name: "best player"},
      {id: 3, image: image6, name: "good game"},
      {id: 4, image: image3, name: "faster of the fast"},
      {id: 5, image: image4, name: "best rest have ever been"},
      {id: 6, image: image5, name: "last game in the season"},
      {id: 17, image: image6, name: "best player"},
      {id: 18, image: image1, name: "good game"},
      {id: 19, image: image2, name: "faster of the fast"}
    ],

    videos: [
      { id: 7, name: 'firstvideo', video: 'https://www.youtube.com/embed/krPnpKGykQs'},
      { id: 8, name: 'secondvideo', video:  'https://www.youtube.com/embed/u5CcInM4EYU'},
      { id: 9, name: 'thirdvideo', video: 'https://www.youtube.com/embed/krPnpKGykQs' },
      { id: 10, name: 'fourthvideo', video:  'https://www.youtube.com/embed/u5CcInM4EYU'},
      { id: 11, name: 'fifthvideo', video:  'https://www.youtube.com/embed/krPnpKGykQs'},
      { id: 32, name: 'firstvideo', video: 'https://www.youtube.com/embed/krPnpKGykQs'},
      { id: 33, name: 'secondvideo', video:  'https://www.youtube.com/embed/u5CcInM4EYU'},
      { id: 34, name: 'thirdvideo', video: 'https://www.youtube.com/embed/krPnpKGykQs' },
      { id: 35, name: 'fourthvideo', video:  'https://www.youtube.com/embed/u5CcInM4EYU'},
      { id: 36, name: 'fifthvideo', video:  'https://www.youtube.com/embed/krPnpKGykQs'}
    ],

    publications: [
      {id: 20, image: 'https://image.tmdb.org/t/p/w500_and_h282_face/9xj4OXUbX2FYorf6Vat6Rlq1u01.jpg', title: "Final results 2018. The gratest scores of the world in bigest universe you have ever seen", shortDescription: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", publication: "", lastUpdated: "2016-04-25 16:44:12", link: "http://bsl.fima4u.com/"},
      {id: 21, image: 'https://image.tmdb.org/t/p/w500_and_h282_face/5KhMpFJdnOAsDmIpT0TINUNDt8L.jpg', title: "Fima | This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", shortDescription: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", publication: "", lastUpdated: "2018-04-03 12:44:12", link: "http://fima4u.com/"},
      {id: 22, image: 'https://image.tmdb.org/t/p/w500_and_h282_face/xgbeBCjmFpRYHDF7tQ7U98EREWp.jpg', title: "ESFU. This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", shortDescription: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", publication: "", lastUpdated: "2018-07-25 20:08:12", link: "http://esfu.fima4u.com/"},
      {id: 23, image: 'https://image.tmdb.org/t/p/w500_and_h282_face/7hkwB48qzkrEAew9UMnn03odqpn.jpg', title: "Fima | WSL. This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", shortDescription: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", publication: "", lastUpdated: "2018-08-11 08:13:12", link: "http://wsl.fima4u.com/"},
      {id: 24, image: 'https://image.tmdb.org/t/p/w500/ecHD0rmx8l4eZVSISLJVAgAaODU.jpg', title: "Fima | Championship Standings", shortDescription: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", publication: "", lastUpdated: "2018-09-09 11:25:12", link: "http://fima4u.com/index.php?a=championship&obj=2&c=39&standings"},
      {id: 25, image: 'https://image.tmdb.org/t/p/w500_and_h282_face/dKZxVvLAmL88wXdYVSErnDycqIQ.jpg', title: "Fima | Football Schools", shortDescription: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", publication: "", lastUpdated: "2018-11-12 14:15:12", link: "http://fima4u.com/index.php?a=list&t=schools"},
      {id: 26, image: 'https://image.tmdb.org/t/p/w500_and_h282_face/9xj4OXUbX2FYorf6Vat6Rlq1u01.jpg', title: "Final results 2018. This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", shortDescription: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", publication: "", lastUpdated: "2016-04-25 16:44:12", link: "http://bsl.fima4u.com/"},
      {id: 27, image: 'https://image.tmdb.org/t/p/w500/5KhMpFJdnOAsDmIpT0TINUNDt8L.jpg', title: "Fima | This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", shortDescription: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", publication: "", lastUpdated: "2018-04-03 12:44:12", link: "http://fima4u.com/"},
      {id: 28, image: 'https://image.tmdb.org/t/p/w500_and_h282_face/xgbeBCjmFpRYHDF7tQ7U98EREWp.jpg', title: "ESFU. This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", shortDescription: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", publication: "", lastUpdated: "2018-07-25 20:08:12", link: "http://esfu.fima4u.com/"},
      {id: 29, image: 'https://image.tmdb.org/t/p/w500_and_h282_face/7hkwB48qzkrEAew9UMnn03odqpn.jpg', title: "Fima | WSL. This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", shortDescription: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", publication: "", lastUpdated: "2018-08-11 08:13:12", link: "http://wsl.fima4u.com/"},
      {id: 30, image: 'https://image.tmdb.org/t/p/w500/ecHD0rmx8l4eZVSISLJVAgAaODU.jpg', title: "Fima | Championship Standings", shortDescription: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", publication: "", lastUpdated: "2018-09-09 11:25:12", link: "http://fima4u.com/index.php?a=championship&obj=2&c=39&standings"},
      {id: 31, image: 'https://image.tmdb.org/t/p/w500_and_h282_face/dKZxVvLAmL88wXdYVSErnDycqIQ.jpg', title: "Fima | Football Schools. This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", shortDescription: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.", publication: "", lastUpdated: "2018-11-12 14:15:12", link: "http://fima4u.com/index.php?a=list&t=schools"}
    ],
    partners: [
      {id: 12, logo: esfu, name: "esfu", link: "http://esfu.com.ua/"},
      {id: 13, logo: givova, name: "givova", link: "http://givova.kiev.ua/"},
      {id: 14, logo: huawei, name: "huawei", link: "https://consumer.huawei.com/ua/"},
      {id: 15, logo: mind_games, name: "mind_games", link: "https://www.facebook.com/mindgamekyiv/"},
      {id: 16, logo: select, name: "select", link: "http://select-sport.com.ua/"}
    ],
    squad: [
      {id: 32, photo: dimitrov, firstname: "Igor", lastname: "Dimitrov", position: {title: "Защитник", id: 2}, country: italy},
      {id: 33, photo: bugaiov, firstname: "Alexandr", lastname: "Bugaiov", position: {title: "Полузащитник", id: 3}, country: united_kingdom},
      {id: 34, photo: savastru, firstname: "Mishel", lastname: "Savastru", position: {title: "Полузащитник", id: 3}, country: france},
      {id: 35, photo: kirichenko, firstname: "Volodymyr", lastname: "Kirichenko", position: {title: "Защитник", id: 2}, country: germany},
      {id: 36, photo: budushevskiy, firstname: "Igor", lastname: "Budushevskiy", position: {title: "Нападающий", id: 4}, country: spain},
      {id: 37, photo: kovalyov, firstname: "Alex", lastname: "Kovalyov", position: {title: "Вратарь", id: 1}, country: ukraine},
    ],
    future_events: [{}],
    past_events: [{}],
    team_history: "Дата основания клуба: 2015 год, Достижения: серебряный призер Высшей лиги Weekend Football 2016, Цвета: бело-голубые, Цвета формы: бело-голубой, Тренер команды: Кушнир Александр, Капитан команды: Приймук Евгений",
    achievements: "music awards 2018",
  }
;