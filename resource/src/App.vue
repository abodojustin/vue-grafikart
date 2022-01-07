<template>
  <div id="app">
    <div class="ui active dimmer" v-if="loading">
      <div class="ui loader"></div>
    </div>
    <div class="ui four column grid">
      <div class="column" v-for="user in users" :key="user">
        <div class="ui card">
          <div class="content">
            <div class="header">
              <input type="text" v-model="user.name" style="width: 100%" />
            </div>
            <div class="meta">
              <a>Friends</a>
            </div>
            <div class="description">
              {{ user.address.street }}<br />
              {{ user.address.zipcode }} {{ user.address.city }}<br />
            </div>
          </div>
          <div class="extra content">
            <div class="ui two buttons">
              <div class="ui basic green button" @click="save(user)">
                Modifier
              </div>
              <div class="ui basic red button" @click="destroy(user)">
                Supprimer
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
      loading: false,
    };
  },
  mounted() {
    this.$http.get("http://jsonplaceholder.typicode.com/users").then(
      (response) => {
        // première methode
        // this.users = response.data
        // deuxième methode
        response.json().then((data) => {
          this.users = data;
        });
      },
      (response) => {
        console.log("erreur", response);
      }
    );
  },
  methods: {
    save(user) {
      this.loading = true;
      this.$http
        .put("http://jsonplaceholder.typicode.com/users/" + user.id, {
          name: user.name,
        })
        .then(
          (response) => {
            console.log("response", response);
          },
          (response) => {
            console.log("erreur", response);
          }
        )
        .then((item) => {
          console.log("item", item);
          this.loading = false;
        });
    },
    destroy(user) {
      this.loading = true;
      this.$http
        .delete("http://jsonplaceholder.typicode.com/users/" + user.id)
        .then(
          (response) => {
            console.log(response);
            this.users = this.users.filter((u) => u !== user);
          },
          (response) => {
            console.log("erreur", response);
          }
        )
        .then((item) => {
          console.log("item", item);
          this.loading = false;
        });
      //console.log(user);
    },
  },
};
</script>

