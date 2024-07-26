export const getCurrentDate = () => {
  const date = new Date();
  const day = date.getDate() + 1;
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

export const getTestingDate = () => {
  return new Date().getDay() + 1;
};
