<script>
    const frontendLogos = [
        {
            image: "js-logo.png",
            name: "JavaScript",
        },
        {
            image: "css-logo.png",
            name: "CSS",
        },
        {
            image: "html-logo.png",
            name: "HTML",
        },
        {
            image: "sass-logo.png",
            name: "Sass",
        },
        {
            image: "jquery-logo.png",
            name: "jQuery",
        },
        {
            image: "svelte-logo.png",
            name: "Svelte",
        },
    ];
    const backendLogos = [
        { image: "node-logo.png", name: "Node.js" },
        { image: "sveltekit-logo.png", name: "SvelteKit" },
        { image: "firebase-logo.png", name: "Firebase" },
        { image: "gas-logo.png", name: "Google Apps Script" },
    ];
    const familiarLogos = [
        { image: "typescript-logo.png", name: "TypeScript" },
        { image: "vue-logo.png", name: "Vue.js" },
        { image: "react-logo.png", name: "React" },
        { image: "solid-logo.png", name: "SolidJS" },
        { image: "lit-logo.png", name: "Lit" },
        { image: "java-logo.png", name: "Java" },
        { image: "php-logo.png", name: "PHP" },
        { image: "python-logo.png", name: "Python" },
    ];
</script>

<section>
    <h2>Stack</h2>

    <h3>Frontend</h3>
    <div class="logos">
        {#each frontendLogos as { image, name }}
            <img
                src="/assets/logos/{image}"
                alt="{name} logo"
                title={name}
            />
        {/each}
    </div>

    <h3>Backend</h3>
    <div class="logos">
        {#each backendLogos as { image, name }}
            <img
                src="/assets/logos/{image}"
                alt="{name} logo"
                title={name}
            />
        {/each}
    </div>

    <h3>Familiar with</h3>
    <div class="logos">
        {#each familiarLogos as { image, name }}
            <img
                src="/assets/logos/{image}"
                alt="{name} logo"
                title={name}
            />
        {/each}
    </div>
</section>

<style>
    h3 {
        text-align: center;
        font-weight: 400;
        color: var(--tertiary-color);
    }
    .logos {
        text-align: center;
        padding: 10px 0px 15px 0px;
    }
    img {
        min-width: 30px;
        max-width: 30px;
        margin: 10px;
    }
</style>
