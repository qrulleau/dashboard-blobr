<template>
	<div id="app" class="d-flex">
		<Navigation></Navigation>
		<LandingPage></LandingPage>
	</div>
</template>

<script>
import Navigation from './components/Navigation.vue';
import LandingPage from './components/LandingPage.vue';

export default {
	name: 'App',
	components: {
		Navigation,
		LandingPage,
	},
};
</script>

<style>
.d-flex {
	display: flex;
	justify-content: space-between;
}
.flex-start {
	justify-content: start;
}
.flex-end {
	justify-content: end;
}
.t-center {
	text-align: center;
}
.t-left {
	text-align: left;
}
.t-right {
	text-align: right;
}
* {
	box-sizing: border-box;
	scroll-behavior: smooth;
	font-family: 'Inter', sans-serif;
	color: #000000;
}
</style>
