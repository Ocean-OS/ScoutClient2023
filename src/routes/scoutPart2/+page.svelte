<!-- JS CODE -->
<script>

    // Define variables
    let totalNum = 0;
    let acc = 0;
    let pref = null;
    let links = 0;
    let pointNum = 0;

    let att = 0;
    let fouls = 0;
    let tFouls = 0;
    let coneNum = 0;
    let cubeNum = 0;

    let arr = [
        // first val is level on the grid (hi/mid/lo)
        // second val is element (none/cone/cube)
        // third val is stage (auto/teleop)

        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],

        [1, 0, 0],
        [1, 0, 0],
        [1, 0, 0],
        [1, 0, 0],
        [1, 0, 0],
        [1, 0, 0],
        [1, 0, 0],
        [1, 0, 0],
        [1, 0, 0],

        [2, 0, 0],
        [2, 0, 0],
        [2, 0, 0],
        [2, 0, 0],
        [2, 0, 0],
        [2, 0, 0],
        [2, 0, 0],
        [2, 0, 0],
        [2, 0, 0]
    ]

    let active = [
        false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false
    ]

    // node functions
    function makeFilled () {
        coneNum = 0;
        cubeNum = 0;
        pointNum = 0;
        for (let i = 0; i > 27; i++) {
            if (arr[i][1] == 1) {
                coneNum = coneNum + 1;
            } else if (arr[i][1] == 2) {
                cubeNum = cubeNum + 1;
            }

            if (arr[i][2] = 0) {
                if (arr[i][0] = 0) {
                    pointNum = pointNum + 6;
                }
                if (arr[i][0] = 1) {
                    pointNum = pointNum + 4;
                }
                if (arr[i][0] = 2) {
                    pointNum = pointNum + 3;
                }
            }
            
            if (arr[i][2] = 1) {
                if (arr[i][0] = 0) {
                    pointNum = pointNum + 5;
                }
                if (arr[i][0] = 1) {
                    pointNum = pointNum + 3;
                }
                if (arr[i][0] = 2) {
                    pointNum = pointNum + 2;
                }
            }
        }
    }



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

    // links functions
    function lIncr () {
        links = links + 1;
    }

    function lDecr () {
        if (links > 0) {
            links = links - 1;
        }
    }

    // final data functions
    function accCheck () {
        if ((coneNum == 0) && (cubeNum == 0)) {
            acc = 0;
        } else {
            acc = 100 * (totalNum / (totalNum + att));
        }
    }

    function prefCheck () {
        if (coneNum / cubeNum >= 2) {
            pref = "cone";
        } else if (coneNum / cubeNum <= 0.5) {
            pref = "cube";
        } else {
            pref = "both";
        }
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
        <p>Cubes: {cubeNum}</p>
        <p>Total: {totalNum}</p>

        <!-- Interactable node grid area -->
        <!-- Outline for INGA -->
        <section class="INGA">
            <!-- Top row of INGA -->
            <div class="yellow">
                <button class="cone"></button>
            </div>
            <div class="purple">
                <button class="box"></button>
            </div>
            <div class="yellow">
                <button class="cone"></button>
            </div>
            <div class="yellow">
                <button class="cone"></button>
            </div>
            <div class="purple">
                <button class="box"></button>
            </div>
            <div class="yellow">
                <button class="cone"></button>
            </div>
            <div class="yellow">
                <button class="cone"></button>
            </div>
            <div class="purple">
                <button class="box"></button>
            </div>
            <div class="yellow">
                <button class="cone"></button>
            </div>

            <!-- Mid row of INGA -->
            <div class="yellow">
                <button class="cone"></button>
            </div>
            <div class="purple">
                <button class="box"></button>
            </div>
            <div class="yellow">
                <button class="cone"></button>
            </div>
            <div class="yellow">
                <button class="cone"></button>
            </div>
            <div class="purple">
                <button class="box"></button>
            </div>
            <div class="yellow">
                <button class="cone"></button>
            </div>
            <div class="yellow">
                <button class="cone"></button>
            </div>
            <div class="purple">
                <button class="box"></button>
            </div>
            <div class="yellow">
                <button class="cone"></button>
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
            <button class="Incr" on:click={attIncr} on:click={accCheck}>+</button>
            <button class="Decr" on:click={attDecr} on:click={accCheck}>-</button>
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

        <p>Cones: {coneNum}</p>
        <p>Cubes: {cubeNum}</p>
        <p>Total: {totalNum}</p>

        <!-- Interactable node grid area -->
        <!-- Outline for INGA -->
        <section class="INGA">
            <!-- Top row of INGA -->
            <div class="yellow">
                <button class="cone"></button>
            </div>
            <div class="purple">
                <button class="box"></button>
            </div>
            <div class="yellow">
                <button class="cone"></button>
            </div>
            <div class="yellow">
                <button class="cone"></button>
            </div>
            <div class="purple">
                <button class="box"></button>
            </div>
            <div class="yellow">
                <button class="cone"></button>
            </div>
            <div class="yellow">
                <button class="cone"></button>
            </div>
            <div class="purple">
                <button class="box"></button>
            </div>
            <div class="yellow">
                <button class="cone"></button>
            </div>

            <!-- Mid row of INGA -->
            <div class="yellow">
                <button class="cone"></button>
            </div>
            <div class="purple">
                <button class="box"></button>
            </div>
            <div class="yellow">
                <button class="cone"></button>
            </div>
            <div class="yellow">
                <button class="cone"></button>
            </div>
            <div class="purple">
                <button class="box"></button>
            </div>
            <div class="yellow">
                <button class="cone"></button>
            </div>
            <div class="yellow">
                <button class="cone"></button>
            </div>
            <div class="purple">
                <button class="box"></button>
            </div>
            <div class="yellow">
                <button class="cone"></button>
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
            <button class="Incr" on:click={attIncr} on:click={accCheck}>+</button>
            <button class="Decr" on:click={attDecr} on:click={accCheck}>-</button>
        </section>

        <!-- Input area for links completed -->
        <section class="inputArea">
            <p>Links Completed: {links}</p>
            <button class="Incr" on:click={lIncr} on:click={accCheck}>+</button>
            <button class="Decr" on:click={lDecr} on:click={accCheck}>-</button>
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

    <!-- Title for final data section -->
    <h2>Other Data</h2>

    <!-- Final criteria grid -->
    <section class="scoutingArea">
        
        <section class="inputArea">
            <p>Accuracy: {acc}</p>
        </section>
        <section class="inputArea">
            <p>Preferred Element: {pref}</p>
        </section>
        <section class="inputArea">
            <p>Points Scored: {pointNum}</p>
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

    .activeCone {
        background-color: rgba(255,255,0,1);
    }

    .activeCube {
        background-color: #ff00ff;
    }
</style>