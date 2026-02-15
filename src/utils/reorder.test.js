import { describe, it, expect } from "vitest";
import { reorderItems } from "./reorder";

describe("reorderItems", () => {
    const sample = [
        { id: "a" },
        { id: "b" },
        { id: "c" }
    ];

    it("moves an item forward", () => {
        const result = reorderItems(sample, "a", "c");

        expect(result.map(i => i.id)).toEqual(["b", "c", "a"]);
    });

    it("moves an item backward", () => {
        const result = reorderItems(sample, "c", "a");

        expect(result.map(i => i.id)).toEqual(["c", "a", "b"]);
    });

    it("does not mutate the original array", () => {
        reorderItems(sample, "a", "b");

        expect(sample.map(i => i.id)).toEqual(["a", "b", "c"]);
    });

    it("returns original array if id not found", () => {
        const result = reorderItems(sample, "x", "b");

        expect(result).toEqual(sample);
    });
});
