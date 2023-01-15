<!-- JS CODE -->
<script>

</script>

<!-- HTML CODE -->

<!-- Section for flexbox purposes -->
<section>
    <!-- Back button just in case user accidentally presses scout button -->
    <a href="/" class="backButton">Back</a>

    <!-- Page Title -->
    <h1>Pregame info</h1>

    <!-- Section to group input areas together for margin purposes -->
    <section class="inputArea">
        <!-- Input area for team name -->
        <p>Team #:</p>
        <input />

        <!-- Input area for round # -->
        <p>Round #:</p>
        <input />

        <!-- Input area for alliance color -->
        <p>Alliance:</p>
        <input />
    </section>
    

    <!-- Link to scoring page -->
    <a href="/scoutPart2">To Scoring</a>
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
        width: 80%;
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
        margin-bottom: 0px;
        width: 80%;

        color: #d8d8d8;
        font-size: 60px;
        text-align: center;
    }

    p {
        color: #d8d8d8;
        font-size: 30px;
        margin-bottom: 0px;
    }

    .backButton {
        width: 20%;
        padding: 10px;
        margin: 10px;

        font-size: 25px;

        align-self: flex-start;
    }

    .inputArea {
        margin-bottom: 15%;
    }

    input {
        height: 25px;
    }
</style>