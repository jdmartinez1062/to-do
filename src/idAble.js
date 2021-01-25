const idAble = (element) => element.split('s+(?=[A-Z])').join('-').toLowerCase();

export default idAble;
