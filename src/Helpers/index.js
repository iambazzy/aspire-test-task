export const generateRandomNumber = (len) => {
  return Math.random().toString().substring(2, len + 2);
}

export const menuItems = [
  { name: 'Home', img: require('../assets/logoo.png') },
  { name: 'Cards', img: require('../assets/pay.png')},
  { name: 'Payments', img: require('../assets/payments.png') },
  { name: 'Credit', img: require('../assets/credit.png') },
  { name: 'Profile', img: require('../assets/user.png') }
]