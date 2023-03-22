<!-- JS CODE -->
<script>
    import Papa from "papaparse";
    import { db } from "$lib/db";

    function saveData() {
        db.scoutData.toArray().then((data) => {
        let csv = Papa.unparse(data);

        // Create a download link for the CSV file
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.setAttribute("href", url);
        link.setAttribute("download", "output.csv");
        link.style.display = "none";
        document.body.appendChild(link);

        // Download the CSV file
        link.click();

        // Clean up by removing the download link
        document.body.removeChild(link);
        URL.revokeObjectURL(url);

        // Clear database
        db.scoutData.clear();
})
    }
</script>

<!-- HTML CODE -->

<!-- Section for flexbox purposes -->
<section data-sveltekit-preload-data="tap">
    <!-- Title of App -->
    <div class="md:h h-screen flex flex-col">
        <div class="bg-blue-300 flex flex-col flex-grow items-center">
            <div class="text-slate-800 text-center">
                <h1 class="font-bold mr-auto text-7xl text-slate-800 mx-auto mt-20">Stable<br>Scout</h1>
                <h1 class="animate-bounce font-bold mr-auto text-7xl text-slate-800 mx-auto mt-4">2.0</h1>
            </div>

            <!-- Links for starting scouting and uploading data -->
            <div class="text-blue-900 text-4xl justify-center flex flex-col flex-grow items-center mb-52">
                <a class="bg-blue-400 rounded-lg px-32 p-4 m-2" href="/scoutPart1">Scout</a>
                <button class="bg-blue-400 rounded-lg px-24 p-4" on:click={saveData}>Save Data</button>
            </div>
        </div>
    </div>
</section>