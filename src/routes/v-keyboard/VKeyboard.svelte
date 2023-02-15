
<script>
    import Key from "./Key.svelte";

    let language = 'lower'
    let text=''
    let dict = {'lower':[
            '1234567890\-\=',
            'qwertyuiop\[\]',
            'asdfghjkl\;\'',
            'zxcvbnm\,\.\/',
        ].map(item => item.split('')),
        'upper':[
            '!@#$%^&*()_+',
            'QWERTYUIOP\{\}',
            'ASDFGHJKL\:\"',
            'ZXCVBNM\<\>\?'

        ]
    
    }
    const typingText = (v) => text += v
    
</script>

<div>
    <p>아래에 입력됩니다</p>
    <textarea readonly bind:value={text}></textarea>
</div>

{#each dict[language] as keyLine, i}

    <div>
        {#each Array(i) as j} &nbsp;{/each}
        {#each keyLine as keyValue}
            <Key value={keyValue} {typingText}/>
        {/each}
    </div>  
{/each}

<style>
    textarea{
        width:400px;
        height:400px;
    }
</style>
