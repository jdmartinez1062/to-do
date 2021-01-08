const idAble = (element) => {
  return element.split('\s+(?=[A-Z])').join('-').toLowerCase()
};

export default idAble;
