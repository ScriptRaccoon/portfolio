<script context="module">
    export function load({ error, status }) {
        return { props: { title: `${status}: ${error.message}` } };
    }
</script>

<script>
    export let title;
    const smiley = ":(";
</script>

<div>
    <h1>{smiley}</h1>
    <h3>{title}</h3>
    <br />
    <a href="/">Home</a>
</div>

<style>
    div {
        text-align: center;
        overflow: hidden;
    }
    h1 {
        font-size: min(150px, 90vw);
        font-weight: 400;
        margin: 40px 0px;
    }
</style>
