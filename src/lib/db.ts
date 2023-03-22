import Dexie, { type Table } from 'dexie';
export interface ScoutData {
  scouter: string;
  teamNum: string; 
  roundNum: number;
  alliance: string;
  pointNum: number;
  links: number;
  pref: number;
  acc: number;
  fouls: number;
  tFouls: number;
}

export class Database extends Dexie {
  scoutData!: Table<ScoutData>;
  
  constructor() {
    super('clidb'); 
    this.version(1).stores({
      scoutData: '++id, scouter, teamNum, roundNum, alliance, pointNum, links, pref, acc, fouls, tFouls'
    });
  }
}

export const db = new Database();