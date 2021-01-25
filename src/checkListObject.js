const CheckList = (id, title, status = false) => {
  const statusToggle = () => {
    if (this.status) {
      this.status = false;
    } else {
      this.status = true;
    }
  };

  return {
    id,
    title,
    status,
    statusToggle,
  };
};

export default CheckList;
