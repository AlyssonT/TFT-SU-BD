import { Champion } from "./Champion"

export type Solution = {
    champions: Champion[],
    evaluation: number,
    activeTraits: Record<number, number>,
}