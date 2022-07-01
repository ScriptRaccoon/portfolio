<script>
    export let project;
</script>

<article>
    <h2>{project.name}</h2>

    <p class="description">{@html project.description}</p>

    <p class="links">
        {#if project.url}
            <a href={project.url} target="_blank" title="Demo">
                <i
                    aria-label="Desktop icon"
                    class="fa-solid fa-display"
                />
            </a>
        {/if}
        {#if project.repo}
            <a
                href={project.repo}
                target="_blank"
                title="GitHub Repository"
            >
                <i
                    aria-label="GitHub Icon"
                    class="fa-brands fa-github"
                />
            </a>
        {/if}
        {#if project.tutorial}
            <a
                href={project.tutorial}
                target="_blank"
                title="Tutorial"
            >
                <i
                    aria-label="YouTube Icon"
                    class="fa-brands fa-youtube"
                />
            </a>
        {/if}
    </p>

    <p class="keywords">
        {#each project.keywords.sort() as keyword}
            <span class="keyword">{keyword}</span>
        {/each}
    </p>
</article>

<style>
    article {
        background-color: var(--card-color);
        padding: 20px;
        border-radius: 14px;
        box-shadow: 0px 0px 20px #0005;
    }
    h2 {
        font-weight: 400;
        font-size: 30px;
        color: var(--secondary-color);
    }
    .description {
        margin: 12px 0px;
        opacity: 0.9;
        font-size: 16px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        line-height: 1.5;
    }
    .keywords {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 20px;
        font-family: consolas, mono-space;
    }
    .keyword {
        background-color: var(--primary-color);
        color: white;
        padding: 3px 10px;
        border-radius: 10px;
        font-size: 14px;
    }
    .links {
        display: flex;
        gap: 14px;
    }
</style>
