<style>
button {
}
button.selected {
    background-color: #333;
    color: #fff;
}
</style>

<script>
import Icon from "svelte-icons-pack/Icon.svelte"
import BsPencil from "svelte-icons-pack/bs/BsPencil"
import BsEraser from "svelte-icons-pack/bs/BsEraser"
import { toolState, sizeState, colorState } from "../stores.js"

let currentTool, size, color

toolState.subscribe((v) => (currentTool = v))
sizeState.subscribe((v) => (size = v))
colorState.subscribe((v) => (color = v))

const setBrush = () => toolState.update(() => "brush")
const setEraser = () => toolState.update(() => "eraser")
const setSize = (e) => sizeState.update(() => e.target.value)
const setColor = (e) => colorState.update(() => e.target.value)
</script>

<button class:selected="{currentTool === 'brush'}" on:click="{setBrush}">
    <Icon src="{BsPencil}" />
</button>
<button class:selected="{currentTool === 'eraser'}" on:click="{setEraser}">
    <Icon src="{BsEraser}" />
</button>

<input type="range" value="{size}" on:change="{setSize}" min="1" max="80" />
<input type="color" value="{color}" on:change="{setColor}" />
