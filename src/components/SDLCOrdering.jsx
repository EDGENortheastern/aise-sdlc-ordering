import { useState } from "react";
import { sdlcPhases } from "../data/sdlcPhases";
import { shuffle } from "../utils/shuffle";

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

export default function SDLCOrdering() {
    const [stages, setStages] = useState(() =>
        shuffle(sdlcPhases)
    );

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

            return arrayMove(items, oldIndex, newIndex);
        });
    }

    return (
        <div>
            <h1>Reorder the SDLC Phases</h1>

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
