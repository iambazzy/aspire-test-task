export const generateRandomNumber = (len) => {
  return Math.random().toString().substring(2, len + 2);
}
