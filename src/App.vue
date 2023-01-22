<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Navigation from "./components/Navigation.vue";
</script>

<template>
  <header>
    <Navigation />
  </header>

  <RouterView />
</template>

<style>
@import url(../src/assets/fonts/typography.css);
@import url(../src/assets/css/base.css);

body {
  font-family: "OpenSans", sans-serif;
}
</style>
