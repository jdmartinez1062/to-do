const CheckList = (title, status = false) => {
  const statusToggle = () => {
    if (this.status) {
      this.status = false;
    } else {
      this.status = true;
    }
  };

  return {
    title,
    status,
    statusToggle,
  };
};

export default CheckList;
