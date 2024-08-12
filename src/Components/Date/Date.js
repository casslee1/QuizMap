export const getCurrentDate = () => {
  const date = new Date();
  date.setDate(date.getDate());
  return date;
};
