<script>
    const frontendLogos = [
        {
            image: "js-logo.png",
            name: "JavaScript",
            url: "https://developer.mozilla.org/de/docs/Web/JavaScript",
        },
        {
            image: "css-logo.png",
            name: "CSS",
            url: "https://developer.mozilla.org/de/docs/Web/CSS",
        },
        {
            image: "html-logo.png",
            name: "HTML",
            url: "https://developer.mozilla.org/de/docs/Web/HTML",
        },
        {
            image: "sass-logo.png",
            name: "Sass",
            url: "https://sass-lang.com",
        },
        {
            image: "jquery-logo.png",
            name: "jQuery",
            url: "https://jquery.com/",
        },
        {
            image: "svelte-logo.png",
            name: "Svelte",
            url: "https://svelte.dev/",
        },
    ];
    const backendLogos = [
        {
            image: "node-logo.png",
            name: "Node.js",
            url: "https://nodejs.org",
        },
        {
            image: "sveltekit-logo.png",
            name: "SvelteKit",
            url: "https://kit.svelte.dev/",
        },
        {
            image: "firebase-logo.png",
            name: "Firebase",
            url: "https://firebase.google.com/",
        },
        {
            image: "gas-logo.png",
            name: "Google Apps Script",
            url: "https://developers.google.com/apps-script",
        },
    ];
    const familiarLogos = [
        {
            image: "typescript-logo.png",
            name: "TypeScript",
            url: "https://www.typescriptlang.org/",
        },
        {
            image: "vue-logo.png",
            name: "Vue.js",
            url: "https://vuejs.org/",
        },
        {
            image: "react-logo.png",
            name: "React",
            url: "https://reactjs.org/",
        },
        {
            image: "java-logo.png",
            name: "Java",
            url: "https://www.java.com",
        },
        {
            image: "php-logo.png",
            name: "PHP",
            url: "https://www.php.net/",
        },
        {
            image: "python-logo.png",
            name: "Python",
            url: "https://www.python.org/",
        },
    ];
</script>

<section>
    <h2>Stack</h2>
    <p class="love">I love to build stuff with Svelte!</p>
    <h3>Frontend</h3>
    <div class="logos">
        {#each frontendLogos as { image, name, url }}
            <a href={url} target="_blank">
                <img
                    src="/assets/logos/{image}"
                    alt="{name} logo"
                    title={name}
                /></a
            >
        {/each}
    </div>

    <h3>Backend</h3>
    <div class="logos">
        {#each backendLogos as { image, name, url }}
            <a href={url} target="_blank">
                <img
                    src="/assets/logos/{image}"
                    alt="{name} logo"
                    title={name}
                /></a
            >
        {/each}
    </div>

    <h3>Familiar with</h3>
    <div class="logos">
        {#each familiarLogos as { image, name, url }}
            <a href={url} target="_blank">
                <img
                    src="/assets/logos/{image}"
                    alt="{name} logo"
                    title={name}
                /></a
            >
        {/each}
    </div>
</section>

<style lang="scss">
    section {
        background-color: var(--card-color);
        padding-inline: 15px;
        h3 {
            text-align: center;
            color: var(--tertiary-color);
        }
        .love {
            text-align: center;
            padding-bottom: 30px;
            font-style: italic;
        }
        .logos {
            text-align: center;
            padding: 20px 0px 25px 0px;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            gap: 20px;
            img {
                width: 30px;
                &:hover {
                    transform: scale(1.1);
                }
            }
        }
    }
</style>
