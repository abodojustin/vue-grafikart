// première façon d'ecrire les directives
/* Vue.directive("salut", {
  bind: function (el, binding, vnode) {
    el.value = binding.value;
    console.log("bind");
  },
  update: function (el, binding, oldvnode) {
    console.log("update");
  },
}); */

// meilleur façon d'écrire les directives
let salut = function (el, binding) {
  el.value = binding.value;
  console.log("bind");
};

let vm = new Vue({
  el: "#app",
  directives: {
    salut,
  },
  data: {
    firstname: "Francis",
    lastname: "Abodo",
    fullname: "",
    message: "hello",
  },
  methods: {
    demo: function () {
      console.log("Demo");
    },
    demo2: function () {
      console.log("Demo 2");
    },
  },
});
