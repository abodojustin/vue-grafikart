new Vue({
  el: "#app",
  data: {
    message: "salut les gens",
    link: "www.lefax.cm",
    cls: "success",
    persons: ["Francis", "Justin", "Nathalie", "Jean", "Marine", "Marion"],
  },
  methods: {
    close: function () {
      this.success = false;
    },
  },
});
