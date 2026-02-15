import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function SortableItem({ id, stage }) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        padding: "8px",
        border: "1px solid #ccc",
        marginBottom: "6px",
        background: "white",
        cursor: "grab"
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
        >
            {stage.label}
        </div>
    );
}
