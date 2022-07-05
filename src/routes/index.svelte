<script>
    import "./index.css";
    import Footer from "$lib/components/Footer.svelte";
    import Header from "$lib/components/Header.svelte";
    import Portfolio from "../lib/components/Portfolio.svelte";
    import Welcome from "../lib/components/Welcome.svelte";
</script>

<svelte:head>
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
    />
    <title>Script Raccoon</title>
</svelte:head>

<Header />

<main>
    <Welcome />
    <Portfolio />
</main>
<Footer />

<style>
    main {
        padding-inline: 15px;
        margin-bottom: 50px;
    }
</style>
