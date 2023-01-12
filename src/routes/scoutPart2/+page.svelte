<script>
    let topNode = "";
    let midNode = "";
    let lowNode = "";
    let comStatus = "";
    let coneCount = "";
    let cubeCount = "";
</script>

<a href="/scoutPart1">Back</a>
<h1>Autonomous</h1>

<p>Top Nodes: {topNode}</p>
<input bind:value={topNode} />

<p>Middle Nodes: {midNode}</p>
<input bind:value={midNode} />

<p>Hybrid Nodes: {lowNode}</p>
<input bind:value={lowNode} />

<a href="/">To Teleop</a>