<script>
    import Fa from "svelte-fa";
    import {
        faGithub,
        faTwitter,
    } from "@fortawesome/free-brands-svg-icons";
    import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
</script>

<footer>
    <p>
        Made with <a href="https://kit.svelte.dev" target="_blank"
            >SvelteKit</a
        >
        by Script Raccoon
    </p>
    <ul>
        <li>
            <a
                href="https://github.com/ScriptRaccoon/"
                target="_blank"
                aria-label="GitHub account"
                title="GitHub account"
            >
                <Fa icon={faGithub} />
            </a>
        </li>
        <li>
            <a
                href="https://twitter.com/ScriptRaccoon/"
                target="_blank"
                aria-label="Twitter account"
                title="Twitter account"
            >
                <Fa icon={faTwitter} />
            </a>
        </li>
        <li>
            <a
                href="mailto:scriptraccoon@gmail.com"
                target="_blank"
                aria-label="Email me"
                title="Email me"
            >
                <Fa icon={faEnvelope} />
            </a>
        </li>
    </ul>
</footer>

<style lang="scss">
    footer {
        background-color: var(--primary-color);
        padding: 20px;
        margin-top: auto;
        text-align: center;
        color: var(--footer-color);
        ul {
            margin-top: 15px;
            list-style: none;
            display: flex;
            justify-content: center;
            gap: 20px;
            font-size: 24px;
        }
    }
</style>
