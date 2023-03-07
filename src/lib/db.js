import Dexie from 'dexie';

export const db = new Dexie('myDatabase');
db.version(1).stores({
    scoutData: '++id, scouter, teamNum, roundNum, alliance, pointNum, links, pref, acc, fouls, tFouls'
})