const idAble = (element) => element.split(/(?=(?<![A-Z]|^)[A-Z])/).join('-').toLowerCase();

export default idAble;
