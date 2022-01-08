<template>
  <div>
    <h1>Page A</h1>
    <ul>
      <router-link :to="{ name: 'a.b' }">Voir la vue B</router-link>
      <router-link :to="{ name: 'a.c' }">Voir la vue C</router-link>
    </ul>
    <h1>Sous vue</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>