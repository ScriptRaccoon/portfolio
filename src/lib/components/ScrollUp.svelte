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
    <aside transition:fade={{ duration: 120 }}>
        <a href="#header" aria-label="scroll up">
            <i aria-hidden="true" class="fa-solid fa-angle-up" />
        </a>
    </aside>
{/if}

<style>
    aside {
        position: fixed;
        bottom: 12px;
        right: 12px;
        padding: 4px 10px;
        background-color: #000a;
        border-radius: 4px;
    }
    @media (min-width: 720px) {
        aside {
            display: none !important;
        }
    }
</style>
