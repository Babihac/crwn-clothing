const INIT_STATE = {
  sections: [
    {
      title: "hats",
      imageUrl:
        "https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80",
      id: 1,
      linkUrl: "hats",
    },
    {
      title: "jackets",
      imageUrl:
        "https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80",
      id: 2,
      linkUrl: "shop/jackets",
    },
    {
      title: "sneakers",
      imageUrl:
        "https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80",
      id: 3,
      linkUrl: "shop/sneakers",
    },
    {
      title: "womens",
      imageUrl:
        "https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80",
      id: 4,
      linkUrl: "shop/womens",
      size: "large",
    },
    {
      title: "mens",
      imageUrl:
        "https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80",
      size: "large",
      id: 5,
      linkUrl: "shop/mens",
    },
  ],
};

const directoryReeducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReeducer;
