export interface dataSet {
    id: number;
    name: string;
    game: string;
    status: string;
    version: string;
    type: string;
    region: string;
    mods: ("Essentials" | "Dynmap" | "GriefPrevention")[]; // Added mods property
}
