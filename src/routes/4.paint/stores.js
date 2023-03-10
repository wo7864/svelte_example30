import { writable } from "svelte/store"

export const toolState = writable("brush")
export const sizeState = writable(10)
export const colorState = writable("#000")
