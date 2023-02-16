
<script>
    import Key from "./Key.svelte";
    let language = 'lower'
    let text=''
    let dict = {'lower':[
            '`1234567890\-\=',
            'qwertyuiop\[\]',
            'asdfghjkl\;\'',
            'zxcvbnm\,\.\/',
        ].map(item => item.split('')),
        'upper':[
            '~!@#$%^&*()_+',
            'QWERTYUIOP\{\}',
            'ASDFGHJKL\:\"',
            'ZXCVBNM\<\>\?'

        ]
    
    }
    const typingText = (v) => text += v
    const shiftClick = () => language === 'lower' ? language = 'upper': language='lower'
    
</script>

<div>
    <p>아래에 입력됩니다</p>
    <textarea on:keydown|preventDefault bind:value={text}></textarea>
</div>

{#each dict[language] as keyLine, i}

    <div class="line">
        <!-- {#each Array(i) as j} &nbsp;&nbsp;&nbsp;{/each} -->
        {#if i ==1}<Key width={60} value=" "/>
        {:else if i ==2}<Key width={80} value="Shift" handleClick={shiftClick}/>
        {:else if i ==3}<Key width={100} value=""/>{/if}

        {#each keyLine as keyValue}
            <Key value={keyValue} {typingText}/>
        {/each}
        {#if i ==0}<Key width={60} value="←"/>{/if}

    </div>  
{/each}

<style>
    textarea{
        width:400px;
        height:400px;
    }

    .line {
        display: flex;;
        margin-bottom:5px;
    }
</style>
