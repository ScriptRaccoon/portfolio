<script>
    import DarkModeToggler from "./DarkModeToggler.svelte";
</script>

<header id="header">
    <DarkModeToggler />
    <h1>Script Raccoon</h1>

    <svg viewBox="0 0 56.7 56.7">
        <style type="text/css">
            .fill {
                fill: #003a4c;
            }
            .bg {
                fill: #ffffff;
            }
        </style>
        <g class="fill">
            <path
                id="ear-left"
                d="M14.3,19.1l-1.5,0.9L11.8,14l1.3-0.8l5,3.6l-1.5,0.9l-3.1-2.5L14.3,19.1z"
            />
            <path
                id="ear-right"
                d="M41.6,15.2l-3.1,2.5l-1.5-0.9l5-3.6l1.3,0.8l-0.9,6.1l-1.5-0.9L41.6,15.2z"
            />
        </g>
        <g class="fill">
            <path
                id="face-left"
                d="M27.9,41.7c-2.2,0-11.9-12.6-20.4-9.9c0,0,7.5-11.3,14.6-12.1c2.2-0.2,4.1,1.8,4,4.3l0,0
		c-0.1,3.8-1.8,7.2-4.6,9.2l0,0L27.9,41.7z"
            />
            <path
                id="face-right"
                d="M28.2,41.7c2.2,0,11.9-12.6,20.4-9.9c0,0-7.4-11.3-14.6-12.1c-2.2-0.2-4.1,1.8-4,4.3l0,0
		c0.1,3.8,1.8,7.2,4.6,9.2l0,0L28.2,41.7z"
            />
        </g>
        <path
            id="nose"
            class="fill"
            d="M28.1,31.7c2.3,0,4.1,1.4,4.1,3c0,1.6-1.9,2.9-4.2,2.8c-2.3,0-4.1-1.4-4.1-3
	C23.9,32.9,25.8,31.7,28.1,31.7z"
        />
        <g id="eyes" class="bg">
            <path
                id="eye-left"
                d="M20.4,24.1l-1,2.8h-1.4l1.8-4.2H21l1.8,4.2h-1.4L20.4,24.1z"
            />
            <path
                id="eye-right"
                d="M35.3,24.7l-1,2.8H33l1.8-4.2h1.1l1.8,4.2h-1.4L35.3,24.7z"
            />
        </g>
        <g class="fill">
            <path
                id="bracket-left"
                d="M8.8,35.2v1.9l-5.3-5.8v-1.5L8.8,24v1.9l-4.4,4.7L8.8,35.2z"
            />
            <path
                id="bracket-right"
                d="M51.9,30.3l-4.4-4.7v-1.9l5.3,5.8v1.5l-5.3,5.8V35L51.9,30.3z"
            />
        </g>
    </svg>
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
        svg {
            background-color: white;
            width: 80px;
            border-radius: 50%;
            animation: fade 900ms ease-out forwards;
            transform: scale(0);
            border: 1px solid var(--icon-border);
            #eyes {
                animation: blink 10s ease-in infinite;
                transform-origin: bottom;
                transform-box: fill-box;
                transform: scaleY(0);
            }
        }
    }

    @keyframes blink {
        0%,
        98% {
            transform: scaleY(1);
        }
        99% {
            transform: scaleY(0);
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
