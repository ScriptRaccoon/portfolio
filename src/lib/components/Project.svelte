<script>
    export let project;
</script>

<article>
    <h3>{project.name}</h3>

    {#if project.image}
        <div
            class="image"
            style="background-image: url('assets/{project.image}');"
        />
    {/if}

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
        padding: 20px;
        border-radius: 14px;
        box-shadow: 0px 0px 20px #0005;
        position: relative;
        overflow: hidden;
    }
    article::before {
        content: "";
        position: absolute;
        inset: 0;
        background-color: var(--card-color);
        z-index: -2;
    }
    h3 {
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
    h3,
    .description {
        text-shadow: 1px 1px 1px #000;
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
    .image {
        position: absolute;
        inset: 0;
        background-size: cover;
        background-repeat: no-repeat;
        opacity: 0.05;
        z-index: -1;
        transition: opacity 400ms ease-out;
    }
    article:hover .image {
        opacity: 0;
    }
</style>
