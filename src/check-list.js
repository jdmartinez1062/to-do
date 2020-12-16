CheckList = (name, finished = false) => {
  const toggleFinished = () => {
    if (!finished) {
      this.finished = true;
      localStorage.setItem(this.name, JSON.stringify(this.finished));
    } else {
      this.finished = false;
    }
  };

  return {
    name,
    finished,
    toggleFinished,
  };
};

export default CheckList;
