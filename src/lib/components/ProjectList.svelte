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

<section class="grid">
    {#each projects as project (project.name)}
        <Project {project} />
    {/each}
</section>

<style>
    section {
        display: grid;
        grid-gap: 25px;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
        max-width: 90%;
        margin-inline: auto;
    }
</style>
