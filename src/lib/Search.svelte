<script>
    import { element } from "svelte/internal";

    import { search } from "../stores";

    import { debounce } from "../util";

    const debounceSearch = debounce((e) => {
        $search = e.target.value;
    }, 200);
</script>

<section>
    <label title="Search" for="searchInput">
        <i aria-label="Search" class="fa-solid fa-magnifying-glass" />
    </label>
    <input id="searchInput" type="text" on:input={debounceSearch} />
</section>

<style>
    section {
        margin-bottom: 20px;
        margin-inline: auto;
        padding: 15px;
        display: flex;
        align-items: center;
    }
    i {
        opacity: 0.5;
    }
    input {
        background-color: var(--card-color);
        padding: 5px 7px;
        border-radius: 4px;
        margin-left: 10px;
        border: none;
    }
    input:focus {
        outline: 1px solid var(--primary-color);
    }
</style>
