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
                "drummer :-)",
            ]}
        />
    </p>
    <p>
        My personal projects can be found on
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
</section>

<style lang="scss">
    section {
        max-width: 720px;
        margin-inline: auto;
        font-size: 20px;
        line-height: 1.5;
        padding-inline: 15px;
    }
    p {
        padding-block: 8px;
    }
    .greet {
        color: var(--tertiary-color);
        @media (max-width: 420px) {
            height: 62px;
            padding-bottom: 0;
        }
    }
    a {
        color: var(--tertiary-color);
        &:focus-visible,
        &:hover {
            color: var(--secondary-color);
        }
    }
</style>
