<header>
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
    }

    img {
        background-color: white;
        width: 80px;
        border-radius: 50%;
        animation: fade 700ms ease-out forwards;
        transform: scale(0);
    }
    @keyframes fade {
        0% {
            opacity: 0;
            transform: scale(0) rotate(20deg);
        }
        80% {
            opacity: 1;
            transform: scale(1.1) rotate(0deg);
        }
        100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
        }
    }
</style>
