<template>
	<metainfo>
		<template v-slot:title="{ content }">{{ content? `${content} | Autocredit` : `AUTOCREDIT` }}
		</template>
	</metainfo>
	<header class="sticky-top">
		<Navigation />
	</header>

	<RouterView />
</template>

<script lang="ts">
import { useMeta } from "vue-meta";
import { defineComponent } from "vue";
import Navigation from "./components/Navigation.vue";

export default defineComponent({
	components: { Navigation },
	setup() {
		useMeta({
			title: "Autocredit - Consulta e Análise veicular",
			meta: [
				{
					name: "description",
					content:
						"Venha para a Autocredit, consulta veicular e análise de crédito",
				},
			],
		});
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
