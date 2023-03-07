<!-- JS CODE -->
<script>

    import { navigate } from 'svelte-router';

    // Define variables
    let totalNum = 0;
    let acc = 0;
    let pref = null;
    let links = 0;
    let pointNum = 0;
    let commBool = false;
    let topNum = 0;
    let midNum = 0;
    let lowNum = 0;

    let att = 0;
    let fouls = 0;
    let tFouls = 0;
    let coneNum = 0;
    let cubeNum = 0;
    let comm = 0;
    let rowPref;

    let station = [0, 0];

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

    // node functions
    function swapCone (a) {
        switch (arr[a][1]) {
            case 0:
                arr[a][1] = 1;
                break;
            case 1:
                arr[a][1] = 0;
                break;
        }
    }

    function swapCube (a) {
        switch (arr[a][1]) {
            case 0:
                arr[a][1] = 2;
                break;
            case 2:
                arr[a][1] = 0;
                break;
        }
    }

    function swapHybrid (a) {
        switch (arr[a][1]) {
            case 0:
                arr[a][1] = 1;
                break;
            case 1:
                arr[a][1] = 2;
                break;
            case 2:
                arr[a][1] = 0;
                break;
        }
    }

    function makeTeleop (a) {
        switch (arr[a][2]) {
            case 0:
                arr[a][2] = 1;
                break;
            default:
                break;
        }
    }

    function makeAuto (a) {
        switch (arr[a][2]) {
            case 1:
                arr[a][2] = 0;
                break;
            default:
                break;
        }
    }

    function makeFilled () {
        coneNum = 0;
        cubeNum = 0;
        pointNum = 0;
        topNum = 0;
        midNum = 0;
        lowNum = 0;

        for (let i = 0; i < 27; i++) {
            switch (arr[i][1]) {
                case 1:
                    coneNum = coneNum + 1;
                    break;
                case 2:
                    cubeNum = cubeNum + 1;
                    break;
                default:
                    break;
            }

            switch (arr[i][2]) {
                case 0:
                    switch (arr[i][0]) {
                        case 0:
                            if (arr[i][1] == 1 || arr[i][1] == 2) {
                                pointNum = pointNum + 6;
                                topNum = topNum + 1;
                            }
                            break;
                        case 1:
                            if (arr[i][1] == 1 || arr[i][1] == 2) {
                                pointNum = pointNum + 4;
                                midNum = midNum + 1;
                            }
                            break;
                        case 2:
                            if (arr[i][1] == 1 || arr[i][1] == 2) {
                                pointNum = pointNum + 3;
                                lowNum = lowNum + 1;
                            }
                            break;
                        default:
                            break;
                    }
                    break;
                case 1:
                    switch (arr[i][0]) {
                        case 0:
                            if (arr[i][1] == 1 || arr[i][1] == 2) {
                                pointNum = pointNum + 5;
                                topNum = topNum + 1;
                            }
                            break;
                        case 1:
                            if (arr[i][1] == 1 || arr[i][1] == 2) {
                                pointNum = pointNum + 3;
                                midNum = midNum + 1;
                            }
                            break;
                        case 2:
                            if (arr[i][1] == 1 || arr[i][1] == 2) {
                                pointNum = pointNum + 2;
                                lowNum = lowNum + 1;
                            }
                            break;
                        default:
                            break;
                    }
                    break;
            }
        }

        if (topNum > midNum && topNum > lowNum) {
            rowPref = "Top";
        } else if (midNum > topNum && midNum > lowNum) {
            rowPref = "Middle";
        } else if (lowNum > topNum && lowNum > midNum) {
            rowPref = "Bottom";
        } else if (topNum == midNum && (topNum > lowNum || midNum > lowNum)) {
            rowPref = "Top and Middle";
        } else if (midNum == lowNum && (midNum > topNum || lowNum > topNum)) {
            rowPref = "Middle and Bottom";
        } else if (topNum == lowNum && (topNum > midNum || lowNum > midNum)) {
            rowPref = "Top and Bottom";
        } else {
            rowPref = "None";
        }

        switch (comm) {
            case 0:
                break;
            case 1:
                pointNum = pointNum + 3;
                break;
        }

        switch (station[0]) {
            case 1:
                pointNum = pointNum + 8;
                break;
            case 2:
                pointNum = pointNum + 12;
                break;
        }

        switch (station[1]) {
            case 1:
                pointNum = pointNum + 2;
                break;
            case 2:
                pointNum = pointNum + 6;
                break;
            case 3:
                pointNum = pointNum + 10;
                break;
            default:
                break;
        }

        totalNum = cubeNum + coneNum;
        prefCheck();
        accCheck();
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
        if (links < 9) {
            links = links + 1;
            pointNum = pointNum + 5;
        }
        
    }

    function lDecr () {
        if (links > 0) {
            links = links - 1;
            pointNum = pointNum - 5;
        }
    }

    // community functions
    function commToTrue () {
        switch (comm) {
            case 0:
                comm = 1;
                commBool = true;
                break;
            case 1:
                break;
        }
    }

    function commToFalse () {
        switch (comm) {
            case 1:
                comm = 0;
                commBool = false;
                break;
            case 0:
                break;
        }
    }

    // station functions
    function stationTo (ind, val) {
        station[ind] = val;
    }

    // final data functions
    function accCheck () {
        if (totalNum == 0) {
            acc = 0;
        } else {
            acc = 100 * (totalNum / (totalNum + att));
            acc = acc.toFixed(2);
        }
    }

    function prefCheck () {
        if (coneNum / cubeNum >= 2) {
            pref = "Cone";
        } else if (coneNum / cubeNum <= 0.5) {
            pref = "Cube";
        } else {
            pref = "Both";
        }
    }

    // Export vars
    function handleClick() {
        navigate('/upload', {
            query: {
                pointNum: pointNum,
                pref: pref,
                acc: acc,
                links: links,
                fouls: fouls,
                tFouls: tFouls
            }
        });
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
                <button class="cone"
                on:click={() => {swapCone(0)}}
                class:activeCone={arr[0][1] == 1}
                on:click={() => {makeAuto(0)}}
                on:click={makeFilled}></button>
            </div>
            <div class="purple">
                <button class="box"
                on:click={() => {swapCube(1)}}
                class:activeCube={arr[1][1] == 2}
                on:click={() => {makeAuto(1)}}
                on:click={makeFilled}></button>
            </div>
            <div class="yellow">
                <button class="cone"
                on:click={() => {swapCone(2)}}
                class:activeCone={arr[2][1] == 1}
                on:click={() => {makeAuto(2)}}
                on:click={makeFilled}></button>
            </div>
            <div class="yellow">
                <button class="cone"
                on:click={() => {swapCone(3)}}
                class:activeCone={arr[3][1] == 1}
                on:click={() => {makeAuto(3)}}
                on:click={makeFilled}></button>
            </div>
            <div class="purple">
                <button class="box"
                on:click={() => {swapCube(4)}}
                class:activeCube={arr[4][1] == 2}
                on:click={() => {makeAuto(4)}}
                on:click={makeFilled}></button>
            </div>
            <div class="yellow">
                <button class="cone"
                on:click={() => {swapCone(5)}}
                class:activeCone={arr[5][1] == 1}
                on:click={() => {makeAuto(5)}}
                on:click={makeFilled}></button>
            </div>
            <div class="yellow">
                <button class="cone"
                on:click={() => {swapCone(6)}}
                class:activeCone={arr[6][1] == 1}
                on:click={() => {makeAuto(6)}}
                on:click={makeFilled}></button>
            </div>
            <div class="purple">
                <button class="box"
                on:click={() => {swapCube(7)}}
                class:activeCube={arr[7][1] == 2}
                on:click={() => {makeAuto(7)}}
                on:click={makeFilled}></button>
            </div>
            <div class="yellow">
                <button class="cone"
                on:click={() => {swapCone(8)}}
                class:activeCone={arr[8][1] == 1}
                on:click={() => {makeAuto(8)}}
                on:click={makeFilled}></button>
            </div>

            <!-- Mid row of INGA -->
            <div class="yellow">
                <button class="cone"
                on:click={() => {swapCone(9)}}
                class:activeCone={arr[9][1] == 1}
                on:click={() => {makeAuto(9)}}
                on:click={makeFilled}></button>
            </div>
            <div class="purple">
                <button class="box"
                on:click={() => {swapCube(10)}}
                class:activeCube={arr[10][1] == 2}
                on:click={() => {makeAuto(10)}}
                on:click={makeFilled}></button>
            </div>
            <div class="yellow">
                <button class="cone"
                on:click={() => {swapCone(11)}}
                class:activeCone={arr[11][1] == 1}
                on:click={() => {makeAuto(11)}}
                on:click={makeFilled}></button>
            </div>
            <div class="yellow">
                <button class="cone"
                on:click={() => {swapCone(12)}}
                class:activeCone={arr[12][1] == 1}
                on:click={() => {makeAuto(12)}}
                on:click={makeFilled}></button>
            </div>
            <div class="purple">
                <button class="box"
                on:click={() => {swapCube(13)}}
                class:activeCube={arr[13][1] == 2}
                on:click={() => {makeAuto(13)}}
                on:click={makeFilled}></button>
            </div>
            <div class="yellow">
                <button class="cone"
                on:click={() => {swapCone(14)}}
                class:activeCone={arr[14][1] == 1}
                on:click={() => {makeAuto(14)}}
                on:click={makeFilled}></button>
            </div>
            <div class="yellow">
                <button class="cone"
                on:click={() => {swapCone(15)}}
                class:activeCone={arr[15][1] == 1}
                on:click={() => {makeAuto(15)}}
                on:click={makeFilled}></button>
            </div>
            <div class="purple">
                <button class="box"
                on:click={() => {swapCube(16)}}
                class:activeCube={arr[16][1] == 2}
                on:click={() => {makeAuto(16)}}
                on:click={makeFilled}></button>
            </div>
            <div class="yellow">
                <button class="cone"
                on:click={() => {swapCone(17)}}
                class:activeCone={arr[17][1] == 1}
                on:click={() => {makeAuto(17)}}
                on:click={makeFilled}></button>
            </div>

            <!-- Low row of INGA -->
            <div class="dual">
                <button class="hybrid"
                on:click={() => {swapHybrid(18)}}
                class:activeCone={arr[18][1] == 1}
                class:activeCube={arr[18][1] == 2}
                on:click={() => {makeAuto(18)}}
                on:click={makeFilled}></button>
            </div>
            <div class="dual">
                <button class="hybrid"
                on:click={() => {swapHybrid(19)}}
                class:activeCone={arr[19][1] == 1}
                class:activeCube={arr[19][1] == 2}
                on:click={() => {makeAuto(19)}}
                on:click={makeFilled}></button>
            </div>
            <div class="dual">
                <button class="hybrid"
                on:click={() => {swapHybrid(20)}}
                class:activeCone={arr[20][1] == 1}
                class:activeCube={arr[20][1] == 2}
                on:click={() => {makeAuto(20)}}
                on:click={makeFilled}></button>
            </div>
            <div class="dual">
                <button class="hybrid"
                on:click={() => {swapHybrid(21)}}
                class:activeCone={arr[21][1] == 1}
                class:activeCube={arr[21][1] == 2}
                on:click={() => {makeAuto(21)}}
                on:click={makeFilled}></button>
            </div>
            <div class="dual">
                <button class="hybrid"
                on:click={() => {swapHybrid(22)}}
                class:activeCone={arr[22][1] == 1}
                class:activeCube={arr[22][1] == 2}
                on:click={() => {makeAuto(22)}}
                on:click={makeFilled}></button>
            </div>
            <div class="dual">
                <button class="hybrid"
                on:click={() => {swapHybrid(23)}}
                class:activeCone={arr[23][1] == 1}
                class:activeCube={arr[23][1] == 2}
                on:click={() => {makeAuto(23)}}
                on:click={makeFilled}></button>
            </div>
            <div class="dual">
                <button class="hybrid"
                on:click={() => {swapHybrid(24)}}
                class:activeCone={arr[24][1] == 1}
                class:activeCube={arr[24][1] == 2}
                on:click={() => {makeAuto(24)}}
                on:click={makeFilled}></button>
            </div>
            <div class="dual">
                <button class="hybrid"
                on:click={() => {swapHybrid(25)}}
                class:activeCone={arr[25][1] == 1}
                class:activeCube={arr[25][1] == 2}
                on:click={() => {makeAuto(25)}}
                on:click={makeFilled}></button>
            </div>
            <div class="dual">
                <button class="hybrid"
                on:click={() => {swapHybrid(26)}}
                class:activeCone={arr[26][1] == 1}
                class:activeCube={arr[26][1] == 2}
                on:click={() => {makeAuto(26)}}
                on:click={makeFilled}></button>
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

        <section class="inputArea">
            <p>Left Community?</p>
            <button on:click={commToTrue}
            class:active={comm == 1}
            on:click={makeFilled}>Yes</button>
            <button on:click={commToFalse}
            class:active={comm == 0}
            on:click={makeFilled}>No</button>
        </section>
        
        <!-- Input area for charge station -->
        <section class="inputArea">
            <p>Charge Station:</p>
            <button on:click={() => {stationTo(0, 0)}}
            class:active={station[0] == 0}
            on:click={makeFilled}>Off</button>
            <button on:click={() => {stationTo(0, 1)}}
            class:active={station[0] == 1}
            on:click={makeFilled}>Docked</button>
            <button on:click={() => {stationTo(0, 2)}}
            class:active={station[0] == 2}
            on:click={makeFilled}>Engaged</button>
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
                <button class="cone"
                on:click={() => {swapCone(0)}}
                class:activeCone={arr[0][1] == 1}
                on:click={() => {makeTeleop(0)}}
                on:click={makeFilled}></button>
            </div>
            <div class="purple">
                <button class="box"
                on:click={() => {swapCube(1)}}
                class:activeCube={arr[1][1] == 2}
                on:click={() => {makeTeleop(1)}}
                on:click={makeFilled}></button>
            </div>
            <div class="yellow">
                <button class="cone"
                on:click={() => {swapCone(2)}}
                class:activeCone={arr[2][1] == 1}
                on:click={() => {makeTeleop(2)}}
                on:click={makeFilled}></button>
            </div>
            <div class="yellow">
                <button class="cone"
                on:click={() => {swapCone(3)}}
                class:activeCone={arr[3][1] == 1}
                on:click={() => {makeTeleop(3)}}
                on:click={makeFilled}></button>
            </div>
            <div class="purple">
                <button class="box"
                on:click={() => {swapCube(4)}}
                class:activeCube={arr[4][1] == 2}
                on:click={() => {makeTeleop(4)}}
                on:click={makeFilled}></button>
            </div>
            <div class="yellow">
                <button class="cone"
                on:click={() => {swapCone(5)}}
                class:activeCone={arr[5][1] == 1}
                on:click={() => {makeTeleop(5)}}
                on:click={makeFilled}></button>
            </div>
            <div class="yellow">
                <button class="cone"
                on:click={() => {swapCone(6)}}
                class:activeCone={arr[6][1] == 1}
                on:click={() => {makeTeleop(6)}}
                on:click={makeFilled}></button>
            </div>
            <div class="purple">
                <button class="box"
                on:click={() => {swapCube(7)}}
                class:activeCube={arr[7][1] == 2}
                on:click={() => {makeTeleop(7)}}
                on:click={makeFilled}></button>
            </div>
            <div class="yellow">
                <button class="cone"
                on:click={() => {swapCone(8)}}
                class:activeCone={arr[8][1] == 1}
                on:click={() => {makeTeleop(8)}}
                on:click={makeFilled}></button>
            </div>

            <!-- Mid row of INGA -->
            <div class="yellow">
                <button class="cone"
                on:click={() => {swapCone(9)}}
                class:activeCone={arr[9][1] == 1}
                on:click={() => {makeTeleop(9)}}
                on:click={makeFilled}></button>
            </div>
            <div class="purple">
                <button class="box"
                on:click={() => {swapCube(10)}}
                class:activeCube={arr[10][1] == 2}
                on:click={() => {makeTeleop(10)}}
                on:click={makeFilled}></button>
            </div>
            <div class="yellow">
                <button class="cone"
                on:click={() => {swapCone(11)}}
                class:activeCone={arr[11][1] == 1}
                on:click={() => {makeTeleop(11)}}
                on:click={makeFilled}></button>
            </div>
            <div class="yellow">
                <button class="cone"
                on:click={() => {swapCone(12)}}
                class:activeCone={arr[12][1] == 1}
                on:click={() => {makeTeleop(12)}}
                on:click={makeFilled}></button>
            </div>
            <div class="purple">
                <button class="box"
                on:click={() => {swapCube(13)}}
                class:activeCube={arr[13][1] == 2}
                on:click={() => {makeTeleop(13)}}
                on:click={makeFilled}></button>
            </div>
            <div class="yellow">
                <button class="cone"
                on:click={() => {swapCone(14)}}
                class:activeCone={arr[14][1] == 1}
                on:click={() => {makeTeleop(14)}}
                on:click={makeFilled}></button>
            </div>
            <div class="yellow">
                <button class="cone"
                on:click={() => {swapCone(15)}}
                class:activeCone={arr[15][1] == 1}
                on:click={() => {makeTeleop(15)}}
                on:click={makeFilled}></button>
            </div>
            <div class="purple">
                <button class="box"
                on:click={() => {swapCube(16)}}
                class:activeCube={arr[16][1] == 2}
                on:click={() => {makeTeleop(16)}}
                on:click={makeFilled}></button>
            </div>
            <div class="yellow">
                <button class="cone"
                on:click={() => {swapCone(17)}}
                class:activeCone={arr[17][1] == 1}
                on:click={() => {makeTeleop(17)}}
                on:click={makeFilled}></button>
            </div>

            <!-- Low row of INGA -->
            <div class="dual">
                <button class="hybrid"
                on:click={() => {swapHybrid(18)}}
                class:activeCone={arr[18][1] == 1}
                class:activeCube={arr[18][1] == 2}
                on:click={() => {makeTeleop(18)}}
                on:click={makeFilled}></button>
            </div>
            <div class="dual">
                <button class="hybrid"
                on:click={() => {swapHybrid(19)}}
                class:activeCone={arr[19][1] == 1}
                class:activeCube={arr[19][1] == 2}
                on:click={() => {makeTeleop(19)}}
                on:click={makeFilled}></button>
            </div>
            <div class="dual">
                <button class="hybrid"
                on:click={() => {swapHybrid(20)}}
                class:activeCone={arr[20][1] == 1}
                class:activeCube={arr[20][1] == 2}
                on:click={() => {makeTeleop(20)}}
                on:click={makeFilled}></button>
            </div>
            <div class="dual">
                <button class="hybrid"
                on:click={() => {swapHybrid(21)}}
                class:activeCone={arr[21][1] == 1}
                class:activeCube={arr[21][1] == 2}
                on:click={() => {makeTeleop(21)}}
                on:click={makeFilled}></button>
            </div>
            <div class="dual">
                <button class="hybrid"
                on:click={() => {swapHybrid(22)}}
                class:activeCone={arr[22][1] == 1}
                class:activeCube={arr[22][1] == 2}
                on:click={() => {makeTeleop(22)}}
                on:click={makeFilled}></button>
            </div>
            <div class="dual">
                <button class="hybrid"
                on:click={() => {swapHybrid(23)}}
                class:activeCone={arr[23][1] == 1}
                class:activeCube={arr[23][1] == 2}
                on:click={() => {makeTeleop(23)}}
                on:click={makeFilled}></button>
            </div>
            <div class="dual">
                <button class="hybrid"
                on:click={() => {swapHybrid(24)}}
                class:activeCone={arr[24][1] == 1}
                class:activeCube={arr[24][1] == 2}
                on:click={() => {makeTeleop(24)}}
                on:click={makeFilled}></button>
            </div>
            <div class="dual">
                <button class="hybrid"
                on:click={() => {swapHybrid(25)}}
                class:activeCone={arr[25][1] == 1}
                class:activeCube={arr[25][1] == 2}
                on:click={() => {makeTeleop(25)}}
                on:click={makeFilled}></button>
            </div>
            <div class="dual">
                <button class="hybrid"
                on:click={() => {swapHybrid(26)}}
                class:activeCone={arr[26][1] == 1}
                class:activeCube={arr[26][1] == 2}
                on:click={() => {makeTeleop(26)}}
                on:click={makeFilled}></button>
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
            <button on:click={() => {stationTo(1, 0)}}
            class:active={station[1] == 0}
            on:click={makeFilled}>Out</button>
            <button on:click={() => {stationTo(1, 1)}}
            class:active={station[1] == 1}
            on:click={makeFilled}>Community</button>
            <button on:click={() => {stationTo(1, 2)}}
            class:active={station[1] == 2}
            on:click={makeFilled}>Docked</button>
            <button on:click={() => {stationTo(1, 3)}}
            class:active={station[1] == 3}
            on:click={makeFilled}>Engaged</button>
        </section>
    </section>

    <!-- Title for final data section -->
    <h2>Other Data</h2>

    <!-- Final criteria grid -->
    <section class="scoutingArea">
        
        <section class="inputArea">
            <p>Accuracy: {acc}%</p>
        </section>
        <section class="inputArea">
            <p>Preferred Element: {pref}</p>
        </section>
        <section class="inputArea">
            <p>Points Scored: {pointNum}</p>
        </section>
        <section class="inputArea">
            <p>Preferred Row: {rowPref}</p>
        </section>

    </section>

    <!-- Link to upload page -->
    <a href="/upload" class="next" on:click={handleClick}>To Upload</a>
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
    .next {
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

    button {
        height: 25px;
        margin-left: 5px;
    }

    .Incr,
    .Decr {
        width: 25px;
        height: 25px;
        margin-left: 5px;
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

    .active {
        background-color: black;
        color: #30ace2;
    }
</style>