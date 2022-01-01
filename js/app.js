let message = {
  props: {
    type: { type: String, default: "success" },
    message: String,
  },
  template: `<div class="ui message" :class="type"> {{ message }}</div>`,
};

let counter = {
  data: function () {
    return {
      count: 0,
    };
  },
  props: {
    start: { type: Number, default: 0 },
  },
  methods: {
    increment: function () {
      this.count++;
    },
  },
  template: `<div>
        
        <button @click="increment">{{ count }}</button>
    </div>`,
  mounted: function () {
    this.count = this.start;
  },
};

let vm = new Vue({
  el: "#app",
  data: {
    message: "Salut les gens",
  },
  components: { message, counter },
});
