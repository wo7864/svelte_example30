<script>
    export let value;
    export let typingText;

    const handleClick = () => typingText(value)

</script>

<button on:click={handleClick}>
{value}
</button>


<style>

</style>