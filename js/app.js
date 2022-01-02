let message = {
  props: {
    type: { type: String, default: "success" },
    message: String,
    header: String,
  },
  template: `<div class="ui message" :class="type">
        <i class="close icon" @click.prevent="close"></i>
        <div class="header">{{ header }}</div>
        {{ message }}
    </div>`,
  methods: {
    close() {
      this.$emit("close");
    },
  },
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
  template: `<button @click="increment">{{ count }}</button>`,
  mounted: function () {
    this.count = this.start;
  },
};

let formUser = {
  props: {
    value: Object,
  },
  data() {
    return {
      user: JSON.parse(JSON.stringify(this.value)),
    };
  },
  methods: {
    save() {
      this.$emit("input", this.user);
    },
  },
  template: `
        <form class="ui form" @submit.prevent="save">
        <p>
                <slot name="header"></slot>
            </p>
            <div class="field">
                <label for="">Prénom</label>
                <input type="text" v-model="user.firstname" />
            </div>
            <div class="field">
                <label for="">Nom</label>
                <input type="text" v-model="user.lastname" />
            </div>
            <button class="ui button" type="submit">Envoyer</button>
            <p>
                <slot name="footer"></slot>
            </p>
        </form>
    `,
  mounted: function () {
    console.log(this);
  },
};

let vm = new Vue({
  el: "#app",
  components: { message, counter, formUser },
  data: {
    message: "Salut les gens",
    alert: false,
    user: {
      firstname: "Jean",
      lastname: "DeLaTour",
    },
  },
  methods: {
    showAlert() {
      this.alert = true;
    },
    hideAlert() {
      this.alert = false;
    },
  },
});
