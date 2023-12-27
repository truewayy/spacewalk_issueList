const convertedDate = (date: string) => {
  const converted = new Date(date);
  return `${converted.getFullYear()}-${converted.getMonth() + 1}-${converted
    .getDate()
    .toString()
    .padStart(2, '0')}`;
};

export default convertedDate;
