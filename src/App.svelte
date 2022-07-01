<script>
    import Footer from "./lib/Footer.svelte";
    import Header from "./lib/Header.svelte";
    import ProjectList from "./lib/ProjectList.svelte";
    import Search from "./lib/Search.svelte";
</script>

<Header />
<Search />
<main>
    <ProjectList />
</main>
<Footer />

<style>
    main {
        padding-inline: 15px;
        margin-bottom: 50px;
    }
</style>
