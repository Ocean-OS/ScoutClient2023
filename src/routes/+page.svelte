<!-- JS CODE -->

<!-- HTML CODE -->

<!-- Section for flexbox purposes -->
<section data-sveltekit-preload-data="tap">
    <!-- Title of App -->
    <h1>Stable Scout 2</h1>

    <!-- Links for starting scouting and uploading data -->
    <a href="/scoutPart1">Scout</a>
    <a href="/upload">Upload</a>
</section>


<!-- CSS CODE -->
<style>
    /* Applying columned layout to page */
    section {
        width: 100%;
        height: 98vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        background-color: #30ace2;
    }

    /* Styling to make links look like buttons */
    a {
        width: 50%;
        padding: 10px;
        padding-top: 30px;
        padding-bottom: 30px;
        margin: 10px;

        background-color: black;
        color: #d8d8d8;
        text-decoration: none;
        text-align: center;
        font-size: 50px;
    }

    h1 {
        margin-bottom: 25%;
        width: 50%;

        color: #d8d8d8;
        font-size: 60px;
        text-align: center;
    }
</style>