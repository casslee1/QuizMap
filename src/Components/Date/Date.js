export const getCurrentDate = () => {
  const date = new Date();
  const day = 27;
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;
  return currentDate;
};

export const getTestingDate = () => {
  let testingDate = new Date().getDay() + 1;
  return testingDate;
};
