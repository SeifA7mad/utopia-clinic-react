import offerImage from '../assets/images/dental.png';

import type1Img from '../assets/images/type1.PNG';
import type2Img from '../assets/images/type2.PNG';
import type3Img from '../assets/images/type3.PNG';
import type4Img from '../assets/images/type4.PNG';
import type5Img from '../assets/images/type5.PNG';
import type6Img from '../assets/images/type6.PNG';
import type7Img from '../assets/images/type7.PNG';
import type8Img from '../assets/images/type8.PNG';

// Users
export const dummyUserData = {
  1: { userName: 'Seif ahmad', email: 'seif@', pass: '1234', type: 'admin' },
  2: { userName: 'Nasser', email: 'nasser@', pass: '1234', type: 'doctor' },
  3: { userName: 'Ahmad Sorour', email: 'sorour@', pass: '1234', type: 'user' },
};


// Notifications fo specifc User
export const dummyNotificationData = {
  1: [
    'Minim officia deserunt proident in irure ea amet nostrud voluptate Lorem est incididunt.',
    'Irure nostrud laborum laborum occaecat exercitation culpa esse esse sit irure anim in.',
  ],
  2: [
    'Minim officia deserunt proident in irure ea amet nostrud voluptate Lorem est incididunt.',
    'Irure nostrud laborum laborum occaecat exercitation culpa esse esse sit irure anim in.',
    'Anim laborum tempor esse aliquip pariatur dolore ex dolore exercitation.',
  ],
};



export const offersData = [
  {
    id: 1,
    desc: 'Ullamco mollit in culpa dolor excepteur Lorem id. Anim aliqua Lorem ut pariatur aliquip ea aute qui ipsum anim mollit ex. Mollit culpa eiusmod laborum ut fugiat Lorem sint. Elit anim laboris sit ex. Occaecat reprehenderit tempor occaecat velit ullamco ipsum amet occaecat. Consequat dolore labore amet in irure officia.',
    price: 100,
    img: offerImage,
  },
  {
    id: 2,
    desc: 'Ullamco mollit in culpa dolor excepteur Lorem id. Anim aliqua Lorem ut pariatur aliquip ea aute qui ipsum anim mollit ex. Mollit culpa eiusmod laborum ut fugiat Lorem sint. Elit anim laboris sit ex. Occaecat reprehenderit tempor occaecat velit ullamco ipsum amet occaecat. Consequat dolore labore amet in irure officia.',
    price: 50.5,
    img: offerImage,
  },
  {
    id: 3,
    desc: 'Ullamco mollit in culpa dolor excepteur Lorem id. Anim aliqua Lorem ut pariatur aliquip ea aute qui ipsum anim mollit ex. Mollit culpa eiusmod laborum ut fugiat Lorem sint. Elit anim laboris sit ex. Occaecat reprehenderit tempor occaecat velit ullamco ipsum amet occaecat. Consequat dolore labore amet in irure officia.',
    price: 322.99,
    img: offerImage,
  },
];

export const DiagnosticsTypes = [
  {
    title: 'Gastroenterology',
    img: type1Img,
  },
  {
    title: 'Cardiology',
    img: type2Img,
  },
  {
    title: 'Blood test',
    img: type3Img,
  },
  {
    title: 'MRI testing',
    img: type4Img,
  },
  {
    title: 'Neurosurgery',
    img: type5Img,
  },
  {
    title: 'Orthopedic',
    img: type6Img,
  },
  {
    title: 'Urology',
    img: type7Img,
  },
  {
    title: 'Surgery',
    img: type8Img,
  },
];