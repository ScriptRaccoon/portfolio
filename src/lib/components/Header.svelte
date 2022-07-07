<script>
    let darkMode = true;
    function toggleDarkMode() {
        darkMode = !darkMode;
        document.body.classList.toggle("light");
    }
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
            <i aria-hidden="true" class="fa-solid fa-sun" />
        {:else}
            <i aria-hidden="true" class="fa-solid fa-moon" />
        {/if}
    </button>
    <h1>Script Raccoon</h1>
    <img
        src="/assets/ScriptRaccoon.svg"
        alt="Script Raccoon logo"
        title="Script Raccoon logo"
    />
</header>

<style>
    h1 {
        visibility: hidden;
        position: absolute;
        pointer-events: none;
    }
    header {
        padding-top: 30px;
        text-align: center;
        height: 110px;
    }

    img {
        background-color: white;
        width: 80px;
        border-radius: 50%;
        animation: fade 900ms ease-out forwards;
        transform: scale(0);
        border: 1px solid var(--icon-border);
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
    button {
        position: absolute;
        top: 10px;
        right: 15px;
    }
</style>
