<script>
    import { slide, fade } from "svelte/transition";
    let readMore = false;
</script>

<section>
    <h2>Welcome</h2>
    <p class="greet">
        Hi, I am Martin! I am a mathematician and a web developer.
    </p>
    <p>
        My projects can be found on
        <a href="https://github.com/ScriptRaccoon/" target="_blank"
            >GitHub</a
        >, a selection of which can be found
        <a href="#portfolio">below</a>.
    </p>

    <p>
        Under the name
        <i>Script Raccoon</i>
        I create coding tutorials on
        <a
            href="https://www.youtube.com/scriptraccoon"
            target="_blank">YouTube</a
        >
        in German.
    </p>

    <p>
        You can also find me on
        <a href="https://twitter.com/ScriptRaccoon/" target="_blank"
            >Twitter</a
        >. Feel free to contact me via
        <a href="mailto:scriptraccoon@gmail.com">mail</a>.
    </p>

    <button on:click={() => (readMore = !readMore)}>
        {#if readMore}
            Read less ...
        {:else}
            Read more about my stack ...
        {/if}
    </button>

    {#if readMore}
        <div class="more" transition:slide={{ duration: 800 }}>
            <div transition:fade={{ duration: 800 }}>
                <p>
                    On the frontend, I usually use just <strong
                        >Vanilla JavaScript</strong
                    >
                    (or <strong>jQuery</strong> in the old days),
                    <strong>CSS</strong>
                    and semantic <strong>HTML</strong>, sometimes also
                    <strong>Sass</strong>.
                </p>

                <p>
                    Recently I switched to
                    <strong>Svelte</strong>
                    because it makes life so much easier! I am also familiar
                    with most other JavaScript frameworks around (<strong
                        >React</strong
                    >, <strong>Vue.js</strong>, SolidJS, Alpine, Lit,
                    etc.).
                </p>

                <p>
                    On the backend I use <strong>Node.js</strong> with
                    <strong>Express</strong>, or
                    <strong>Firebase</strong>, or go for a fullstack
                    application with
                    <strong>SvelteKit</strong>. Usually my sites are
                    hosted on <strong>Heroku</strong>
                    or <strong>Netlify</strong>.
                </p>

                <p>
                    I have experience with other programming languages
                    as well (<strong>Google Apps Script</strong>,
                    <strong>TypeScript</strong>,
                    <strong>Python</strong>,
                    <strong>Java</strong>,
                    <strong>PHP</strong>).
                </p>
            </div>
        </div>
    {/if}
</section>

<style>
    .greet {
        text-align: center;
        color: var(--tertiary-color);
    }
    section {
        max-width: 720px;
        margin-inline: auto;
        font-size: 20px;
        line-height: 1.5;
    }
    p {
        padding-block: 10px;
    }
    strong {
        font-weight: initial;
        color: var(--tertiary-color);
    }
    button {
        text-decoration: underline;
    }
    button:hover,
    button:focus-visible {
        color: var(--secondary-color);
    }
    .more {
        padding-left: 15px;
    }
</style>
