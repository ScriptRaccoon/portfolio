<script>
    let darkMode = true;
    function toggleDarkMode() {
        darkMode = !darkMode;
        document.body.classList.toggle("light");
    }
    import Fa from "svelte-fa";
    import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
</script>

<header id="header">
    <button
        aria-label="toggle dark mode"
        title={darkMode
            ? "switch to light mode"
            : "switch to dark mode"}
        on:click={toggleDarkMode}
    >
        {#if darkMode}
            <Fa icon={faSun} />
        {:else}
            <Fa icon={faMoon} />
        {/if}
    </button>
    <h1>Script Raccoon</h1>
    <img
        src="/assets/ScriptRaccoon.svg"
        alt="Script Raccoon logo"
        title="Script Raccoon logo"
    />
</header>

<style lang="scss">
    header {
        padding-top: 30px;
        text-align: center;
        height: 110px;
        button {
            position: absolute;
            top: 10px;
            right: 15px;
        }
        h1 {
            visibility: hidden;
            position: absolute;
            pointer-events: none;
        }
        img {
            background-color: white;
            width: 80px;
            border-radius: 50%;
            animation: fade 900ms ease-out forwards;
            transform: scale(0);
            border: 1px solid var(--icon-border);
        }
    }

    @keyframes fade {
        0% {
            opacity: 0;
            transform: scale(0);
        }
        60% {
            opacity: 1;
            transform: scale(1.1);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }
</style>
