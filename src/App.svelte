<script>
	import Router from 'svelte-spa-router'
	import Home from './routes/Home.svelte';
	import VKeyboard from "./routes/v-keyboard/VKeyboard.svelte";

	const routes = {
		'/':Home,
		'/v-keyboard':VKeyboard
	}
</script>

home
<Router {routes}/>


<style>

</style>