export const projects = [
    {
        name: "Rubik's Cube",
        description:
            "Fully functional Rubik's Cube. The graphics is made with 3-dimensional CSS, no graphics library is used. Svelte makes it easy to construct the cube from its components.",
        url: "https://rubikscubesvelte.netlify.app",
        repo: "https://github.com/ScriptRaccoon/RubiksCubeSvelte",
        keywords: ["Svelte", "CSS", "Browser game", "3D", "Graphics"],
        tutorial: "https://www.youtube.com/watch?v=GdlUdnYZnfc",
        image: "cube.jpg",
        rating: 1,
    },
    {
        name: "Svordle",
        description:
            "The <a href='https://www.nytimes.com/games/wordle' target='_blank'>Wordle game</a> built with Svelte on the frontend and Netlify's serverless functions on the backend. Cheating is impossible since the correct word gets encrypted.",
        url: "https://svordle.xyz",
        repo: "https://github.com/ScriptRaccoon/Svordle",
        keywords: [
            "Svelte",
            "Browser game",
            "serverless",
            "Full stack",
        ],
        tutorial: "https://youtu.be/CMIwJLS0dns",
        image: "svordle.jpg",
        rating: 1,
    },
    {
        name: "Actors Info",
        description:
            "Look up pictures from all the movies and TV shows starring a given actor/actress. This uses the <a href='https://developers.themoviedb.org' target='_blank'>TMDB API</a> as well as crawling through Yahoo's image search on the backend.",
        url: "https://actorsinfo.herokuapp.com",
        keywords: [
            "Full stack",
            "Vanilla JavaScript",
            "Node.js",
            "Express",
            "API",
            "Tool",
        ],
        tutorial: "https://youtu.be/5xzqEqQR7L4",
        image: "actors.jpg",
        rating: 1,
    },
    {
        name: "Pool game",
        description:
            "Fun pool game written in Vanilla JavaScript. All drawing operations are done with an HTML canvas. Includes physics, light effects, shadows and sound effects.",
        url: "https://pool-game.netlify.app",
        repo: "https://github.com/ScriptRaccoon/pool-game",
        keywords: [
            "Vanilla JavaScript",
            "HTML Canvas",
            "Browser game",
            "Graphics",
        ],
        tutorial:
            "https://www.youtube.com/playlist?list=PL1LHMFscti8vGfIvK5-9P5RAavTxzoQWP",
        image: "pool.jpg",
        rating: 1,
    },
    {
        name: "Graph editor",
        description:
            "Interactive graph editor made with Svelte. The nodes and edges can be edited directly by clicking on them.",
        url: "https://graph-editor.netlify.app/",
        repo: "https://github.com/ScriptRaccoon/graph-editor",
        keywords: ["Svelte", "Tool"],
        tutorial: "https://youtu.be/NRyYCifF1PQ",
        image: "graph.jpg",
        rating: 2,
    },
    {
        name: "CSS sphere",
        description:
            "An animated sphere made with 3-dimensional CSS. You can also put the view inside of the sphere. This works by animating the perspective. Works best in Chrome.",
        url: "https://css-sphere.netlify.app",
        repo: "https://github.com/ScriptRaccoon/css-sphere",
        keywords: ["Graphics", "3D", "CSS"],
        image: "sphere.jpg",
        rating: 2,
    },
    {
        name: "Spotify playlist finder",
        description:
            "Finds all of your Spotify playlists which contain a specific song. Surprisingly, this specific feature is not built into the Spotify app.",
        repo: "https://github.com/ScriptRaccoon/spotify-playlist-finder",
        url: "https://spotify-playlist-finder.herokuapp.com/",
        keywords: [
            "Tool",
            "Express",
            "Node",
            "EJS",
            "Vanilla JavaScript",
            "OAuth",
        ],
        image: "spotify.jpg",
        rating: 2,
    },
    {
        name: "Calendar app",
        description:
            "Calendar app built with Vanilla JavaScript. Firebase is used for authentication and storage of events. Responsive design makes it possible to use the calendar on your phone.",
        repo: "https://github.com/ScriptRaccoon/calendar",
        url: "https://wherethetimegoes.netlify.app/",
        tutorial:
            "https://www.youtube.com/playlist?list=PL1LHMFscti8twqDyMR9nb8Eh1pxsn3nlw",
        keywords: [
            "Full stack",
            "Tool",
            "Firebase",
            "Vanilla JavaScript",
            "CSS",
        ],
        image: "calendar.jpg",
        rating: 1,
    },
    {
        name: "Comparison of JavaScript frameworks",
        description:
            "The very same shopping list SPA made with 7 JavaScript frameworks in order to compare them with respect to developer experience and bundle size.",
        url: "https://shopping-list-made-with-vanilla-js.netlify.app",
        repo: "https://github.com/ScriptRaccoon/shopping-list-frameworks",
        keywords: [
            "Vanilla JavaScript",
            "Svelte",
            "React",
            "SolidJS",
            "Vue",
            "Lit",
            "Alpine",
            "Benchmark",
        ],
        image: "shoppinglist.jpg",
        rating: 2,
    },

    {
        name: "Svoodle",
        description:
            "A <a href='https://doodle.com' target='_blank'>doodle</a>-like app made with SvelteKit and Firebase which lets you quickly create polls which can be shared via links. Polls get deleted after a month.",
        url: "https://svoodle.netlify.app",
        repo: "https://github.com/ScriptRaccoon/svoodle",
        keywords: ["Full stack", "SvelteKit", "Firebase", "Tool"],
        image: "svoodle.jpg",
        rating: 2,
    },
    {
        name: "Chess program",
        description:
            "A single-player chess program made with Vanilla JavaScript and Sass. All chess rules are supported. There are highlights for previous and allowed moves.",
        repo: "https://github.com/ScriptRaccoon/chess-singleplayer",
        url: "https://chess-singleplayer.netlify.app/",
        keywords: [
            "Browser game",
            "Vanilla JavaScript",
            "Object-oriented",
            "Graphics",
            "Sass",
            "CSS",
        ],
        image: "chess.jpg",
        rating: 1,
    },
    {
        name: "Whisper Note",
        description:
            "Share secrets via a one-time-link and an optional password, very similar to <a href='https://onetimesecret.com/' target='_blank'>onetimesecret</a>. The data is encrypted and stored in Firebase.",
        url: "https://whispernote.herokuapp.com/",
        repo: "https://github.com/ScriptRaccoon/WhisperNote",
        keywords: [
            "Full stack",
            "Node.js",
            "Express",
            "Firebase",
            "EJS",
            "Tool",
        ],
        tutorial:
            "https://www.youtube.com/playlist?list=PL1LHMFscti8s2_B2xJaEwMrR5fR73_9U9",
        image: "whispernote.jpg",
        rating: 2,
    },
    {
        name: "Dancing circles",
        description:
            "Create circles which <i>dance</i> with each other when they are close enough. Very interesting and complex patterns emerge from a simple rule.",
        url: "https://dancing-circles.netlify.app",
        repo: "https://github.com/ScriptRaccoon/dancing-circles",
        keywords: [
            "Vanilla JavaScript",
            "Object-oriented",
            "HTML Canvas",
            "Graphics",
            "Simulation",
        ],
        image: "dancing.jpg",
        rating: 2,
    },

    {
        name: "Weather app",
        description:
            "A simple weather app made with SvelteKit. The data comes from <a href='https://openweathermap.org/' target='_blank'>OpenWeather API</a> via a SvelteKit endpoint.",
        url: "https://weather-sveltekit.netlify.app/",
        repo: "https://github.com/ScriptRaccoon/sveltekit-weather",
        keywords: ["Full stack", "SvelteKit", "API"],
        tutorial: "https://youtu.be/akJEOD3El8I",
        image: "weather.jpg",
        rating: 3,
    },

    {
        name: "Space Parallax",
        description:
            "In this space shooter game you navigate a spaceship through space and shoot asteroids with lazers. The stars in the background show a parallax effect, therefore the name.",
        url: "https://spaceship-parallax.netlify.app",
        repo: "https://github.com/ScriptRaccoon/spaceship-parallax",
        keywords: [
            "Browser game",
            "Vanilla JavaScript",
            "Object-oriented",
            "HTML Canvas",
            "Graphics",
        ],
        tutorial:
            "https://www.youtube.com/playlist?list=PL1LHMFscti8sBtJOzgVKFHpxuMa-moSPX",
        image: "space.jpg",
        rating: 1,
    },
    {
        name: "BookShelf",
        description:
            "Create a personal digital library. Features 3-dimensional animations for opening/closing the book covers. This project mainly illustrates Svelte components.",
        url: "https://bookshelfsvelte.netlify.app",
        repo: "https://github.com/ScriptRaccoon/BookShelf",
        tutorial: "https://www.youtube.com/watch?v=gWYgy_JVLlQ",
        keywords: ["3D", "Svelte", "CSS", "Tool"],
        image: "bookshelf.jpg",
        rating: 2,
    },
    {
        name: "Slide puzzles",
        description:
            "The classical 4 &times; 4 slide puzzle as a browser game, which can be resized up to 10 &times; 10. Featuring nice graphics and smooth animations.",
        repo: "https://github.com/ScriptRaccoon/slidepuzzles",
        url: "https://slidepuzzles.netlify.app/",
        keywords: [
            "Browser game",
            "CSS",
            "Vanilla JavaScript",
            "Graphics",
        ],
        image: "slide.jpg",
        rating: 3,
    },

    {
        name: "Sprite animation",
        description:
            "This project shows how to make sprite animations with Vanilla JavaScript on an HTML canvas. The code serves as a template for more complex browser games.",
        repo: "https://github.com/ScriptRaccoon/Sprite-Animation",
        url: "https://sprite-anima.netlify.app/",
        tutorial:
            "https://www.youtube.com/playlist?list=PL1LHMFscti8uBdhvhRqIMBeX_4D-blFo6",
        keywords: [
            "Browser game",
            "Graphics",
            "Vanilla JavaScript",
            "Object-oriented",
        ],
        image: "sprite.jpg",
        rating: 2,
    },

    {
        name: "Let's draw",
        description:
            "Draw with others online in real-time. On the Node.js backend we use socket.io in order to sync and save the drawing events.",
        url: "https://lets-draw-online.herokuapp.com/",
        repo: "https://github.com/ScriptRaccoon/lets-draw",
        keywords: [
            "Node.js",
            "Express",
            "websockets",
            "Vanilla JavaScript",
        ],
        tutorial: "https://youtu.be/s-RCuZflUe4",
        image: "letsdraw.jpg",
        rating: 3,
    },
    {
        name: "Mahjong solitaire",
        description:
            "The classical Mahjong solitaire as a browser game written with Vanilla JavaScript and CSS. You have to select pairs of identical open tiles to remove them from the board until no tiles are left.",
        repo: "https://github.com/ScriptRaccoon/mahjong-solitaire",
        url: "https://mahjong-solitaire.netlify.app/",
        tutorial: "https://youtu.be/oWDB4LaO4MU",
        keywords: ["Browser game", "Vanilla JavaScript", "CSS"],
        image: "mahjong.jpg",
        rating: 2,
    },
    {
        name: "Cell simulation",
        description:
            "A simulation of cells who are attracted to food and swim towards it. In later stages various types of other cells with individual behaviors are introduced.",
        repo: "https://github.com/ScriptRaccoon/Cell-Simulation",
        url: "https://cell-simulation.netlify.app/",
        keywords: [
            "Vanilla JavaScript",
            "Object-oriented",
            "HTML Canvas",
            "Graphics",
            "Simulation",
        ],
        image: "cell.jpg",
        rating: 3,
    },
    {
        name: "Google Drive upload form",
        description:
            "A Google web app which allows others to upload files to your Google Drive. As opposed to mail, the files go directly to where they belong, and  no Google login is required.",
        tutorial: "https://youtu.be/78mrc9M_ONE",
        repo: "https://github.com/ScriptRaccoon/google-drive-upload-form",
        tutorial: "https://youtu.be/78mrc9M_ONE",
        keywords: [
            "Full stack",
            "Google Drive",
            "Google Apps Script",
            "Tool",
        ],
        image: "upload.jpg",
        rating: 3,
    },
];
