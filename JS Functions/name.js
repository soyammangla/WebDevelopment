const user = {
  name: "Papa",
  showName: () => {
    console.log(this.name);
  },
};

user.showName(); // undefined
