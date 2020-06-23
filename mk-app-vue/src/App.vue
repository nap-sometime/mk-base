<template>
	<div id="app-container">
		<router-view></router-view>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { getEnv } from './utils/get_env';
import { MetaInfo } from 'vue-meta';

export default Vue.extend({
	name: 'App',
	metaInfo(): MetaInfo {
		return {
			title: this.getTitle,
			titleTemplate: `%s | ${this.getAppName}`,
		};
	},
	mounted() {
		this.logInterval();
	},
	computed: {
		getTitle(): string {
			return 'hi';
		},
		getAppName(): string {
			return getEnv('npm_package_name');
		},
	},
	methods: {
		logInterval() {
			let timer;
			if (!timer) clearInterval(timer);

			timer = setInterval(() => {
				console.log(`${Date.now()} - ${this.getAppName}`);
			}, 5000);
		},
	},
});
</script>

<style scoped>
#app-container {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	height: 100%;
	width: 100%;
}
</style>
