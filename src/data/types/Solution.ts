import { Champion } from "./Champion"

export type Solution = {
    champions: Champion[],
    evaluation: number,
    traits: Record<number, number>,
}