<script>
    import DarkModeToggler from "./DarkModeToggler.svelte";
</script>

<header id="header">
    <DarkModeToggler />
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
        position: relative;
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
