Vue.filter("capitalize", function (value) {
  return value.toUpperCase();
});
Vue.filter("reverse", function (value) {
  return value.split(" ").reverse().join(" ");
});
new Vue({
  el: "#app",
  data: {
    message: "Salut les gens",
  },
});
