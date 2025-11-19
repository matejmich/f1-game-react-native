import { create } from "zustand";
import { persist } from "zustand/middleware";

type ScoringStore = {
    scores: Record<string, number>; // gameId to rating mapping
    setScores: (gameId: string, rating: number) => void;
}
// scoring ranges from 0 (worst) to 1 (best)
export const useScoringStore = create<ScoringStore>()(persist(
    (set) => ({
        scores: {},
        setScores: (gameId: string, score: number) =>
            set((state) => ({
                scores: {
                    ...state.scores,
                    [gameId]: score,
                },
            })),
    }), {
    name: "rating-store",
}));