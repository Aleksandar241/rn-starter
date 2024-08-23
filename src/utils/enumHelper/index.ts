const getValues = (data: object): string[] =>
  Object.keys(data).filter(key => Number.isNaN(parseInt(key, 10)));

export default {
  getValues,
};
