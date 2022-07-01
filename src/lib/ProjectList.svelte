<script>
    import projects from "../projects";
    import Project from "./Project.svelte";
    import { search } from "../stores.js";

    function projectText(project) {
        return (
            project.name +
            project.description +
            project.keywords.join(" ")
        ).toLocaleLowerCase();
    }

    $: filteredProjects = $search
        ? projects.filter((project) =>
              projectText(project).includes(
                  $search.toLocaleLowerCase()
              )
          )
        : projects;
</script>

<section>
    {#each filteredProjects as project (project.name)}
        <Project {project} />
    {:else}
        <div class="nothing">
            <p>No search results</p>
            <br />
            <img src="./assets/confused.webp" alt="confused actor" />
        </div>
    {/each}
</section>

<style>
    section {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 30px;
        max-width: 90%;
        margin-inline: auto;
    }
    @media (min-width: 720px) {
        section {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media (min-width: 1024px) {
        section {
            grid-template-columns: repeat(3, 1fr);
        }
    }
    .nothing {
        text-align: center;
        grid-column: 1 / -1;
    }
    .nothing img {
        border-radius: 12px;
    }
</style>
