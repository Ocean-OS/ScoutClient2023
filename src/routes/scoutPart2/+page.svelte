<!-- JS CODE -->

<!-- HTML CODE -->

<!-- Section for flexbox purposes -->
<section>
    <!-- Back button just in case user accidentally presses scout button -->
    <a href="/scoutPart1" class="backButton">Back</a>

    <!-- Page Title -->
    <h1>Scouting Page</h1>

    <!-- Title for autonomous section -->
    <h2>Autonomous</h2>

    <!-- Autonomous criteria grid -->
    <section class="scoutingArea">

        <!-- Interactable node grid area -->
        <!-- Outline for INGA -->
        <section class="INGA">
            <!-- Top row of INGA -->
            <input type="checkbox" class="cone">
            <input type="checkbox" class="box">
            <input type="checkbox" class="cone">
            <input type="checkbox" class="cone">
            <input type="checkbox" class="box">
            <input type="checkbox" class="cone">
            <input type="checkbox" class="cone">
            <input type="checkbox" class="box">
            <input type="checkbox" class="cone">

            <!-- Mid row of INGA -->
            <input type="checkbox" class="cone">
            <input type="checkbox" class="box">
            <input type="checkbox" class="cone">
            <input type="checkbox" class="cone">
            <input type="checkbox" class="box">
            <input type="checkbox" class="cone">
            <input type="checkbox" class="cone">
            <input type="checkbox" class="box">
            <input type="checkbox" class="cone">

            <!-- Low row of INGA -->
            <input type="checkbox" class="hybrid">
            <input type="checkbox" class="hybrid">
            <input type="checkbox" class="hybrid">
            <input type="checkbox" class="hybrid">
            <input type="checkbox" class="hybrid">
            <input type="checkbox" class="hybrid">
            <input type="checkbox" class="hybrid">
            <input type="checkbox" class="hybrid">
            <input type="checkbox" class="hybrid">
        </section>

        <!-- Input area for attempted nodes -->
        <section class="inputArea">
            <p>Attempted: 0</p>
            <button class="Incr">+</button>
            <button class="Decr">-</button>
        </section>
        
        <!-- Input area for tech fouls -->
        <section class="inputArea">
            <p>Tech Fouls: 0</p>
            <button class="Incr">+</button>
            <button class="Decr">-</button>
        </section>
        
        <!-- Input area for fouls -->
        <section class="inputArea">
            <p>Fouls: 0</p>
            <button class="Incr">+</button>
            <button class="Decr">-</button>
        </section>
        
        <!-- Input area for charge station -->
        <section class="inputArea">
            <p>Charge Station:</p>
            <select name="chargeStation" id="chargeStation">
                <option value="0">Off</option>
                <option value="1">Docked</option>
                <option value="2">Engaged</option>
            </select>
        </section>
    </section>

    <!-- Title for teleop section -->
    <h2>Teleop</h2>

    <!-- Teleop criteria grid -->
    <section class="scoutingArea">

        <!-- Interactable node grid area -->
        <!-- Outline for INGA -->
        <section class="INGA">
            <!-- Top row of INGA -->
            <input type="checkbox" class="cone">
            <input type="checkbox" class="box">
            <input type="checkbox" class="cone">
            <input type="checkbox" class="cone">
            <input type="checkbox" class="box">
            <input type="checkbox" class="cone">
            <input type="checkbox" class="cone">
            <input type="checkbox" class="box">
            <input type="checkbox" class="cone">

            <!-- Mid row of INGA -->
            <input type="checkbox" class="cone">
            <input type="checkbox" class="box">
            <input type="checkbox" class="cone">
            <input type="checkbox" class="cone">
            <input type="checkbox" class="box">
            <input type="checkbox" class="cone">
            <input type="checkbox" class="cone">
            <input type="checkbox" class="box">
            <input type="checkbox" class="cone">

            <!-- Low row of INGA -->
            <input type="checkbox" class="hybrid">
            <input type="checkbox" class="hybrid">
            <input type="checkbox" class="hybrid">
            <input type="checkbox" class="hybrid">
            <input type="checkbox" class="hybrid">
            <input type="checkbox" class="hybrid">
            <input type="checkbox" class="hybrid">
            <input type="checkbox" class="hybrid">
            <input type="checkbox" class="hybrid">
        </section>

        <!-- Input area for attempted nodes -->
        <section class="inputArea">
            <p>Attempted: 0</p>
            <button class="Incr">+</button>
            <button class="Decr">-</button>
        </section>
        
        <!-- Input area for tech fouls -->
        <section class="inputArea">
            <p>Tech Fouls: 0</p>
            <button class="Incr">+</button>
            <button class="Decr">-</button>
        </section>
        
        <!-- Input area for fouls -->
        <section class="inputArea">
            <p>Fouls: 0</p>
            <button class="Incr">+</button>
            <button class="Decr">-</button>
        </section>
    </section>

    <!-- Title for endgame section -->
    <h2>Endgame</h2>

    <!-- Endgame criteria grid -->
    <section class="scoutingArea">
        
        <!-- Input area for charge station -->
        <section class="inputArea">
            <p>Charge Station:</p>
            <select name="chargeStation" id="chargeStation">
                <option value="0">Off</option>
                <option value="1">Docked</option>
                <option value="2">Engaged</option>
            </select>
        </section>
    </section>

    <!-- Link to upload page -->
    <a href="/upload" class="toPage">To Upload</a>
</section>

<!-- CSS CODE -->
<style>
    /* Applying columned layout to page */
    section {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

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
        margin-bottom: 20px;
        width: 80%;

        color: #d8d8d8;
        font-size: 60px;
        text-align: center;
    }

    h2 {
        margin-bottom: 0px;
        width: 80%;

        color: #d8d8d8;
        font-size: 40px;
        text-align: center;
        
    }

    p {
        color: #d8d8d8;
        font-size: 25px;
        margin: 0px;
    }

    .backButton {
        width: 20%;
        padding: 10px;
        margin: 10px;

        font-size: 25px;

        align-self: flex-start;
    }

    .scoutingArea {
        width: 90%;
        margin: 5%;
        margin-bottom: 25px;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .INGA {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-bottom: 20px;
    }

    input[type="checkbox"] {
        width: 30px;
        height: 30px;
    }

    .inputArea {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .Incr,
    .Decr {
        width: 20px;
        height: 20px;
        margin-left: 5px;
    }

    select {
        height: 25px;
        width: 40%;
        
        margin-left: 5px;
    }

    .toPage {
        margin-top: 25%;
        width: 80%;
    }
</style>