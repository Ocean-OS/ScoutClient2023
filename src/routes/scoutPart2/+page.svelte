<!-- JS CODE -->
<script lang=ts>

    import { teamNum, roundNum, alliance, scouter } from "$lib/stores";
    import { db } from "$lib/db";
    import { goto } from '$app/navigation';

    // Define variables
    let teamNumValue: number;
    let roundNumValue: number;
    let allianceValue: string;
    let scouterValue: string;
    let totalNum = 0;
    let acc = 0;
    let pref: string;
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
    let rowPref: string;

    let station = [0, 0];

    teamNum.subscribe(value => {
        teamNumValue = value;
    });

    roundNum.subscribe(value => {
        roundNumValue = value;
    });

    alliance.subscribe(value => {
        allianceValue = value;
    });

    scouter.subscribe(value => {
        scouterValue = value;
    });

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

    function makeFilled (a) {
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
    function stationTo (ind: number, val: number) {
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
        let data = {Scouter: scouterValue, Team: teamNumValue, Round: roundNumValue, Alliance: allianceValue, Points: pointNum, Links: links, Preferred_Side: pref, Accuracy: acc, Fouls: fouls, Technical_Fouls: tFouls};
        db.scoutData.add(data).then(() => { goto("/"); });
    }
</script>

<!-- HTML CODE -->
<!-- Section for flexbox purposes -->
<section class="w-full flex flex-col content-center bg-blue-300">
    <!-- Back button just in case user accidentally presses scout button -->
    <a href="/scoutPart1" class="text-slate-600 text-3xl mt-4 ml-2">&#60Back</a>

    <!-- Page Title -->
    <h1 class="font-bold mr-auto text-7xl text-slate-800 mx-auto mt-8">Scouting</h1>
    <h1 class="font-bold mr-auto text-7xl text-slate-800 mx-auto">Page</h1>

    <!-- Title for autonomous section -->
    <h2 class="mb-0 my-10 w-80% text-slate-800 text-center text-4xl">Autonomous</h2>

    <!-- Autonomous criteria grid -->
    <section class="w-100% flex flex-col content-center bg-blue-300 scoutingArea">
        <div class="mt-10 inline-flex text-xl">
            <p class="mx-auto">Cones: {coneNum}</p>
            <p class="mx-auto">Cubes: {cubeNum}</p>
            <p class="mx-auto">Total: {totalNum}</p>
        </div>

        <!-- Interactable node grid area -->
        <section class="content-center bg-blue-300 flex flex-row flex-wrap justify-between mb-5 h-40 w-full p-5">
            <div class="bg-yellow-400 flex flex-col items-center justify-center border border-black w-[11.11111111111111111%] h-1/3">
                <button class="cone w-[80%] h-[80%] rounded-3xl border border-black {arr[0][1] == 1 ? 'bg-yellow-300' : (arr[0][1] == 2 ? 'bg-purple-700' : 'bg-white')}"
                on:click={() => {swapCone(0)}}
                on:click={() => {makeAuto(0)}}
                on:click={makeFilled}></button>
            </div>
            <div class="purple bg-purple-500 flex flex-col items-center justify-center border border-black w-[11.11111111111111111%] h-1/3">
                <button class="box w-[80%] h-[80%] rounded-3xl border border-black {arr[1][1] == 1 ? 'bg-yellow-300' : (arr[1][1] == 2 ? 'bg-purple-700' : 'bg-white')}"
                on:click={() => {swapCube(1)}}
                on:click={() => {makeAuto(1)}}
                on:click={makeFilled}></button>
            </div>
            <div class="yellow bg-yellow-400 flex flex-col items-center justify-center border border-black w-[11.11111111111111111%] h-1/3">
                <button class="cone w-[80%] h-[80%] rounded-3xl  border border-black {arr[2][1] == 1 ? 'bg-yellow-300' : (arr[2][1] == 2 ? 'bg-purple-700' : 'bg-white')}"
                on:click={() => {swapCone(2)}}
                on:click={() => {makeAuto(2)}}
                on:click={makeFilled}></button>
            </div>
            <div class="yellow bg-yellow-400 flex flex-col items-center justify-center border border-black w-[11.11111111111111111%] h-1/3">
                <button class="cone w-[80%] h-[80%] rounded-3xl  border border-black {arr[3][1] == 1 ? 'bg-yellow-300' : (arr[3][1] == 2 ? 'bg-purple-700' : 'bg-white')}"
                on:click={() => {swapCone(3)}}
                on:click={() => {makeAuto(3)}}
                on:click={makeFilled}></button>
            </div>
            <div class="purple bg-purple-500 flex flex-col items-center justify-center  border border-black w-[11.11111111111111111%] h-1/3">
                <button class="box w-[80%] h-[80%] rounded-3xl border border-black {arr[4][1] == 1 ? 'bg-yellow-300' : (arr[4][1] == 2 ? 'bg-purple-700' : 'bg-white')}"
                on:click={() => {swapCube(4)}}
                on:click={() => {makeAuto(4)}}
                on:click={makeFilled}></button>
            </div>
            <div class="yellow bg-yellow-400 flex flex-col items-center justify-center border border-black w-[11.11111111111111111%] h-1/3">
                <button class="cone w-[80%] h-[80%] rounded-3xl  border border-black {arr[5][1] == 1 ? 'bg-yellow-300' : (arr[5][1] == 2 ? 'bg-purple-700' : 'bg-white')}"
                on:click={() => {swapCone(5)}}
                on:click={() => {makeAuto(5)}}
                on:click={makeFilled}></button>
            </div>
            <div class="yellow bg-yellow-400 flex flex-col items-center justify-center border border-black w-[11.11111111111111111%] h-1/3">
                <button class="cone w-[80%] h-[80%] rounded-3xl  border border-black {arr[6][1] == 1 ? 'bg-yellow-300' : (arr[6][1] == 2 ? 'bg-purple-700' : 'bg-white')}"
                on:click={() => {swapCone(6)}}
                on:click={() => {makeAuto(6)}}
                on:click={makeFilled}></button>
            </div>
            <div class="purple bg-purple-500 flex flex-col items-center justify-center  border border-black w-[11.11111111111111111%] h-1/3">
                <button class="box w-[80%] h-[80%] rounded-3xl border border-black {arr[7][1] == 1 ? 'bg-yellow-300' : (arr[7][1] == 2 ? 'bg-purple-700' : 'bg-white')}"
                on:click={() => {swapCube(7)}}
                on:click={() => {makeAuto(7)}}
                on:click={makeFilled}></button>
            </div>
            <div class="yellow bg-yellow-400 flex flex-col items-center justify-center border border-black w-[11.11111111111111111%] h-1/3">
                <button class="cone w-[80%] h-[80%] rounded-3xl  border border-black {arr[8][1] == 1 ? 'bg-yellow-300' : (arr[8][1] == 2 ? 'bg-purple-700' : 'bg-white')}"
                on:click={() => {swapCone(8)}}
                on:click={() => {makeAuto(8)}}
                on:click={makeFilled}></button>
            </div>

            <!-- Mid row of INGA flex flex-row flex-wrap justify-between align-center -->
            <div class="yellow bg-yellow-400 flex flex-col items-center justify-center border border-black w-[11.11111111111111111%] h-1/3">
                <button class="cone w-[80%] h-[80%] rounded-3xl  border border-black {arr[9][1] == 1 ? 'bg-yellow-300' : (arr[9][1] == 2 ? 'bg-purple-700' : 'bg-white')}"
                on:click={() => {swapCone(9)}}
                on:click={() => {makeAuto(9)}}
                on:click={makeFilled}></button>
            </div>
            <div class="purple bg-purple-500 flex flex-col items-center justify-center  border border-black w-[11.11111111111111111%] h-1/3">
                <button class="box w-[80%] h-[80%] rounded-3xl border border-black {arr[10][1] == 1 ? 'bg-yellow-300' : (arr[10][1] == 2 ? 'bg-purple-700' : 'bg-white')}"
                on:click={() => {swapCube(10)}}
                on:click={() => {makeAuto(10)}}
                on:click={makeFilled}></button>
            </div>
            <div class="yellow bg-yellow-400 flex flex-col items-center justify-center border border-black w-[11.11111111111111111%] h-1/3">
                <button class="cone w-[80%] h-[80%] rounded-3xl  border border-black {arr[11][1] == 1 ? 'bg-yellow-300' : (arr[11][1] == 2 ? 'bg-purple-700' : 'bg-white')}"
                on:click={() => {swapCone(11)}}
                on:click={() => {makeAuto(11)}}
                on:click={makeFilled}></button>
            </div>
            <div class="yellow bg-yellow-400 flex flex-col items-center justify-center border border-black w-[11.11111111111111111%] h-1/3">
                <button class="cone w-[80%] h-[80%] rounded-3xl  border border-black {arr[12][1] == 1 ? 'bg-yellow-300' : (arr[12][1] == 2 ? 'bg-purple-700' : 'bg-white')}"
                on:click={() => {swapCone(12)}}
                on:click={() => {makeAuto(12)}}
                on:click={makeFilled}></button>
            </div>
            <div class="purple bg-purple-500 flex flex-col items-center justify-center  border border-black w-[11.11111111111111111%] h-1/3">
                <button class="box w-[80%] h-[80%] rounded-3xl border border-black {arr[13][1] == 1 ? 'bg-yellow-300' : (arr[13][1] == 2 ? 'bg-purple-700' : 'bg-white')}"
                on:click={() => {swapCube(13)}}
                on:click={() => {makeAuto(13)}}
                on:click={makeFilled}></button>
            </div>
            <div class="yellow bg-yellow-400 flex flex-col items-center justify-center border border-black w-[11.11111111111111111%] h-1/3">
                <button class="cone w-[80%] h-[80%] rounded-3xl  border border-black {arr[14][1] == 1 ? 'bg-yellow-300' : (arr[14][1] == 2 ? 'bg-purple-700' : 'bg-white')}"
                on:click={() => {swapCone(14)}}
                on:click={() => {makeAuto(14)}}
                on:click={makeFilled}></button>
            </div>
            <div class="yellow bg-yellow-400 flex flex-col items-center justify-center border border-black w-[11.11111111111111111%] h-1/3">
                <button class="cone w-[80%] h-[80%] rounded-3xl  border border-black {arr[15][1] == 1 ? 'bg-yellow-300' : (arr[15][1] == 2 ? 'bg-purple-700' : 'bg-white')}"
                on:click={() => {swapCone(15)}}
                on:click={() => {makeAuto(15)}}
                on:click={makeFilled}></button>
            </div>
            <div class="purple bg-purple-500 flex flex-col items-center justify-center  border border-black w-[11.11111111111111111%] h-1/3">
                <button class="box w-[80%] h-[80%] rounded-3xl border border-black {arr[16][1] == 1 ? 'bg-yellow-300' : (arr[16][1] == 2 ? 'bg-purple-700' : 'bg-white')}"
                on:click={() => {swapCube(16)}}
                on:click={() => {makeAuto(16)}}
                on:click={makeFilled}></button>
            </div>
            <div class="yellow bg-yellow-400 flex flex-col items-center justify-center border border-black w-[11.11111111111111111%] h-1/3">
                <button class="cone w-[80%] h-[80%] rounded-3xl  border border-black {arr[17][1] == 1 ? 'bg-yellow-300' : (arr[17][1] == 2 ? 'bg-purple-700' : 'bg-white')}"
                on:click={() => {swapCone(17)}}
                on:click={() => {makeAuto(17)}}
                on:click={makeFilled}></button>
            </div>


            <div class="dual bg-slantBack flex flex-col items-center justify-center border-black border w-[11.11111111111111111%] h-1/3">
                <button class="hybrid w-[80%] h-[80%] rounded-3xl border border-black {arr[18][1] == 1 ? 'bg-yellow-300' : (arr[18][1] == 2 ? 'bg-purple-700' : 'bg-white')}"
                on:click={() => {swapHybrid(18)}}
                on:click={() => {makeAuto(18)}}
                on:click={makeFilled}></button>
            </div>
            <div class="dual bg-slantBack flex flex-col items-center justify-center border-black border w-[11.11111111111111111%] h-1/3">
                <button class="hybrid w-[80%] h-[80%] rounded-3xl border border-black {arr[19][1] == 1 ? 'bg-yellow-300' : (arr[19][1] == 2 ? 'bg-purple-700' : 'bg-white')}"
                on:click={() => {swapHybrid(19)}}
                on:click={() => {makeAuto(19)}}
                on:click={makeFilled}></button>
            </div>
            <div class="dual bg-slantBack flex flex-col items-center justify-center border-black border w-[11.11111111111111111%] h-1/3">
                <button class="hybrid w-[80%] h-[80%] rounded-3xl border border-black {arr[20][1] == 1 ? 'bg-yellow-300' : (arr[20][1] == 2 ? 'bg-purple-700' : 'bg-white')}"
                on:click={() => {swapHybrid(20)}}
                on:click={() => {makeAuto(20)}}
                on:click={makeFilled}></button>
            </div>
            <div class="dual bg-slantBack flex flex-col items-center justify-center border-black border w-[11.11111111111111111%] h-1/3">
                <button class="hybrid w-[80%] h-[80%] rounded-3xl border border-black {arr[21][1] == 1 ? 'bg-yellow-300' : (arr[21][1] == 2 ? 'bg-purple-700' : 'bg-white')}"
                on:click={() => {swapHybrid(21)}}
                on:click={() => {makeAuto(21)}}
                on:click={makeFilled}></button>
            </div>
            <div class="dual bg-slantBack flex flex-col items-center justify-center border-black border w-[11.11111111111111111%] h-1/3">
                <button class="hybrid w-[80%] h-[80%] rounded-3xl border border-black {arr[22][1] == 1 ? 'bg-yellow-300' : (arr[22][1] == 2 ? 'bg-purple-700' : 'bg-white')}"
                on:click={() => {swapHybrid(22)}}
                on:click={() => {makeAuto(22)}}
                on:click={makeFilled}></button>
            </div>
            <div class="dual bg-slantBack flex flex-col items-center justify-center border-black border w-[11.11111111111111111%] h-1/3">
                <button class="hybrid w-[80%] h-[80%] rounded-3xl border border-black {arr[23][1] == 1 ? 'bg-yellow-300' : (arr[23][1] == 2 ? 'bg-purple-700' : 'bg-white')}"
                on:click={() => {swapHybrid(23)}}
                on:click={() => {makeAuto(23)}}
                on:click={makeFilled}></button>
            </div>
            <div class="dual bg-slantBack flex flex-col items-center justify-center border-black border w-[11.11111111111111111%] h-1/3">
                <button class="hybrid w-[80%] h-[80%] rounded-3xl border border-black {arr[24][1] == 1 ? 'bg-yellow-300' : (arr[24][1] == 2 ? 'bg-purple-700' : 'bg-white')}"
                on:click={() => {swapHybrid(24)}}
                on:click={() => {makeAuto(24)}}
                on:click={makeFilled}></button>
            </div>
            <div class="dual bg-slantBack flex flex-col items-center justify-center border-black border w-[11.11111111111111111%] h-1/3">
                <button class="hybrid w-[80%] h-[80%] rounded-3xl border border-black {arr[25][1] == 1 ? 'bg-yellow-300' : (arr[25][1] == 2 ? 'bg-purple-700' : 'bg-white')}"
                on:click={() => {swapHybrid(25)}}
                on:click={() => {makeAuto(25)}}
                on:click={makeFilled}></button>
            </div>
            <div class="dual bg-slantBack flex flex-col items-center justify-center border-black border w-[11.11111111111111111%] h-1/3">
                <button class="hybrid w-[80%] h-[80%] rounded-3xl border border-black {arr[26][1] == 1 ? 'bg-yellow-300' : (arr[26][1] == 2 ? 'bg-purple-700' : 'bg-white')}"
                on:click={() => {swapHybrid(26)}}
                on:click={() => {makeAuto(26)}}
                on:click={makeFilled}></button>
            </div>
        </section>

        <!-- Input area for attempted nodes -->
        <section class="w-100% flex flex-col content-center bg-blue-300 inputArea mb-5">
            <div class="inline-flex mx-auto items-center justify-center">
                <p class="text-xl">Attempted: {att}</p>
                <button class="Incr mx-3 text-xl bg-blue-400 rounded px-3 py-1 flex items-center justify-center text-slate-100" on:click={attIncr} on:click={accCheck}>+</button>
                <button class="Decr mx-3 text-xl bg-blue-400 rounded px-3 py-1 flex items-center justify-center text-slate-100" on:click={attDecr} on:click={accCheck}>-</button>
            </div>
        </section>
        
        <!-- Input area for tech fouls -->
        <section class="w-100% flex flex-col content-center bg-blue-300 inputArea mb-5">
            <div class="inline-flex mx-auto items-center justify-center">
                <p class="text-xl">Tech Fouls: {tFouls}</p>
                <button class="Incr mx-3 text-xl bg-blue-400 rounded px-3 py-1 flex items-center justify-center text-slate-100" on:click={tFoulsIncr}>+</button>
                <button class="Decr mx-3 text-xl bg-blue-400 rounded px-3 py-1 flex items-center justify-center text-slate-100" on:click={tFoulsDecr}>-</button>
            </div>
        </section>
        
        <!-- Input area for fouls -->
        <section class="w-100% flex flex-col content-center bg-blue-300 inputArea mb-5">
            <div class="inline-flex mx-auto items-center justify-center">
                <p class="text-xl">Fouls: {fouls}</p>
                <button class="Incr mx-3 text-xl bg-blue-400 rounded px-3 py-1 flex items-center justify-center text-slate-100" on:click={foulsIncr}>+</button>
                <button class="Decr mx-3 text-xl bg-blue-400 rounded px-3 py-1 flex items-center justify-center text-slate-100" on:click={foulsDecr}>-</button>
            </div>
        </section>

        <section class="w-100% flex flex-col content-center bg-blue-300 inputArea mb-5">
            <div class="inline-flex mx-auto items-center justify-center">
                <p class="text-xl">Left Community?</p>
                    <button class="mx-3 text-xl rounded px-3 py-1 flex items-center justify-center text-slate-100 {!commBool ? 'bg-red-400' : 'bg-blue-400'}"
                    on:click={commToFalse}
                    on:click={makeFilled}>No</button>
                    <button class="mx-3 text-xl rounded px-3 py-1 flex items-center justify-center text-slate-100 {commBool ? 'bg-red-400' : 'bg-blue-400'}"
                    on:click={commToTrue}
                    on:click={makeFilled}>Yes</button>
            </div>
        </section>
        
        <!-- Input area for charge station -->
        <section class="w-100% flex flex-col content-center bg-blue-300 inputArea mb-5">
            <div class="inline-flex mx-auto items-center justify-center">
                <p class="text-xl">Charge Station:</p>
                <button class="mx-1 text-xl rounded px-2 py-1 flex items-center justify-center text-slate-100 {station[0] == 0 ? 'bg-red-400' : 'bg-blue-400'}"
                on:click={() => {stationTo(0, 0)}}
                class:active={station[0] == 0}
                on:click={makeFilled}>Off</button>
                <button class="mx-1 text-xl rounded px-2 py-1 flex items-center justify-center text-slate-100 {station[0] == 1 ? 'bg-red-400' : 'bg-blue-400'}"
                on:click={() => {stationTo(0, 1)}}
                class:active={station[0] == 1}
                on:click={makeFilled}>Docked</button>
                <button class="mx-1 text-xl rounded px-2 py-1 flex items-center justify-center text-slate-100 {station[0] == 2 ? 'bg-red-400' : 'bg-blue-400'}"
                on:click={() => {stationTo(0, 2)}}
                class:active={station[0] == 2}
                on:click={makeFilled}>Engaged</button>
            </div>
        </section>
    </section>

    <!-- Title for teleop section -->
    <h2 class="mb-0 my-10 w-80% text-slate-800 text-center text-4xl">Teleop</h2>

    <!-- Teleop criteria grid -->
    <section class="w-100% flex flex-col content-center bg-blue-300 scoutingArea">
        <div class="mt-10 inline-flex text-xl">
            <p class="mx-auto">Cones: {coneNum}</p>
            <p class="mx-auto">Cubes: {cubeNum}</p>
            <p class="mx-auto">Total: {totalNum}</p>
        </div>

        <!-- Interactable node grid area -->
        <!-- Outline for INGA flex flex-row flex-wrap justify-between align-center -->
        <section class="content-center bg-blue-300 flex flex-row flex-wrap justify-between mb-5 h-40 w-full p-5">
            <!-- Top row of INGA flex flex-row flex-wrap justify-between align-center -->
            <div class="yellow bg-yellow-400 flex flex-col items-center justify-center border border-black w-[11.11111111111111111%] h-1/3">
                <button class="cone w-[80%] h-[80%] rounded-3xl  border border-black {arr[0][1] == 1 ? 'bg-yellow-300' : (arr[0][1] == 2 ? 'bg-purple-700' : 'bg-white')}"
                on:click={() => {swapCone(0)}}
                on:click={() => {makeTeleop(0)}}
                on:click={makeFilled}></button>
            </div>
            <div class="purple bg-purple-500 flex flex-col items-center justify-center  border border-black w-[11.11111111111111111%] h-1/3">
                <button class="box w-[80%] h-[80%] rounded-3xl border border-black {arr[1][1] == 1 ? 'bg-yellow-300' : (arr[1][1] == 2 ? 'bg-purple-700' : 'bg-white')}"
                on:click={() => {swapCube(1)}}
                on:click={() => {makeTeleop(1)}}
                on:click={makeFilled}></button>
            </div>
            <div class="yellow bg-yellow-400 flex flex-col items-center justify-center border border-black w-[11.11111111111111111%] h-1/3">
                <button class="cone w-[80%] h-[80%] rounded-3xl  border border-black {arr[2][1] == 1 ? 'bg-yellow-300' : (arr[2][1] == 2 ? 'bg-purple-700' : 'bg-white')}"
                on:click={() => {swapCone(2)}}
                on:click={() => {makeTeleop(2)}}
                on:click={makeFilled}></button>
            </div>
            <div class="yellow bg-yellow-400 flex flex-col items-center justify-center border border-black w-[11.11111111111111111%] h-1/3">
                <button class="cone w-[80%] h-[80%] rounded-3xl  border border-black {arr[3][1] == 1 ? 'bg-yellow-300' : (arr[3][1] == 2 ? 'bg-purple-700' : 'bg-white')}"
                on:click={() => {swapCone(3)}}
                on:click={() => {makeTeleop(3)}}
                on:click={makeFilled}></button>
            </div>
            <div class="purple bg-purple-500 flex flex-col items-center justify-center  border border-black w-[11.11111111111111111%] h-1/3">
                <button class="box w-[80%] h-[80%] rounded-3xl border border-black {arr[4][1] == 1 ? 'bg-yellow-300' : (arr[4][1] == 2 ? 'bg-purple-700' : 'bg-white')}"
                on:click={() => {swapCube(4)}}
                on:click={() => {makeTeleop(4)}}
                on:click={makeFilled}></button>
            </div>
            <div class="yellow bg-yellow-400 flex flex-col items-center justify-center border border-black w-[11.11111111111111111%] h-1/3">
                <button class="cone w-[80%] h-[80%] rounded-3xl  border border-black {arr[5][1] == 1 ? 'bg-yellow-300' : (arr[5][1] == 2 ? 'bg-purple-700' : 'bg-white')}"
                on:click={() => {swapCone(5)}}
                on:click={() => {makeTeleop(5)}}
                on:click={makeFilled}></button>
            </div>
            <div class="yellow bg-yellow-400 flex flex-col items-center justify-center border border-black w-[11.11111111111111111%] h-1/3">
                <button class="cone w-[80%] h-[80%] rounded-3xl  border border-black {arr[6][1] == 1 ? 'bg-yellow-300' : (arr[6][1] == 2 ? 'bg-purple-700' : 'bg-white')}"
                on:click={() => {swapCone(6)}}
                on:click={() => {makeTeleop(6)}}
                on:click={makeFilled}></button>
            </div>
            <div class="purple bg-purple-500 flex flex-col items-center justify-center  border border-black w-[11.11111111111111111%] h-1/3">
                <button class="box w-[80%] h-[80%] rounded-3xl border border-black {arr[7][1] == 1 ? 'bg-yellow-300' : (arr[7][1] == 2 ? 'bg-purple-700' : 'bg-white')}"
                on:click={() => {swapCube(7)}}
                on:click={() => {makeTeleop(7)}}
                on:click={makeFilled}></button>
            </div>
            <div class="yellow bg-yellow-400 flex flex-col items-center justify-center border border-black w-[11.11111111111111111%] h-1/3">
                <button class="cone w-[80%] h-[80%] rounded-3xl  border border-black {arr[8][1] == 1 ? 'bg-yellow-300' : (arr[8][1] == 2 ? 'bg-purple-700' : 'bg-white')}"
                on:click={() => {swapCone(8)}}
                on:click={() => {makeTeleop(8)}}
                on:click={makeFilled}></button>
            </div>

            <!-- Mid row of INGA flex flex-row flex-wrap justify-between align-center -->
            <div class="yellow bg-yellow-400 flex flex-col items-center justify-center border border-black w-[11.11111111111111111%] h-1/3">
                <button class="cone w-[80%] h-[80%] rounded-3xl  border border-black {arr[9][1] == 1 ? 'bg-yellow-300' : (arr[9][1] == 2 ? 'bg-purple-700' : 'bg-white')}"
                on:click={() => {swapCone(9)}}
                on:click={() => {makeTeleop(9)}}
                on:click={makeFilled}></button>
            </div>
            <div class="purple bg-purple-500 flex flex-col items-center justify-center  border border-black w-[11.11111111111111111%] h-1/3">
                <button class="box w-[80%] h-[80%] rounded-3xl border border-black {arr[10][1] == 1 ? 'bg-yellow-300' : (arr[10][1] == 2 ? 'bg-purple-700' : 'bg-white')}"
                on:click={() => {swapCube(10)}}
                on:click={() => {makeTeleop(10)}}
                on:click={makeFilled}></button>
            </div>
            <div class="yellow bg-yellow-400 flex flex-col items-center justify-center border border-black w-[11.11111111111111111%] h-1/3">
                <button class="cone w-[80%] h-[80%] rounded-3xl  border border-black {arr[11][1] == 1 ? 'bg-yellow-300' : (arr[11][1] == 2 ? 'bg-purple-700' : 'bg-white')}"
                on:click={() => {swapCone(11)}}
                on:click={() => {makeTeleop(11)}}
                on:click={makeFilled}></button>
            </div>
            <div class="yellow bg-yellow-400 flex flex-col items-center justify-center border border-black w-[11.11111111111111111%] h-1/3">
                <button class="cone w-[80%] h-[80%] rounded-3xl  border border-black {arr[12][1] == 1 ? 'bg-yellow-300' : (arr[12][1] == 2 ? 'bg-purple-700' : 'bg-white')}"
                on:click={() => {swapCone(12)}}
                on:click={() => {makeTeleop(12)}}
                on:click={makeFilled}></button>
            </div>
            <div class="purple bg-purple-500 flex flex-col items-center justify-center  border border-black w-[11.11111111111111111%] h-1/3">
                <button class="box w-[80%] h-[80%] rounded-3xl border border-black {arr[13][1] == 1 ? 'bg-yellow-300' : (arr[13][1] == 2 ? 'bg-purple-700' : 'bg-white')}"
                on:click={() => {swapCube(13)}}
                on:click={() => {makeTeleop(13)}}
                on:click={makeFilled}></button>
            </div>
            <div class="yellow bg-yellow-400 flex flex-col items-center justify-center border border-black w-[11.11111111111111111%] h-1/3">
                <button class="cone w-[80%] h-[80%] rounded-3xl  border border-black {arr[14][1] == 1 ? 'bg-yellow-300' : (arr[14][1] == 2 ? 'bg-purple-700' : 'bg-white')}"
                on:click={() => {swapCone(14)}}
                on:click={() => {makeTeleop(14)}}
                on:click={makeFilled}></button>
            </div>
            <div class="yellow bg-yellow-400 flex flex-col items-center justify-center border border-black w-[11.11111111111111111%] h-1/3">
                <button class="cone w-[80%] h-[80%] rounded-3xl  border border-black {arr[15][1] == 1 ? 'bg-yellow-300' : (arr[15][1] == 2 ? 'bg-purple-700' : 'bg-white')}"
                on:click={() => {swapCone(15)}}
                on:click={() => {makeTeleop(15)}}
                on:click={makeFilled}></button>
            </div>
            <div class="purple bg-purple-500 flex flex-col items-center justify-center  border border-black w-[11.11111111111111111%] h-1/3">
                <button class="box w-[80%] h-[80%] rounded-3xl border border-black {arr[16][1] == 1 ? 'bg-yellow-300' : (arr[16][1] == 2 ? 'bg-purple-700' : 'bg-white')}"
                on:click={() => {swapCube(16)}}
                on:click={() => {makeTeleop(16)}}
                on:click={makeFilled}></button>
            </div>
            <div class="yellow bg-yellow-400 flex flex-col items-center justify-center border border-black w-[11.11111111111111111%] h-1/3">
                <button class="cone w-[80%] h-[80%] rounded-3xl  border border-black {arr[17][1] == 1 ? 'bg-yellow-300' : (arr[17][1] == 2 ? 'bg-purple-700' : 'bg-white')}"
                on:click={() => {swapCone(17)}}
                on:click={() => {makeTeleop(17)}}
                on:click={makeFilled}></button>
            </div>

            <!-- Low row of INGA flex flex-row flex-wrap justify-between align-center -->
            <div class="dual bg-slantBack flex flex-col items-center justify-center border-black border w-[11.11111111111111111%] h-1/3">
                <button class="hybrid w-[80%] h-[80%] rounded-3xl border border-black {arr[18][1] == 1 ? 'bg-yellow-300' : (arr[18][1] == 2 ? 'bg-purple-700' : 'bg-white')}"
                on:click={() => {swapHybrid(18)}}
                on:click={() => {makeTeleop(18)}}
                on:click={makeFilled}></button>
            </div>
            <div class="dual bg-slantBack flex flex-col items-center justify-center border-black border w-[11.11111111111111111%] h-1/3">
                <button class="hybrid w-[80%] h-[80%] rounded-3xl border border-black {arr[19][1] == 1 ? 'bg-yellow-300' : (arr[19][1] == 2 ? 'bg-purple-700' : 'bg-white')}"
                on:click={() => {swapHybrid(19)}}
                on:click={() => {makeTeleop(19)}}
                on:click={makeFilled}></button>
            </div>
            <div class="dual bg-slantBack flex flex-col items-center justify-center border-black border w-[11.11111111111111111%] h-1/3">
                <button class="hybrid w-[80%] h-[80%] rounded-3xl border border-black {arr[20][1] == 1 ? 'bg-yellow-300' : (arr[20][1] == 2 ? 'bg-purple-700' : 'bg-white')}"
                on:click={() => {swapHybrid(20)}}
                on:click={() => {makeTeleop(20)}}
                on:click={makeFilled}></button>
            </div>
            <div class="dual bg-slantBack flex flex-col items-center justify-center border-black border w-[11.11111111111111111%] h-1/3">
                <button class="hybrid w-[80%] h-[80%] rounded-3xl border border-black {arr[21][1] == 1 ? 'bg-yellow-300' : (arr[21][1] == 2 ? 'bg-purple-700' : 'bg-white')}"
                on:click={() => {swapHybrid(21)}}
                on:click={() => {makeTeleop(21)}}
                on:click={makeFilled}></button>
            </div>
            <div class="dual bg-slantBack flex flex-col items-center justify-center border-black border w-[11.11111111111111111%] h-1/3">
                <button class="hybrid w-[80%] h-[80%] rounded-3xl border border-black {arr[22][1] == 1 ? 'bg-yellow-300' : (arr[22][1] == 2 ? 'bg-purple-700' : 'bg-white')}"
                on:click={() => {swapHybrid(22)}}
                on:click={() => {makeTeleop(22)}}
                on:click={makeFilled}></button>
            </div>
            <div class="dual bg-slantBack flex flex-col items-center justify-center border-black border w-[11.11111111111111111%] h-1/3">
                <button class="hybrid w-[80%] h-[80%] rounded-3xl border border-black {arr[23][1] == 1 ? 'bg-yellow-300' : (arr[23][1] == 2 ? 'bg-purple-700' : 'bg-white')}"
                on:click={() => {swapHybrid(23)}}
                on:click={() => {makeTeleop(23)}}
                on:click={makeFilled}></button>
            </div>
            <div class="dual bg-slantBack flex flex-col items-center justify-center border-black border w-[11.11111111111111111%] h-1/3">
                <button class="hybrid w-[80%] h-[80%] rounded-3xl border border-black {arr[24][1] == 1 ? 'bg-yellow-300' : (arr[24][1] == 2 ? 'bg-purple-700' : 'bg-white')}"
                on:click={() => {swapHybrid(24)}}
                on:click={() => {makeTeleop(24)}}
                on:click={makeFilled}></button>
            </div>
            <div class="dual bg-slantBack flex flex-col items-center justify-center border-black border w-[11.11111111111111111%] h-1/3">
                <button class="hybrid w-[80%] h-[80%] rounded-3xl border border-black {arr[25][1] == 1 ? 'bg-yellow-300' : (arr[25][1] == 2 ? 'bg-purple-700' : 'bg-white')}"
                on:click={() => {swapHybrid(25)}}
                on:click={() => {makeTeleop(25)}}
                on:click={makeFilled}></button>
            </div>
            <div class="dual bg-slantBack flex flex-col items-center justify-center border-black border w-[11.11111111111111111%] h-1/3">
                <button class="hybrid w-[80%] h-[80%] rounded-3xl border border-black {arr[26][1] == 1 ? 'bg-yellow-300' : (arr[26][1] == 2 ? 'bg-purple-700' : 'bg-white')}"
                on:click={() => {swapHybrid(26)}}
                on:click={() => {makeTeleop(26)}}
                on:click={makeFilled}></button>
            </div>
        </section>

        <!-- Input area for attempted nodes -->
        <section class="w-100% flex flex-col content-center bg-blue-300 inputArea mb-5">
            <div class="inline-flex mx-auto items-center justify-center">
                <p class="text-xl">Attempted: {att}</p>
                <button class="Incr mx-3 text-xl bg-blue-400 rounded px-3 py-1 flex items-center justify-center text-slate-100" on:click={attIncr} on:click={accCheck}>+</button>
                <button class="Decr mx-3 text-xl bg-blue-400 rounded px-3 py-1 flex items-center justify-center text-slate-100" on:click={attDecr} on:click={accCheck}>-</button>
            </div>
        </section>

        <!-- Input area for links completed -->
        <section class="w-100% flex flex-col content-center bg-blue-300 inputArea mb-5">
            <div class="inline-flex mx-auto items-center justify-center">
                <p class="text-xl">Links Completed: {links}</p>
                <button class="Incr mx-3 text-xl bg-blue-400 rounded px-3 py-1 flex items-center justify-center text-slate-100" on:click={lIncr} on:click={accCheck}>+</button>
                <button class="Decr mx-3 text-xl bg-blue-400 rounded px-3 py-1 flex items-center justify-center text-slate-100" on:click={lDecr} on:click={accCheck}>-</button>
            </div>
        </section>
        
        <!-- Input area for tech fouls -->
        <section class="w-100% flex flex-col content-center bg-blue-300 inputArea mb-5">
            <div class="inline-flex mx-auto items-center justify-center">
                <p class="text-xl">Tech Fouls: {tFouls}</p>
                <button class="Incr mx-3 text-xl bg-blue-400 rounded px-3 py-1 flex items-center justify-center text-slate-100" on:click={tFoulsIncr}>+</button>
                <button class="Decr mx-3 text-xl bg-blue-400 rounded px-3 py-1 flex items-center justify-center text-slate-100" on:click={tFoulsDecr}>-</button>
            </div>
        </section>
        
        <!-- Input area for fouls -->
        <section class="w-100% flex flex-col content-center bg-blue-300 inputArea mb-5">
            <div class="inline-flex mx-auto items-center justify-center">
                <p class="text-xl">Fouls: {fouls}</p>
                <button class="Incr mx-3 text-xl bg-blue-400 rounded px-3 py-1 flex items-center justify-center text-slate-100" on:click={foulsIncr}>+</button>
                <button class="Decr mx-3 text-xl bg-blue-400 rounded px-3 py-1 flex items-center justify-center text-slate-100" on:click={foulsDecr}>-</button>
            </div>
        </section>
    </section>

    <!-- Title for endgame section -->
    <h2 class="my-10 w-80% text-slate-800 text-center text-4xl">Endgame</h2>

    <!-- Endgame criteria grid -->
    <section class="w-100% flex flex-col content-center bg-blue-300 scoutingArea">
        
        <!-- Input area for ending position -->
        <section class="w-100% flex flex-col content-center bg-blue-300 inputArea mb-5">
            <div class="inline-flex mx-auto items-center justify-center">
                <p class="text-sm">Ending Position:</p>
                <button class="mx-1 text-sm rounded px-2 py-1 flex items-center justify-center text-slate-100 {station[1] == 0 ? 'bg-red-400' : 'bg-blue-400'}"
                on:click={() => {stationTo(1, 0)}}
                class:active={station[1] == 0}
                on:click={makeFilled}>Out</button>
                <button class="mx-1 text-sm rounded px-2 py-1 flex items-center justify-center text-slate-100 {station[1] == 1 ? 'bg-red-400' : 'bg-blue-400'}"
                on:click={() => {stationTo(1, 1)}}
                class:active={station[1] == 1}
                on:click={makeFilled}>Community</button>
                <button class="mx-1 text-sm rounded px-2 py-1 flex items-center justify-center text-slate-100 {station[1] == 2 ? 'bg-red-400' : 'bg-blue-400'}"
                on:click={() => {stationTo(1, 2)}}
                class:active={station[1] == 2}
                on:click={makeFilled}>Docked</button>
                <button class="mx-1 text-sm rounded px-2 py-1 flex items-center justify-center text-slate-100 {station[1] == 3 ? 'bg-red-400' : 'bg-blue-400'}"
                on:click={() => {stationTo(1, 3)}}
                class:active={station[1] == 3}
                on:click={makeFilled}>Engaged</button>
            </div>
        </section>
    </section>

    <!-- Title for final data section -->
    <h2 class="my-10 w-80% text-slate-800 text-center text-4xl">Other Data</h2>

    <!-- Final criteria grid -->
    <section class="w-100% flex flex-col content-center bg-blue-300 scoutingArea">
        
        <section class="w-100% flex flex-col content-center bg-blue-300 inputArea mx-auto mb-2">
            <p class="text-xl">Accuracy: {acc}%</p>
        </section>
        <section class="w-100% flex flex-col content-center bg-blue-300 inputArea mx-auto mb-2">
            <p class="text-xl">Preferred Element: {pref}</p>
        </section>
        <section class="w-100% flex flex-col content-center bg-blue-300 inputArea mx-auto mb-2">
            <p class="text-xl">Points Scored: {pointNum}</p>
        </section>
        <section class="w-100% flex flex-col content-center bg-blue-300 inputArea mx-auto mb-2">
            <p class="text-xl">Preferred Row: {rowPref}</p>
        </section>

    </section>

    <!-- Link to upload page -->
    <div class="text-blue-900 text-4xl justify-center flex flex-col flex-grow items-center my-5">
        <button class="bg-blue-400 rounded-lg px-32 p-4 m-2" on:click={handleClick}>Save</button>
    </div>
</section>