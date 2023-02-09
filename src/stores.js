import { writable } from 'svelte/store';

export const routeStore = writable(
    [null, 0, 0, null, 0, 0, null, null, 0, 0, 0, 0, false, null, null]
);
// Scouter, Team #, Round #, Alliance, Points Scored, Accuracy, Pref Element, Pref Row, Fouls, Tech Fouls, Cones, Cubes, Left Comm, Charge Station (auto), Charge Station (endgame)