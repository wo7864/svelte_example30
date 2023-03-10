<style>
canvas {
    border: 1px solid #333;
}
</style>

<script>
import { onMount } from "svelte"
import { toolState, sizeState, colorState } from "./stores.js"

let canvas
let ctx

let currentTool, size, color
toolState.subscribe((v) => (currentTool = v))
sizeState.subscribe((v) => (size = v))
colorState.subscribe((v) => (color = v))

onMount(() => {
    ctx = canvas.getContext("2d")
    ctx.lineCap = "round"
})

let isDown = false

const brushFunction = (x, y) => {
    if (!isDown) {
        ctx.beginPath()
        ctx.moveTo(x, y)
    } else {
        ctx.lineTo(x, y)
        ctx.stroke()
    }
}
const eraserFunction = (x, y) => {
    const halfSize = size / 2
    ctx.clearRect(x - halfSize, y - halfSize, halfSize, halfSize)
}

const handleMouseDown = () => {
    isDown = true
    ctx.lineWidth = size
    ctx.strokeStyle = color
}
const handleMouseMove = (e) => {
    ctx.lineWidth = size
    ctx.strokeStyle = color
    const { offsetX: x, offsetY: y } = e
    if (currentTool === "brush") brushFunction(x, y)
    else if (currentTool === "eraser") eraserFunction(x, y)
}
const handleMouseUp = () => {
    isDown = false
}
</script>

<canvas
    width="500"
    height="500"
    bind:this="{canvas}"
    on:mousedown="{handleMouseDown}"
    on:mousemove="{handleMouseMove}"
    on:mouseup="{handleMouseUp}"></canvas>
