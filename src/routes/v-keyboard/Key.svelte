<script>
    export let width = 40;
    export let value;
    export let textArea
    export let typingText = undefined;
    export let cursor = undefined

    export let handleClick = () => typingText(value)
    let wrapHandleClick = () => { 
        textArea.focus(); 
        handleClick();
        if(!typingText){
        if(textArea.selectionStart===textArea.selectionEnd){
            cursor.start=textArea.selectionStart-1
            cursor.end=textArea.selectionStart-1}
            else{
                
            cursor.start=textArea.selectionStart
            cursor.end=textArea.selectionStart
            }
        }else{
            cursor.start=textArea.selectionStart+1
            cursor.end=textArea.selectionStart+1
        }
    }
</script>

<button on:click|preventDefault={wrapHandleClick}  
    on:mousedown|preventDefault
    style="--width: {width}px;">
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