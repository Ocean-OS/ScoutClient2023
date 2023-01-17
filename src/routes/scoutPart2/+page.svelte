<!-- JS CODE -->
<script>

    // Define variables
    let totalNum = 0;
    let acc = 0;
    let pref = null;
    let links = 0;

    let att = 0;
    let fouls = 0;
    let tFouls = 0;
    let coneNum = 0;
    let cubeNum = 0;

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

    let h1 = 0;
    let h2 = 0;
    let h3 = 0;
    let h4 = 0;
    let h5 = 0;
    let h6 = 0;
    let h7 = 0;
    let h8 = 0;
    let h9 = 0;

    let active1 = false;
    let active2 = false;
    let active3 = false;
    let active4 = false;
    let active5 = false;
    let active6 = false;
    let active7 = false;
    let active8 = false;
    let active9 = false;
    let active10 = false;
    let active11 = false;
    let active12 = false;
    let active13 = false;
    let active14 = false;
    let active15 = false;
    let active16 = false;
    let active17 = false;
    let active18 = false;
    let active19 = false;
    let active20 = false;
    let active21 = false;
    let active22 = false;
    let active23 = false;
    let active24 = false;
    let active25 = false;
    let active26 = false;
    let active27 = false;

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

    // cone checkbox functions

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

    // cube checkbox functions

    function b1Check () {
        if (b1 == 0) {
            b1 = 1;
        } else {
            b1 = 0;
        }
        cubeNum = b1 + b2 + b3 + b4 + b5 + b6;
        totalNum = coneNum + cubeNum + h1 + h2 + h3 + h4 + h5 + h6 + h7 + h8 + h9;
    }

    function b2Check () {
        if (b2 == 0) {
            b2 = 1;
        } else {
            b2 = 0;
        }
        cubeNum = b1 + b2 + b3 + b4 + b5 + b6;
        totalNum = coneNum + cubeNum + h1 + h2 + h3 + h4 + h5 + h6 + h7 + h8 + h9;
    }

    function b3Check () {
        if (b3 == 0) {
            b3 = 1;
        } else {
            b3 = 0;
        }
        cubeNum = b1 + b2 + b3 + b4 + b5 + b6;
        totalNum = coneNum + cubeNum + h1 + h2 + h3 + h4 + h5 + h6 + h7 + h8 + h9;
    }

    function b4Check () {
        if (b4 == 0) {
            b4 = 1;
        } else {
            b4 = 0;
        }
        cubeNum = b1 + b2 + b3 + b4 + b5 + b6;
        totalNum = coneNum + cubeNum + h1 + h2 + h3 + h4 + h5 + h6 + h7 + h8 + h9;
    }

    function b5Check () {
        if (b5 == 0) {
            b5 = 1;
        } else {
            b5 = 0;
        }
        cubeNum = b1 + b2 + b3 + b4 + b5 + b6;
        totalNum = coneNum + cubeNum + h1 + h2 + h3 + h4 + h5 + h6 + h7 + h8 + h9;
    }

    function b6Check () {
        if (b6 == 0) {
            b6 = 1;
        } else {
            b6 = 0;
        }
        cubeNum = b1 + b2 + b3 + b4 + b5 + b6;
        totalNum = coneNum + cubeNum + h1 + h2 + h3 + h4 + h5 + h6 + h7 + h8 + h9;
    }

    // hybrid checkbox functions

    function h1Check () {
        if (h1 == 0) {
            h1 = 1;
        } else {
            h1 = 0;
        }
        totalNum = coneNum + cubeNum + h1 + h2 + h3 + h4 + h5 + h6 + h7 + h8 + h9;
    }

    function h2Check () {
        if (h2 == 0) {
            h2 = 1;
        } else {
            h2 = 0;
        }
        totalNum = coneNum + cubeNum + h1 + h2 + h3 + h4 + h5 + h6 + h7 + h8 + h9;
    }

    function h3Check () {
        if (h3 == 0) {
            h3 = 1;
        } else {
            h3 = 0;
        }
        totalNum = coneNum + cubeNum + h1 + h2 + h3 + h4 + h5 + h6 + h7 + h8 + h9;
    }

    function h4Check () {
        if (h4 == 0) {
            h4 = 1;
        } else {
            h4 = 0;
        }
        totalNum = coneNum + cubeNum + h1 + h2 + h3 + h4 + h5 + h6 + h7 + h8 + h9;
    }

    function h5Check () {
        if (h5 == 0) {
            h5 = 1;
        } else {
            h5 = 0;
        }
        totalNum = coneNum + cubeNum + h1 + h2 + h3 + h4 + h5 + h6 + h7 + h8 + h9;
    }

    function h6Check () {
        if (h6 == 0) {
            h6 = 1;
        } else {
            h6 = 0;
        }
        totalNum = coneNum + cubeNum + h1 + h2 + h3 + h4 + h5 + h6 + h7 + h8 + h9;
    }

    function h7Check () {
        if (h7 == 0) {
            h7 = 1;
        } else {
            h7 = 0;
        }
        totalNum = coneNum + cubeNum + h1 + h2 + h3 + h4 + h5 + h6 + h7 + h8 + h9;
    }

    function h8Check () {
        if (h8 == 0) {
            h8 = 1;
        } else {
            h8 = 0;
        }
        totalNum = coneNum + cubeNum + h1 + h2 + h3 + h4 + h5 + h6 + h7 + h8 + h9;
    }

    function h9Check () {
        if (h9 == 0) {
            h9 = 1;
        } else {
            h9 = 0;
        }
        totalNum = coneNum + cubeNum + h1 + h2 + h3 + h4 + h5 + h6 + h7 + h8 + h9;
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
                <button class="cone" on:click={c1Check} on:click={accCheck} on:click={prefCheck} class:active1={active1} on:click="{() => active1 = !active1}"></button>
            </div>
            <div class="purple">
                <button class="box" on:click={b1Check} on:click={accCheck} on:click={prefCheck} class:active2={active2} on:click="{() => active2 = !active2}"></button>
            </div>
            <div class="yellow">
                <button class="cone" on:click={c2Check} on:click={accCheck} on:click={prefCheck} class:active3={active3} on:click="{() => active3 = !active3}"></button>
            </div>
            <div class="yellow">
                <button class="cone" on:click={c3Check} on:click={accCheck} on:click={prefCheck} class:active4={active4} on:click="{() => active4 = !active4}"></button>
            </div>
            <div class="purple">
                <button class="box" on:click={b2Check} on:click={accCheck} on:click={prefCheck} class:active5={active5} on:click="{() => active5 = !active5}"></button>
            </div>
            <div class="yellow">
                <button class="cone" on:click={c4Check} on:click={accCheck} on:click={prefCheck} class:active6={active6} on:click="{() => active6 = !active6}"></button>
            </div>
            <div class="yellow">
                <button class="cone" on:click={c5Check} on:click={accCheck} on:click={prefCheck} class:active7={active7} on:click="{() => active7 = !active7}"></button>
            </div>
            <div class="purple">
                <button class="box" on:click={b3Check} on:click={accCheck} on:click={prefCheck} class:active8={active8} on:click="{() => active8 = !active8}"></button>
            </div>
            <div class="yellow">
                <button class="cone" on:click={c6Check} on:click={accCheck} on:click={prefCheck} class:active9={active9} on:click="{() => active9 = !active9}"></button>
            </div>

            <!-- Mid row of INGA -->
            <div class="yellow">
                <button class="cone" on:click={c7Check} on:click={accCheck} on:click={prefCheck} class:active10={active10} on:click="{() => active10 = !active10}"></button>
            </div>
            <div class="purple">
                <button class="box" on:click={b4Check} on:click={accCheck} on:click={prefCheck} class:active11={active11} on:click="{() => active11 = !active11}"></button>
            </div>
            <div class="yellow">
                <button class="cone" on:click={c8Check} on:click={accCheck} on:click={prefCheck} class:active12={active12} on:click="{() => active12 = !active12}"></button>
            </div>
            <div class="yellow">
                <button class="cone" on:click={c9Check} on:click={accCheck} on:click={prefCheck} class:active13={active13} on:click="{() => active13 = !active13}"></button>
            </div>
            <div class="purple">
                <button class="box" on:click={b5Check} on:click={accCheck} on:click={prefCheck} class:active14={active14} on:click="{() => active14 = !active14}"></button>
            </div>
            <div class="yellow">
                <button class="cone" on:click={c10Check} on:click={accCheck} on:click={prefCheck} class:active15={active15} on:click="{() => active15 = !active15}"></button>
            </div>
            <div class="yellow">
                <button class="cone" on:click={c11Check} on:click={accCheck} on:click={prefCheck} class:active16={active16} on:click="{() => active16 = !active16}"></button>
            </div>
            <div class="purple">
                <button class="box" on:click={b6Check} on:click={accCheck} on:click={prefCheck} class:active17={active17} on:click="{() => active17 = !active17}"></button>
            </div>
            <div class="yellow">
                <button class="cone" on:click={c12Check} on:click={accCheck} on:click={prefCheck} class:active18={active18} on:click="{() => active18 = !active18}"></button>
            </div>

            <!-- Low row of INGA -->
            <div class="dual">
                <button class="hybrid" on:click={h1Check} on:click={accCheck} on:click={prefCheck} class:active19={active19} on:click="{() => active19 = !active19}"></button>
            </div>
            <div class="dual">
                <button class="hybrid" on:click={h2Check} on:click={accCheck} on:click={prefCheck} class:active20={active20} on:click="{() => active20 = !active20}"></button>
            </div>
            <div class="dual">
                <button class="hybrid" on:click={h3Check} on:click={accCheck} on:click={prefCheck} class:active21={active21} on:click="{() => active21 = !active21}"></button>
            </div>
            <div class="dual">
                <button class="hybrid" on:click={h4Check} on:click={accCheck} on:click={prefCheck} class:active22={active22} on:click="{() => active22 = !active22}"></button>
            </div>
            <div class="dual">
                <button class="hybrid" on:click={h5Check} on:click={accCheck} on:click={prefCheck} class:active23={active23} on:click="{() => active23 = !active23}"></button>
            </div>
            <div class="dual">
                <button class="hybrid" on:click={h6Check} on:click={accCheck} on:click={prefCheck} class:active24={active24} on:click="{() => active24 = !active24}"></button>
            </div>
            <div class="dual">
                <button class="hybrid" on:click={h7Check} on:click={accCheck} on:click={prefCheck} class:active25={active25} on:click="{() => active25 = !active25}"></button>
            </div>
            <div class="dual">
                <button class="hybrid" on:click={h8Check} on:click={accCheck} on:click={prefCheck} class:active26={active26} on:click="{() => active26 = !active26}"></button>
            </div>
            <div class="dual">
                <button class="hybrid" on:click={h9Check} on:click={accCheck} on:click={prefCheck} class:active27={active27} on:click="{() => active27 = !active27}"></button>
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
                <button class="cone" on:click={c1Check} on:click={accCheck} on:click={prefCheck} class:active1={active1} on:click="{() => active1 = !active1}"></button>
            </div>
            <div class="purple">
                <button class="box" on:click={b1Check} on:click={accCheck} on:click={prefCheck} class:active2={active2} on:click="{() => active2 = !active2}"></button>
            </div>
            <div class="yellow">
                <button class="cone" on:click={c2Check} on:click={accCheck} on:click={prefCheck} class:active3={active3} on:click="{() => active3 = !active3}"></button>
            </div>
            <div class="yellow">
                <button class="cone" on:click={c3Check} on:click={accCheck} on:click={prefCheck} class:active4={active4} on:click="{() => active4 = !active4}"></button>
            </div>
            <div class="purple">
                <button class="box" on:click={b2Check} on:click={accCheck} on:click={prefCheck} class:active5={active5} on:click="{() => active5 = !active5}"></button>
            </div>
            <div class="yellow">
                <button class="cone" on:click={c4Check} on:click={accCheck} on:click={prefCheck} class:active6={active6} on:click="{() => active6 = !active6}"></button>
            </div>
            <div class="yellow">
                <button class="cone" on:click={c5Check} on:click={accCheck} on:click={prefCheck} class:active7={active7} on:click="{() => active7 = !active7}"></button>
            </div>
            <div class="purple">
                <button class="box" on:click={b3Check} on:click={accCheck} on:click={prefCheck} class:active8={active8} on:click="{() => active8 = !active8}"></button>
            </div>
            <div class="yellow">
                <button class="cone" on:click={c6Check} on:click={accCheck} on:click={prefCheck} class:active9={active9} on:click="{() => active9 = !active9}"></button>
            </div>

            <!-- Mid row of INGA -->
            <div class="yellow">
                <button class="cone" on:click={c7Check} on:click={accCheck} on:click={prefCheck} class:active10={active10} on:click="{() => active10 = !active10}"></button>
            </div>
            <div class="purple">
                <button class="box" on:click={b4Check} on:click={accCheck} on:click={prefCheck} class:active11={active11} on:click="{() => active11 = !active11}"></button>
            </div>
            <div class="yellow">
                <button class="cone" on:click={c8Check} on:click={accCheck} on:click={prefCheck} class:active12={active12} on:click="{() => active12 = !active12}"></button>
            </div>
            <div class="yellow">
                <button class="cone" on:click={c9Check} on:click={accCheck} on:click={prefCheck} class:active13={active13} on:click="{() => active13 = !active13}"></button>
            </div>
            <div class="purple">
                <button class="box" on:click={b5Check} on:click={accCheck} on:click={prefCheck} class:active14={active14} on:click="{() => active14 = !active14}"></button>
            </div>
            <div class="yellow">
                <button class="cone" on:click={c10Check} on:click={accCheck} on:click={prefCheck} class:active15={active15} on:click="{() => active15 = !active15}"></button>
            </div>
            <div class="yellow">
                <button class="cone" on:click={c11Check} on:click={accCheck} on:click={prefCheck} class:active16={active16} on:click="{() => active16 = !active16}"></button>
            </div>
            <div class="purple">
                <button class="box" on:click={b6Check} on:click={accCheck} on:click={prefCheck} class:active17={active17} on:click="{() => active17 = !active17}"></button>
            </div>
            <div class="yellow">
                <button class="cone" on:click={c12Check} on:click={accCheck} on:click={prefCheck} class:active18={active18} on:click="{() => active18 = !active18}"></button>
            </div>

            <!-- Low row of INGA -->
            <div class="dual">
                <button class="hybrid" on:click={h1Check} on:click={accCheck} on:click={prefCheck} class:active19={active19} on:click="{() => active19 = !active19}"></button>
            </div>
            <div class="dual">
                <button class="hybrid" on:click={h2Check} on:click={accCheck} on:click={prefCheck} class:active20={active20} on:click="{() => active20 = !active20}"></button>
            </div>
            <div class="dual">
                <button class="hybrid" on:click={h3Check} on:click={accCheck} on:click={prefCheck} class:active21={active21} on:click="{() => active21 = !active21}"></button>
            </div>
            <div class="dual">
                <button class="hybrid" on:click={h4Check} on:click={accCheck} on:click={prefCheck} class:active22={active22} on:click="{() => active22 = !active22}"></button>
            </div>
            <div class="dual">
                <button class="hybrid" on:click={h5Check} on:click={accCheck} on:click={prefCheck} class:active23={active23} on:click="{() => active23 = !active23}"></button>
            </div>
            <div class="dual">
                <button class="hybrid" on:click={h6Check} on:click={accCheck} on:click={prefCheck} class:active24={active24} on:click="{() => active24 = !active24}"></button>
            </div>
            <div class="dual">
                <button class="hybrid" on:click={h7Check} on:click={accCheck} on:click={prefCheck} class:active25={active25} on:click="{() => active25 = !active25}"></button>
            </div>
            <div class="dual">
                <button class="hybrid" on:click={h8Check} on:click={accCheck} on:click={prefCheck} class:active26={active26} on:click="{() => active26 = !active26}"></button>
            </div>
            <div class="dual">
                <button class="hybrid" on:click={h9Check} on:click={accCheck} on:click={prefCheck} class:active27={active27} on:click="{() => active27 = !active27}"></button>
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
            <p>Points Scored: </p>
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

    .active1,
    .active2,
    .active3,
    .active4,
    .active5,
    .active6,
    .active7,
    .active8,
    .active9,
    .active10,
    .active11,
    .active12,
    .active13,
    .active14,
    .active15,
    .active16,
    .active17,
    .active18,
    .active19,
    .active20,
    .active21,
    .active22,
    .active23,
    .active24,
    .active25,
    .active26,
    .active27 {
        background-color: #30ace2;
    }
</style>