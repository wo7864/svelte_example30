<script>
    export let width = 40;
    export let value;
    export let typingText;

    export let handleClick = () => typingText(value)

</script>

<button on:click={handleClick}  style="--width: {width}px;">
{value}
</button>


<style>
button{
    width: var(--width);
    height:40px;
    margin:0;
    padding:0;
}
</style>