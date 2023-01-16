<!-- JS CODE -->
<script>
	import { append, set_attributes } from "svelte/internal";


    // Define variables
    let coneNum = 0;
    let cubeNum = 0;
    let totalNum = 0;
    let att = 0;
    let fouls = 0;
    let tFouls = 0;
    let c1 = 0;
    let c2 = 0;
    let c3 = 0;
    let c4 = 0;
    let c5 = 0;
    let c6 = 0;
    let c7 = 0;
    let c8 = 0;
    let c9 = 0;
    let c10 = 0;
    let c11 = 0;
    let c12 = 0;
    let b1 = 0;
    let b2 = 0;
    let b3 = 0;
    let b4 = 0;
    let b5 = 0;
    let b6 = 0;
    let b7 = 0;
    let b8 = 0;
    let b9 = 0;
    let b10 = 0;
    let b11 = 0;
    let b12 = 0;
    let h1 = 0;
    let h2 = 0;
    let h3 = 0;
    let h4 = 0;
    let h5 = 0;
    let h6 = 0;
    let h7 = 0;
    let h8 = 0;
    let h9 = 0;

    // attempted nodes functions
    function attIncr () {
        att = att + 1;
        return(att);
    }

    function attDecr () {
        if (att > 0) {
            att = att - 1;
        }
    }

    // fouls functions
    function foulsIncr () {
        fouls = fouls + 1;
    }

    function foulsDecr () {
        if (fouls > 0) {
            fouls = fouls - 1;
        }
    }

    // tech fouls functions
    function tFoulsIncr () {
        tFouls = tFouls + 1;
    }

    function tFoulsDecr () {
        if (tFouls > 0) {
            tFouls = tFouls - 1;
        }
    }

    // cone checkbox functions
    function coneCheck () {
        
    }

    function c1Check () {
        if (c1 == 0) {
            c1 = 1;
        } else {
            c1 = 0;
        }
        coneNum = c1 + c2 + c3 + c4 + c5 + c6 + c7 + c8 + c9 + c10 + c11 + c12;
        totalNum = coneNum + cubeNum + h1 + h2 + h3 + h4 + h5 + h6 + h7 + h8 + h9;
    }

    function c2Check () {
        if (c2 == 0) {
            c2 = 1;
        } else {
            c2 = 0;
        }
        coneNum = c1 + c2 + c3 + c4 + c5 + c6 + c7 + c8 + c9 + c10 + c11 + c12;
        totalNum = coneNum + cubeNum + h1 + h2 + h3 + h4 + h5 + h6 + h7 + h8 + h9;
    }

    function c3Check () {
        if (c3 == 0) {
            c3 = 1;
        } else {
            c3 = 0;
        }
        coneNum = c1 + c2 + c3 + c4 + c5 + c6 + c7 + c8 + c9 + c10 + c11 + c12;
        totalNum = coneNum + cubeNum + h1 + h2 + h3 + h4 + h5 + h6 + h7 + h8 + h9;
    }

    function c4Check () {
        if (c4 == 0) {
            c4 = 1;
        } else {
            c4 = 0;
        }
        coneNum = c1 + c2 + c3 + c4 + c5 + c6 + c7 + c8 + c9 + c10 + c11 + c12;
        totalNum = coneNum + cubeNum + h1 + h2 + h3 + h4 + h5 + h6 + h7 + h8 + h9;
    }

    function c5Check () {
        if (c5 == 0) {
            c5 = 1;
        } else {
            c5 = 0;
        }
        coneNum = c1 + c2 + c3 + c4 + c5 + c6 + c7 + c8 + c9 + c10 + c11 + c12;
        totalNum = coneNum + cubeNum + h1 + h2 + h3 + h4 + h5 + h6 + h7 + h8 + h9;
    }

    function c6Check () {
        if (c6 == 0) {
            c6 = 1;
        } else {
            c6 = 0;
        }
        coneNum = c1 + c2 + c3 + c4 + c5 + c6 + c7 + c8 + c9 + c10 + c11 + c12;
        totalNum = coneNum + cubeNum + h1 + h2 + h3 + h4 + h5 + h6 + h7 + h8 + h9;
    }

    function c7Check () {
        if (c7 == 0) {
            c7 = 1;
        } else {
            c7 = 0;
        }
        coneNum = c1 + c2 + c3 + c4 + c5 + c6 + c7 + c8 + c9 + c10 + c11 + c12;
        totalNum = coneNum + cubeNum + h1 + h2 + h3 + h4 + h5 + h6 + h7 + h8 + h9;
    }

    function c8Check () {
        if (c8 == 0) {
            c8 = 1;
        } else {
            c8 = 0;
        }
        coneNum = c1 + c2 + c3 + c4 + c5 + c6 + c7 + c8 + c9 + c10 + c11 + c12;
        totalNum = coneNum + cubeNum + h1 + h2 + h3 + h4 + h5 + h6 + h7 + h8 + h9;
    }

    function c9Check () {
        if (c9 == 0) {
            c9 = 1;
        } else {
            c9 = 0;
        }
        coneNum = c1 + c2 + c3 + c4 + c5 + c6 + c7 + c8 + c9 + c10 + c11 + c12;
        totalNum = coneNum + cubeNum + h1 + h2 + h3 + h4 + h5 + h6 + h7 + h8 + h9;
    }

    function c10Check () {
        if (c10 == 0) {
            c10 = 1;
        } else {
            c10 = 0;
        }
        coneNum = c1 + c2 + c3 + c4 + c5 + c6 + c7 + c8 + c9 + c10 + c11 + c12;
        totalNum = coneNum + cubeNum + h1 + h2 + h3 + h4 + h5 + h6 + h7 + h8 + h9;
    }

    function c11Check () {
        if (c11 == 0) {
            c11 = 1;
        } else {
            c11 = 0;
        }
        coneNum = c1 + c2 + c3 + c4 + c5 + c6 + c7 + c8 + c9 + c10 + c11 + c12;
        totalNum = coneNum + cubeNum + h1 + h2 + h3 + h4 + h5 + h6 + h7 + h8 + h9;
    }

    function c12Check () {
        if (c12 == 0) {
            c12 = 1;
        } else {
            c12 = 0;
        }
        coneNum = c1 + c2 + c3 + c4 + c5 + c6 + c7 + c8 + c9 + c10 + c11 + c12;
        totalNum = coneNum + cubeNum + h1 + h2 + h3 + h4 + h5 + h6 + h7 + h8 + h9;
    }
</script>

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

        <p>Cones: {coneNum}</p>

        <!-- Interactable node grid area -->
        <!-- Outline for INGA -->
        <section class="INGA">
            <!-- Top row of INGA -->
            <div class="yellow">
                <button class="cone" on:click={c1Check}></button>
            </div>
            <div class="purple">
                <button class="box"></button>
            </div>
            <div class="yellow">
                <button class="cone" on:click={c2Check}></button>
            </div>
            <div class="yellow">
                <button class="cone" on:click={c3Check}></button>
            </div>
            <div class="purple">
                <button class="box"></button>
            </div>
            <div class="yellow">
                <button class="cone" on:click={c4Check}></button>
            </div>
            <div class="yellow">
                <button class="cone" on:click={c5Check}></button>
            </div>
            <div class="purple">
                <button class="box"></button>
            </div>
            <div class="yellow">
                <button class="cone" on:click={c6Check}></button>
            </div>

            <!-- Mid row of INGA -->
            <div class="yellow">
                <button class="cone" on:click={c7Check}></button>
            </div>
            <div class="purple">
                <button class="box"></button>
            </div>
            <div class="yellow">
                <button class="cone" on:click={c8Check}></button>
            </div>
            <div class="yellow">
                <button class="cone" on:click={c9Check}></button>
            </div>
            <div class="purple">
                <button class="box"></button>
            </div>
            <div class="yellow">
                <button class="cone" on:click={c10Check}></button>
            </div>
            <div class="yellow">
                <button class="cone" on:click={c11Check}></button>
            </div>
            <div class="purple">
                <button class="box"></button>
            </div>
            <div class="yellow">
                <button class="cone" on:click={c12Check}></button>
            </div>

            <!-- Low row of INGA -->
            <div class="dual">
                <button class="hybrid"></button>
            </div>
            <div class="dual">
                <button class="hybrid"></button>
            </div>
            <div class="dual">
                <button class="hybrid"></button>
            </div>
            <div class="dual">
                <button class="hybrid"></button>
            </div>
            <div class="dual">
                <button class="hybrid"></button>
            </div>
            <div class="dual">
                <button class="hybrid"></button>
            </div>
            <div class="dual">
                <button class="hybrid"></button>
            </div>
            <div class="dual">
                <button class="hybrid"></button>
            </div>
            <div class="dual">
                <button class="hybrid"></button>
            </div>
        </section>

        <!-- Input area for attempted nodes -->
        <section class="inputArea">
            <p>Attempted: {att}</p>
            <button class="Incr" on:click={attIncr}>+</button>
            <button class="Decr" on:click={attDecr}>-</button>
        </section>
        
        <!-- Input area for tech fouls -->
        <section class="inputArea">
            <p>Tech Fouls: {tFouls}</p>
            <button class="Incr" on:click={tFoulsIncr}>+</button>
            <button class="Decr" on:click={tFoulsDecr}>-</button>
        </section>
        
        <!-- Input area for fouls -->
        <section class="inputArea">
            <p>Fouls: {fouls}</p>
            <button class="Incr" on:click={foulsIncr}>+</button>
            <button class="Decr" on:click={foulsDecr}>-</button>
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
            <div class="yellow">
                <input type="checkbox" class="cone">
            </div>
            <div class="purple">
                <input type="checkbox" class="box">
            </div>
            <div class="yellow">
                <input type="checkbox" class="cone">
            </div>
            <div class="yellow">
                <input type="checkbox" class="cone">
            </div>
            <div class="purple">
                <input type="checkbox" class="box">
            </div>
            <div class="yellow">
                <input type="checkbox" class="cone">
            </div>
            <div class="yellow">
                <input type="checkbox" class="cone">
            </div>
            <div class="purple">
                <input type="checkbox" class="box">
            </div>
            <div class="yellow">
                <input type="checkbox" class="cone">
            </div>

            <!-- Mid row of INGA -->
            <div class="yellow">
                <input type="checkbox" class="cone">
            </div>
            <div class="purple">
                <input type="checkbox" class="box">
            </div>
            <div class="yellow">
                <input type="checkbox" class="cone">
            </div>
            <div class="yellow">
                <input type="checkbox" class="cone">
            </div>
            <div class="purple">
                <input type="checkbox" class="box">
            </div>
            <div class="yellow">
                <input type="checkbox" class="cone">
            </div>
            <div class="yellow">
                <input type="checkbox" class="cone">
            </div>
            <div class="purple">
                <input type="checkbox" class="box">
            </div>
            <div class="yellow">
                <input type="checkbox" class="cone">
            </div>

            <!-- Low row of INGA -->
            <div class="dual">
                <input type="checkbox" class="hybrid">
            </div>
            <div class="dual">
                <input type="checkbox" class="hybrid">
            </div>
            <div class="dual">
                <input type="checkbox" class="hybrid">
            </div>
            <div class="dual">
                <input type="checkbox" class="hybrid">
            </div>
            <div class="dual">
                <input type="checkbox" class="hybrid">
            </div>
            <div class="dual">
                <input type="checkbox" class="hybrid">
            </div>
            <div class="dual">
                <input type="checkbox" class="hybrid">
            </div>
            <div class="dual">
                <input type="checkbox" class="hybrid">
            </div>
            <div class="dual">
                <input type="checkbox" class="hybrid">
            </div>
        </section>

        <!-- Input area for attempted nodes -->
        <section class="inputArea">
            <p>Attempted: {att}</p>
            <button class="Incr" on:click={attIncr}>+</button>
            <button class="Decr" on:click={attDecr}>-</button>
        </section>
        
        <!-- Input area for tech fouls -->
        <section class="inputArea">
            <p>Tech Fouls: {tFouls}</p>
            <button class="Incr" on:click={tFoulsIncr}>+</button>
            <button class="Decr" on:click={tFoulsDecr}>-</button>
        </section>
        
        <!-- Input area for fouls -->
        <section class="inputArea">
            <p>Fouls: {fouls}</p>
            <button class="Incr" on:click={foulsIncr}>+</button>
            <button class="Decr" on:click={foulsDecr}>-</button>
        </section>
    </section>

    <!-- Title for endgame section -->
    <h2>Endgame</h2>

    <!-- Endgame criteria grid -->
    <section class="scoutingArea">
        
        <!-- Input area for ending position -->
        <section class="inputArea">
            <p>Ending Position:</p>
            <select name="chargeStation" id="chargeStation">
                <option value="0">Field</option>
                <option value="1">Community</option>
                <option value="2">Docked</option>
                <option value="3">Engaged</option>
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
        align-content: center;
        margin-bottom: 20px;
        background: linear-gradient(90deg, rgba(0,0,255,1) 33.75%, rgba(216,216,216,1) 33.75%, rgba(216,216,216,1) 66.25%, rgba(0,0,255,1) 66.25%);
        border: solid 1px black;
        width: 100%;
        height: 100px;
        padding: 5px;
    }

    .cone,
    .box,
    .hybrid {
        width: 80%;
        height: 80%;
        margin: 5px;
        padding: 0px;
    }

    div {
        width: 10%;
        height: 33%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .cone {
        border-radius: 50%;
    }

    .inputArea {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .Incr,
    .Decr {
        width: 25px;
        height: 25px;
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
    .yellow {
        background-color: #ffff00;
        border: solid 1px black;
        margin: 0px;
        padding: 0px;
    }

    .purple {
        background-color: #ff00ff;
        border: solid 1px black;
        margin: 0px;
        padding: 0px;
    }

    .dual {
        background: linear-gradient(135deg, rgba(255,0,255,1) 49%, rgba(255,255,0,1) 49%);
        border: solid 1px black;
        margin: 0px;
        padding: 0px;
    }
</style>