export function reorderItems(items, activeId, overId) {
    const oldIndex = items.findIndex(item => item.id === activeId);
    const newIndex = items.findIndex(item => item.id === overId);

    if (oldIndex === -1 || newIndex === -1) return items;

    const updated = [...items];
    const [moved] = updated.splice(oldIndex, 1);
    updated.splice(newIndex, 0, moved);

    return updated;
}
