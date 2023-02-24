<style>
.container {
    position: relative;
    display: flex;
    overflow: hidden;
    width: 1000px;
    height: 600px;
}

.container > button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    background-color: transparent;
    font-size: 2rem;
    border: 0;
    outline: 0;

    cursor: pointer;
}

.container > button.prev {
    left: 120px;
}
.container > button.next {
    right: 120px;
}
.visible-container {
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    left: calc(var(--cursor) * -760px - 640px);
    transition: 0.1s;
}
.visible-container > img {
    min-width: 800px;
    object-fit: cover;
    margin: 0px -20px;
}
.visible-container > img:not(.selected) {
    transform: scale(0.8);
}
</style>

<script>
import { afterUpdate } from "svelte";
import Icon from "svelte-icons-pack/Icon.svelte";
import FaSolidAngleRight from "svelte-icons-pack/fa/FaSolidAngleRight";
import FaSolidAngleLeft from "svelte-icons-pack/fa/FaSolidAngleLeft";

const imagesRoot = "static/images";
const imageList = [
    "image1.jfif",
    "image2.jpg",
    "image3.jpg",
    "image4.jfif",
    "image5.jpg",
    "image6.jpg",
].map((item) => `${imagesRoot}/${item}`);
let cursor = 0;
let imageLength = imageList.length;
let visibleContainer;
let imgs = Array(8).map(() => undefined);

const nextImage = () => (cursor += 1);
const prevImage = () => (cursor -= 1);
const wrapNoTransition = (func) => {
    setTimeout(() => {
        visibleContainer.style.transition = "0s";
        func();
    }, 100);
    setTimeout(() => {
        visibleContainer.style.transition = "0.1s";
    }, 200);
};
afterUpdate(() => {
    if (cursor >= 6) wrapNoTransition(() => (cursor = 0));
    else if (cursor <= -1) wrapNoTransition(() => (cursor = 5));
});
</script>

<div class="container">
    <div
        class="visible-container"
        style="--cursor:{cursor}"
        bind:this="{visibleContainer}"
    >
        <img
            src="{imageList[imageLength - 1]}"
            alt=""
            class:selected="{cursor === -1 || cursor === 5}"
            bind:this="{imgs[0]}"
        />
        {#each imageList as img, i}
            <img
                src="{img}"
                alt=""
                class:selected="{cursor === i}"
                bind:this="{imgs[i + 1]}"
            />
        {/each}
        <img
            src="{imageList[0]}"
            alt=""
            class:selected="{cursor === 0 || cursor === 6}"
            bind:this="{imgs[7]}"
        />
    </div>
    <button on:click="{prevImage}" class="prev">
        <Icon src="{FaSolidAngleLeft}" color="#fff" class="icon" />
    </button>
    <button on:click="{nextImage}" class="next"
        ><Icon src="{FaSolidAngleRight}" color="#fff" class="icon" />
    </button>
</div>
