<!-- JS CODE -->
<script>
    import Papa from "papaparse";
    import { db } from "$lib/db";

    function sendData() {
        db.scoutData.toArray().then((data) => {
        let csv = Papa.unparse(data);
        var webhookURL = "insert Discord Webhook URL here";
        // Create a blob for the CSV file
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        try{
            var scouter = Papa.parse(csv).data[1][0]; //I'm not fully sure if this will work
        }catch(err){
            var scouter = undefined;
        }
        if(scouter == ""){
            scouter = undefined;
        }
        var fd = new FormData(); //Build message for webhook
        if(scouter !== undefined){ 
            fd.append("content", `${scouter} posted some new data: `);
        }
        fd.append("file", blob, "output.csv"); //Attach file as blob to message
        fetch(webhookURL, {
            method: 'POST',
            body: fd
        }).then(response => console.log(response))
        .catch(error =>{ 
            //If an error occurs, file will download instead
            console.error(error);
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.setAttribute("href", url);
            link.setAttribute("download", "output.csv");
            link.style.display = "none";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        });

        // Clear database
        db.scoutData.clear();
})
    }
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
                <button class="bg-blue-400 rounded-lg px-24 p-4" on:click={sendData}>Send Data</button>
            </div>
        </div>
    </div>
</section>
