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
import { defineComponent } from "vue";
import Navigation from "./components/Navigation.vue";

export default defineComponent({
	components: { Navigation },
	metaInfo: {
		meta: [
			{ charset: "utf-8", content: "text/html", httpEquiv: "Content-Type" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{
				hid: "description",
				name: "description",
				content: "Consultas e análise de credito veicular e empresarial",
			},
		],
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
