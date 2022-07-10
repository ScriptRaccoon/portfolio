<script>
    import { projects } from "../projects";
    import Project from "./Project.svelte";
    import { applyMasonry } from "../masonry.js";
    import { onMount } from "svelte";

    const projectsByRating = (r) =>
        projects.filter((p) => p.rating == r);

    const orderedProjects = [
        ...projectsByRating(1),
        ...projectsByRating(2),
        ...projectsByRating(3),
    ];

    onMount(() => {
        applyMasonry({
            gridSelector: ".grid",
            itemSelector: ".item",
            contentSelector: ".content",
        });
    });
</script>

<section id="portfolio">
    <h2>Portfolio</h2>

    <div class="grid">
        {#each orderedProjects as project (project.name)}
            <Project {project} />
        {/each}
    </div>
</section>

<style>
    .grid {
        display: grid;
        grid-gap: 30px;
        grid-template-columns: repeat(
            auto-fill,
            minmax(min(400px, 100%), 1fr)
        );
        max-width: 90%;
        margin-inline: auto;
    }
</style>
