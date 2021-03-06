// **************** определение объектов *********************

// write_us popup
var stray_button = document.querySelector(".ourcontacts-link");
var write_us_popup = document.querySelector(".write-us");
var write_us_label = document.querySelectorAll(".write-us-label");
var write_us_close = document.querySelector(".write-us-close");

var form = write_us_popup.querySelector("form");
var user_name = write_us_popup.querySelector("[type=text]");
var user_email = write_us_popup.querySelector("[type=email]");

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
// оживление слайдера revolver
var relolver = document.querySelector(".revolver");
var revolver_scroll = document.querySelectorAll(".revolver-scroll");
var header_1 = document.querySelector(".revolver-header.slide-1");
var description_1 = document.querySelector(".revolver-description.slide-1");
var header_2 = document.querySelector(".revolver-header.slide-2");
var description_2 = document.querySelector(".revolver-description.slide-2");
var scroll_indicator_left = document.querySelector(".scroll-indicator-left");
var scroll_indicator_right = document.querySelector(".scroll-indicator-right");
var revolver_slide_number = 0;
// оживление блока сервисов
var services_wrapper = document.querySelector(".services-wrapper");
var service = document.querySelectorAll(".services-menu li");
var service_description = document.querySelectorAll(".services-block div");
var services_link = document.querySelectorAll(".services-link");

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

// write_us error
form.addEventListener("submit", function (evt) {
  if (user_name.value.length == 0) {
    evt.preventDefault();
    write_us_label[0].classList.add("value-error");
  }
  if (user_email.value.length == 0) {
    evt.preventDefault();
    write_us_label[1].classList.add("value-error");
  }
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

// оживление слайдера revolver
for(var i = 0; i < 2; i++) {
  revolver_scroll[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    if ( revolver_slide_number > 0 ) {
      revolver_slide_number = 0;
      relolver.classList.remove("drill");
      relolver.classList.add("perforator");
      header_2.classList.remove("show");
      description_2.classList.remove("show");
      header_1.classList.add("show");
      description_1.classList.add("show");
      scroll_indicator_right.classList.remove("active");
      scroll_indicator_left.classList.add("active");
    }
    else {
      revolver_slide_number = 1;
      relolver.classList.remove("perforator");
      relolver.classList.add("drill");
      header_1.classList.remove("show");
      description_1.classList.remove("show");
      header_2.classList.add("show");
      description_2.classList.add("show");
      scroll_indicator_left.classList.remove("active");
      scroll_indicator_right.classList.add("active");
    }
  });
}

// оживление блока сервисов
services_link[0].addEventListener("click", function (evt) {
  evt.preventDefault();
  services_wrapper.classList.remove("services-warranty");
  services_wrapper.classList.remove("services-loan");
  services_wrapper.classList.add("services-delivery");
  service[1].classList.remove("services-menu-item-active");
  service[1].classList.add("services-menu-item-inactive");
  service[2].classList.remove("services-menu-item-active");
  service[2].classList.add("services-menu-item-inactive");
  service[0].classList.remove("services-menu-item-inactive");
  service[0].classList.add("services-menu-item-active");
  service_description[1].classList.remove("show");
  service_description[2].classList.remove("show");
  service_description[0].classList.add("show");
});
services_link[1].addEventListener("click", function (evt) {
  evt.preventDefault();
  services_wrapper.classList.remove("services-delivery");
  services_wrapper.classList.remove("services-loan");
  services_wrapper.classList.add("services-warranty");
  service[0].classList.remove("services-menu-item-active");
  service[0].classList.add("services-menu-item-inactive");
  service[2].classList.remove("services-menu-item-active");
  service[2].classList.add("services-menu-item-inactive");
  service[1].classList.remove("services-menu-item-inactive");
  service[1].classList.add("services-menu-item-active");
  service_description[0].classList.remove("show");
  service_description[2].classList.remove("show");
  service_description[1].classList.add("show");
});
services_link[2].addEventListener("click", function (evt) {
  evt.preventDefault();
  services_wrapper.classList.remove("services-delivery");
  services_wrapper.classList.remove("services-warranty");
  services_wrapper.classList.add("services-loan");
  service[0].classList.remove("services-menu-item-active");
  service[0].classList.add("services-menu-item-inactive");
  service[1].classList.remove("services-menu-item-active");
  service[1].classList.add("services-menu-item-inactive");
  service[2].classList.remove("services-menu-item-inactive");
  service[2].classList.add("services-menu-item-active");
  service_description[0].classList.remove("show");
  service_description[1].classList.remove("show");
  service_description[2].classList.add("show");
});
