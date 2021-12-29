let vm = new Vue({
  el: "#app",
  data: {
    firstname: "Francis",
    lastname: "Abodo",
    fullname: "",
  },
  watch: {
    fullname: function (value) {
      console.log("watch", value);
    },
  },
});
