<script>
    import { projects } from "../projects";
    import Project from "./Project.svelte";
    import { enableMasonry } from "../masonry.js";
    import { onMount } from "svelte";

    onMount(() => {
        enableMasonry({
            gridSelector: ".grid",
            itemSelector: ".item",
        });
    });
</script>

<section>
    <h2>Portfolio</h2>

    <div class="grid">
        {#each projects as project (project.name)}
            <Project {project} />
        {/each}
    </div>
</section>

<style>
    .grid {
        display: grid;
        grid-gap: 25px;
        grid-template-columns: repeat(3, 1fr);
        max-width: 90%;
        margin-inline: auto;
    }
    @media (max-width: 1200px) {
        .grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media (max-width: 540px) {
        .grid {
            grid-template-columns: 1fr;
        }
    }
</style>
