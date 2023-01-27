<template>
  <header class="sticky-top">
    <Navigation />
  </header>

  <RouterView />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navigation from "./components/Navigation.vue";

export default defineComponent({
  components: { Navigation },
});
</script>

<style>
@import url(../src/assets/fonts/typography.css);
@import url(../src/assets/css/base.css);

body {
  font-family: "OpenSans", sans-serif;
}
</style>
