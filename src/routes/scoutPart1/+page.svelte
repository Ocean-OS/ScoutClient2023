<!-- JS CODE -->
<script>
    import { Router, Link, Route } from "svelte-routing";
    import { navigate } from 'svelte-router';

    let teamNum = null;
    let roundNum = null;
    let alliance = null;
    let scouter = null;

    function handleClick() {
        navigate("/scoutPart2?scouter=${scouter}");
        navigate("/scoutPart2?teamNum=${teamNum}");
        navigate("/scoutPart2?alliance=${alliance}");
        navigate("/scoutPart2?roundNum=${roundNum}");
    }
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
        <!-- Input area for scouter name -->
        <p>Scouter:</p>
        <input bind:value={scouter}/>

        <!-- Input area for team name -->
        <p>Team #:</p>
        <input type="number" bind:value={teamNum}/>

        <!-- Input area for round # -->
        <p>Round #:</p>
        <input type="number" bind:value={roundNum}/>

        <!-- Input area for alliance color -->
        <p>Alliance:</p>
        <input bind:value={alliance}/>
    </section>
    

    <!-- Link to scoring page -->
    <button class="next" on:click={handleClick}>To Scoring</button>
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
    .next {
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