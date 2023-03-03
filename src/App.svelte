<style>
</style>

<script>
import Router from "svelte-spa-router";
import Home from "./routes/Home.svelte";
import { link } from "svelte-spa-router";

import VKeyboard from "./routes/1.v-keyboard/VKeyboard.svelte";
import ImageSlider from "./routes/2.image-slider/index.svelte";
import Paint from "./routes/4.paint/index.svelte";

const routes = {
    "/": Home,
    "/v-keyboard": VKeyboard,
    "/image-slider": ImageSlider,
    "/paint": Paint,
};
</script>

<a href="/" use:link>home</a>

<div>
    <Router routes="{routes}" />
</div>
