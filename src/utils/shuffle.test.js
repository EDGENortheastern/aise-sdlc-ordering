import { describe, it, expect } from "vitest";
import { shuffle } from "./shuffle";

describe("shuffle", () => {
    const sample = [
        { id: "a" },
        { id: "b" },
        { id: "c" }
    ];

    it("returns a new array", () => {
        const result = shuffle(sample);
        expect(result).not.toBe(sample);
    });

    it("does not mutate the original array", () => {
        shuffle(sample);
        expect(sample).toEqual([
            { id: "a" },
            { id: "b" },
            { id: "c" }
        ]);
    });

    it("contains the same elements", () => {
        const result = shuffle(sample);

        const sortedResult = [...result].sort((a, b) =>
            a.id.localeCompare(b.id)
        );

        expect(sortedResult).toEqual(sample);
    });
});
