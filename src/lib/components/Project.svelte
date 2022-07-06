<script>
    export let project;
</script>

<div class="item">
    <article class="content">
        <h3>{project.name}</h3>

        {#if project.image}
            <img
                src="assets/projects/{project.image}"
                alt="project preview"
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
</div>

<style>
    .item {
        background-color: var(--card-color);
        box-shadow: 0px 0px 20px #0005;
        border-radius: 14px;
    }
    article {
        padding: 20px;
    }

    h3 {
        font-weight: 400;
        font-size: 32px;
        color: var(--secondary-color);
        text-align: center;
    }
    .description {
        margin: 16px 0px;
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
        padding: 5px 12px;
        border-radius: 10px;
        font-size: 16px;
    }
    .links {
        display: flex;
        gap: 14px;
        font-size: 20px;
    }
    img {
        width: 100%;
        margin-top: 25px;
        border-radius: 10px;
        box-shadow: 0px 0px 20px #0003;
    }
</style>
