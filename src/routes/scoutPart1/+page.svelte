<!-- JS CODE -->
<script lang=ts>
    import { writable } from 'svelte/store';
    import { teamNum, roundNum, alliance, scouter } from "$lib/stores";
    import { goto } from '$app/navigation';

    let _teamNum: number;
    let _roundNum: number;
    let _alliance: string;
    let _scouter: string;

    function handleClick() {
        if (_teamNum != null && _roundNum != null && _alliance != null && _scouter != null) {
            teamNum.set(_teamNum);
            roundNum.set(_roundNum);
            alliance.set(_alliance);
            scouter.set(_scouter);
            goto("/scoutPart2");
        }
    }
</script>


<!-- HTML CODE -->

<!-- Section for flexbox purposes -->
<section>
    <div class="md:h h-screen flex flex-col">
        <div class="bg-blue-300 flex flex-col flex-grow">
            <!-- Back button just in case user accidentally presses scout button -->
            <a href="/" class="text-slate-600 text-3xl mt-4 ml-2">&#60Back</a>
            <h1 class="font-bold mr-auto text-7xl text-slate-800 mx-auto mt-8">Pregame</h1>
            <h1 class="font-bold mr-auto text-7xl text-slate-800 mx-auto">Info</h1>
                <div class="items-center justify-center flex flex-col flex-grow">
                    <!-- Input area for scouter name -->
                    <input class="text-lg shadow appearance-none border rounded mt-12 my-6 py-4 px-6 text-slate-400 text-center leading-tight focus:outline-none focus:shadow-outline" placeholder="Scouter" bind:value={_scouter}/>

                    <!-- Input area for team name -->
                    <input class="text-lg shadow appearance-none border rounded my-6 py-4 px-6 text-slate-400 text-center leading-tight focus:outline-none focus:shadow-outline" placeholder="Team Number" type="number" bind:value={_teamNum}/>

                    <!-- Input area for round # -->
                    <input class="text-lg shadow appearance-none border rounded my-6 py-4 px-6 text-slate-400 text-center leading-tight focus:outline-none focus:shadow-outline" placeholder="Round Number" type="number" bind:value={_roundNum}/>

                    <!-- Input area for alliance color -->
                    <input class= "text-lg shadow appearance-none border rounded my-6 py-4 px-6 text-slate-400 text-center leading-tight focus:outline-none focus:shadow-outline" placeholder="Alliance" bind:value={_alliance}/>
                </div>
                <a href="/scoutPart2" class="text-blue-900 text-4xl m-8 py-4 px-24 mx-auto bg-blue-400 rounded-lg" on:click={handleClick}>To Scoring</a>
        </div>
    </div>
</section>