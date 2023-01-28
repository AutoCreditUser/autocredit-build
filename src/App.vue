<template>
	<header class="sticky-top">
		<Navigation />
	</header>

	<RouterView />
</template>

<script lang="ts">
import { defineComponent, watchEffect } from "vue";
import { useActiveMeta } from "vue-meta";
import Navigation from "./components/Navigation.vue";

const activeMeta = useActiveMeta();

export default defineComponent({
	components: { Navigation },
	setup() {
		watchEffect(() => activeMeta);
	},
});
</script>

<style>
@import url(../src/assets/fonts/typography.css);
@import url(../src/assets/css/base.css);

body {
	font-family: "OpenSans", sans-serif;
}
</style>
