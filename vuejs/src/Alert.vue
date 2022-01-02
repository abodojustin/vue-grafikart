<template>
  <div>
    <transition name="fade" appear mode="out-in">
      <div class="ui message success" v-if="visible" key="visible">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nemo
        cumque neque obcaecati, labore totam. Laboriosam, quos facilis
        voluptatibus aperiam obcaecati, veritatis eius officia voluptate neque
        consequuntur ullam, dolorem qui.
      </div>
      <div class="ui message success" v-else key="invisible">
        Ipsum dolor sit amet consectetur adipisicing elit. Vitae nemo cumque
        neque obcaecati, labore totam. Laboriosam, quos facilis voluptatibus
        aperiam obcaecati, veritatis eius officia voluptate neque consequuntur
        ullam, dolorem qui.
      </div>
    </transition>
    <button @click="toggle">Toggle</button>

    <transition-group name="bounce" tag="ul">
      <li v-for="item in items" :key="item">
        {{ item }}
      </li>
    </transition-group>

    <button class="ui button" @click="add">Ajouter</button>
    <button class="ui button error" @click="shuffle">Mélanger</button>
  </div>
</template>

<script>
/* let slides = {
  methods: {
    enter(el, done) {
      $(el).hide().slideDown(500, done);
    },
    leave(el, done) {
      $(el).show().slideUp(500, done);
    },
  },
}; */
export default {
  /* mixins: [slides], */
  data() {
    return {
      visible: true,
      items: [1, 2, 3, 4, 5],
    };
  },
  methods: {
    shuffle() {
      this.items = [2, 3, 5, 4, 6];
    },
    add() {
      this.items.push(Math.floor(Math.random() * 100));
    },
    toggle() {
      this.visible = !this.visible;
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s, transform 1s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
  transform: translateX(20px);
}
.bounce-enter-active {
  animation: bounce-in 1s;
}
.bounce-leave-active {
  animation: bounce-out 1s;
}
.bounce-move {
  transition: transform 10s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(0);
  }
}
</style>