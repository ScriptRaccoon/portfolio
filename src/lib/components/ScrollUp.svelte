<script>
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";

    let show = false;
    let timer = null;
    let scrollPos = 0;

    onMount(() => {
        scrollPos = window.scrollY;
        window.addEventListener("scroll", () => {
            if (window.scrollY == 0) {
                show = false;
            } else if (window.scrollY < scrollPos) {
                scrollPos = window.scrollY;
                if (timer) clearTimeout(timer);
                show = true;
                timer = setTimeout(() => {
                    show = false;
                }, 3000);
            }
            scrollPos = window.scrollY;
        });
    });
</script>

{#if show}
    <aside transition:fade={{ duration: 150 }}>
        <a href="#header" aria-label="scroll up">
            <i aria-hidden="true" class="fa-solid fa-angle-up" />
        </a>
    </aside>
{/if}

<style lang="scss">
    aside {
        position: fixed;
        bottom: 12px;
        right: 12px;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background-color: #444c;
        display: grid;
        place-items: center;
        a {
            color: white;
        }
        @media (min-width: 720px) {
            display: none !important;
        }
    }
</style>
