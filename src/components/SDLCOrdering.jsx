import { useState } from "react";
import { sdlcPhases } from "../data/sdlcPhases";
import { shuffle } from "../utils/shuffle";

import confetti from "canvas-confetti";

import {
    DndContext,
    closestCenter
} from "@dnd-kit/core";

import {
    SortableContext,
    verticalListSortingStrategy,
    arrayMove
} from "@dnd-kit/sortable";

import SortableItem from "./SortableItem";

const correctOrder = [
    "Feasibility Study",
    "Requirements Elicitation",
    "Analysis",
    "Design",
    "Implementation",
    "Testing",
    "Deployment",
    "Maintenance",
];

export default function SDLCOrdering() {
    const [stages, setStages] = useState(() =>
        shuffle(sdlcPhases)
    );

    const [isComplete, setIsComplete] = useState(false);

    function handleDragEnd(event) {
        const { active, over } = event;

        if (!over || active.id === over.id) return;

        setStages((items) => {
            const oldIndex = items.findIndex(
                (item) => item.id === active.id
            );

            const newIndex = items.findIndex(
                (item) => item.id === over.id
            );

            const newItems = arrayMove(items, oldIndex, newIndex);

            const orderedCorrectly = newItems.every(
                (item, index) => item.label === correctOrder[index]
            );

            if (orderedCorrectly && !isComplete) {
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { x: 0.4, y: 0.6 }
                });
            }

            setIsComplete(orderedCorrectly);

            return newItems;
        });
    }

    return (
        <div className="container">
            <h1>Reorder the SDLC Phases</h1>

            <p className="instructions">
                Drag the SDLC phases into the correct order. You'll know when you're done 😉
            </p>

            {isComplete && (
                <div className="success-banner">
                    ✅ Correct Order Achieved!
                </div>
            )}

            <DndContext
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
            >
                <SortableContext
                    items={stages.map((s) => s.id)}
                    strategy={verticalListSortingStrategy}
                >
                    {stages.map((stage) => (
                        <SortableItem
                            key={stage.id}
                            id={stage.id}
                            stage={stage}
                        />
                    ))}
                </SortableContext>
            </DndContext>
        </div>
    );
}