<script>
    import TypeWriter from "./TypeWriter.svelte";
</script>

<section>
    <h2>Welcome</h2>
    <p class="greet">
        Hi, I am Martin! I am a <TypeWriter
            words={[
                "web developer.",
                "mathematician.",
                "content creator.",
                "drummer :)",
            ]}
        />
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
        <strong>Script Raccoon</strong>
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
</section>

<style>
    .greet {
        color: var(--tertiary-color);
    }
    section {
        max-width: 720px;
        margin-inline: auto;
        font-size: 20px;
        line-height: 1.5;
    }
    p {
        padding-block: 8px;
    }
    a {
        color: var(--tertiary-color);
    }
    a:focus-visible,
    a:hover {
        color: var(--secondary-color);
    }
</style>
