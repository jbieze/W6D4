let Router = require("./router");
let Compose = require("./compose");
let Inbox = require("./inbox");

let routes = {
  compose: Compose,
  inbox: Inbox,
};


document.addEventListener("DOMContentLoaded", () => {
  let content = document.querySelector(".content");
  const router = new Router(content, routes);
  router.start();
  window.location.hash = "#inbox";
  let navItems = Array.from(document.querySelectorAll(".sidebar-nav li"));
  navItems.forEach(navItem => {
    navItem.addEventListener("click", () => {
      let name = navItem.innerText.toLowerCase();
      window.location.hash = name;
    });
  });
});
