// **************** определение объектов *********************

// write_us popup
var stray_button = document.querySelector(".ourcontacts-link");
var write_us_popup = document.querySelector(".write-us");
var write_us_close = document.querySelector(".write-us-close");
// map popup
var minimap = document.querySelector(".ourcontacts-map");
var map_popup = document.querySelector(".map-wrapper");
var map_close = document.querySelector(".map-close");
// login
var enter_button = document.querySelector(".header-enterlink");
var not_logged = document.querySelector(".not-logged-in");
var logged = document.querySelector(".logged-in");
var logout_button = document.querySelector(".logout-icon");
// купить
var buy_button = document.querySelectorAll(".buy-button");
var basket_popup = document.querySelector(".basket");
var basket_close = document.querySelector(".basket-close");
var header_basket = document.querySelector(".header-basket");
var continue_selection = document.querySelector(".basket-button-inactive");
// добавить в избранное
var to_favorities_button = document.querySelectorAll(".to-favorities-button");
var header_favorities = document.querySelector(".header-shortcuts");
// счётчики покупок
var purchase_counter = 0;
var favorities_counter = 0;
var purchase_counter_indicator = document.querySelector(".header-basket span");
var favorities_counter_indicator = document.querySelector(".header-shortcuts span");

// ********************** действия ****************************

// write_us popup
stray_button.addEventListener("click", function (evt) {
  evt.preventDefault();
  write_us_popup.classList.add("show");
});
write_us_close.addEventListener("click", function (evt) {
  evt.preventDefault();
  write_us_popup.classList.remove("show");
});

// map popup
minimap.addEventListener("click", function (evt) {
  evt.preventDefault();
  map_popup.classList.add("show");
});
map_close.addEventListener("click", function (evt) {
  evt.preventDefault();
  map_popup.classList.remove("show");
});

// login
enter_button.addEventListener("click", function (evt) {
  evt.preventDefault();
  not_logged.classList.remove("show");
  logged.classList.add("show");
});
logout_button.addEventListener("click", function (evt) {
  evt.preventDefault();
  logged.classList.remove("show");
  not_logged.classList.add("show");
});

//купить
for(var i = 0; i < buy_button.length; i++) {
  buy_button[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    basket_popup.classList.add("show");
    header_basket.classList.add("header-item-active");
    purchase_counter = purchase_counter + 1;
    purchase_counter_indicator.innerHTML= purchase_counter;
  });
}
basket_close.addEventListener("click", function (evt) {
  evt.preventDefault();
  basket_popup.classList.remove("show");
});
continue_selection.addEventListener("click", function (evt) {
  evt.preventDefault();
  basket_popup.classList.remove("show");
});

// добавить в избранное
for(var i = 0; i < to_favorities_button.length; i++) {
  to_favorities_button[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    header_favorities.classList.add("header-item-active");
    favorities_counter = favorities_counter + 1;
    favorities_counter_indicator.innerHTML= favorities_counter;
  });
}
