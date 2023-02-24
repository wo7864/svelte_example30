<style>
textarea {
    width: 400px;
    height: 400px;
}

.line {
    display: flex;
    margin-bottom: 5px;
}
</style>

<script>
import Key from "./Key.svelte";
import { afterUpdate } from "svelte";
let cursor = {
    start: 0,
    end: 0,
};
let language = "lower";
let text = "";
let textArea;
let dict = {
    lower: ["`1234567890-=", "qwertyuiop[]", "asdfghjkl;'", "zxcvbnm,./"].map(
        (item) => item.split("")
    ),
    upper: ["~!@#$%^&*()_+", "QWERTYUIOP{}", 'ASDFGHJKL:"', "ZXCVBNM<>?"],
};
const typingText = (v) => {
    text =
        text.slice(0, textArea.selectionStart) +
        v +
        text.slice(textArea.selectionEnd, text.length);
};
const shiftClick = () =>
    language === "lower" ? (language = "upper") : (language = "lower");
const backSpaceClick = () => {
    if (textArea.selectionStart === textArea.selectionEnd)
        text =
            text.slice(0, textArea.selectionStart - 1) +
            text.slice(textArea.selectionEnd, text.length);
    else
        text =
            text.slice(0, textArea.selectionStart) +
            text.slice(textArea.selectionEnd, text.length);
};

afterUpdate(() => {
    textArea.selectionStart = cursor.start;
    textArea.selectionEnd = cursor.end;
});
</script>

<div>
    <p>아래에 입력됩니다</p>
    <textarea
        on:keydown|preventDefault
        bind:value="{text}"
        bind:this="{textArea}"></textarea>
</div>

{#each dict[language] as keyLine, i}
    <div class="line">
        <!-- {#each Array(i) as j} &nbsp;&nbsp;&nbsp;{/each} -->
        {#if i == 1}<Key width="{60}" value=" " textArea="{textArea}" />
        {:else if i == 2}<Key
                width="{80}"
                value="Shift"
                handleClick="{shiftClick}"
                textArea="{textArea}"
                cursor="{cursor}"
            />
        {:else if i == 3}<Key
                width="{100}"
                value=""
                textArea="{textArea}"
            />{/if}

        {#each keyLine as keyValue}
            <Key
                value="{keyValue}"
                typingText="{typingText}"
                textArea="{textArea}"
                cursor="{cursor}"
            />
        {/each}
        {#if i == 0}<Key
                width="{60}"
                value="←"
                handleClick="{backSpaceClick}"
                textArea="{textArea}"
                cursor="{cursor}"
            />{/if}
    </div>
{/each}
