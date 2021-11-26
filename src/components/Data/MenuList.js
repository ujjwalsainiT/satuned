export const menus = [
  {
    text: "Home",
    path: "/",
    active: true,
  },
  {
    text: "Products",
    path: "/",
    dropdown: true,
    dropdownList: [
      { text: "Exterior", path: "/exterior-products" },
      { text: "Interior", path: "/interior-products" },
      { text: "Performance & Tunning", path: "/performance-and-tunning" },
      { text: "Maintenance", path: "/" },
    ],
  },
  {
    text: "Workshop",
    dropdown: true,
    path: "/",
    dropdownList: [
      { text: "Project", path: "/blogs" },
      { text: "Showcase", path: "/" },
      { text: "Get a service quote", path: "/get-service-quote" },
    ],
  },
  {
    text: "About Us",
    path: "/about-us",
  },
  {
    text: "Contact Us",
    path: "/contact-us",
  },
  // {
  //   text: "Details",
  //   path: "/products/1",
  // },
  // {
  //   text: "Checkout",
  //   path: "/check-out",
  // },

  // { text: "News", path: "/news" },
  
];
