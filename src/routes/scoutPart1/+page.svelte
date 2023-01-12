<script>
    let teamNum = "";
    let roundNum = "";
    let alliance = "";
</script>

<a href="/">Back</a>
<h1>Pregame info</h1>

<p>Team: {teamNum}</p>
<input bind:value={teamNum} />

<p>Round: {roundNum}</p>
<input bind:value={roundNum} />

<p>Alliance: {alliance}</p>
<input bind:value={alliance} />

<a href="/scoutPart2">To Autonomous</a>