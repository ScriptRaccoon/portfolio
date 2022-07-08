<footer>
    <p>
        <a href="#header" aria-label="go up">
            <i aria-hidden="true" class="fa-solid fa-angle-up" />
        </a>
    </p>
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
                <i aria-hidden="true" class="fa-brands fa-github" />
            </a>
        </li>
        <li>
            <a
                href="https://twitter.com/ScriptRaccoon/"
                target="_blank"
                aria-label="Twitter account"
                title="Twitter account"
            >
                <i aria-hidden="true" class="fa-brands fa-twitter" />
            </a>
        </li>
        <li>
            <a
                href="mailto:scriptraccoon@gmail.com"
                target="_blank"
                aria-label="Email me"
                title="Email me"
            >
                <i aria-hidden="true" class="fa-solid fa-envelope" />
            </a>
        </li>
    </ul>
</footer>

<style lang="scss">
    footer {
        background-color: var(--primary-color);
        padding: 5px 20px 20px 20px;
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
        p:first-child {
            padding-bottom: 10px;
        }
    }
</style>
