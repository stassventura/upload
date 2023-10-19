import { useState } from 'react';
import { PreviewItem } from '../types';
import { DragEndEvent, DragStartEvent } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';

interface useDragAndDropProps {
  previewItems: PreviewItem[];
}

const useDragAndDrop = ({ previewItems }: useDragAndDropProps) => {
  const [activeCard, setActiveCard] = useState<PreviewItem | null>(null);
  const [items, setItems] = useState<PreviewItem[]>(previewItems);

  const handleDragStart = (event: DragStartEvent) => {
    const item = items.find((i) => i.id === event.active.id);
    if (item) {
      setActiveCard(item);
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveCard(null);

    if (!over) return;

    const oldIndex = items.findIndex((item) => item.id === active.id);
    const newIndex = items.findIndex((item) => item.id === over.id);

    if (oldIndex !== -1 && newIndex !== -1 && oldIndex !== newIndex) {
      setItems((items) => arrayMove(items, oldIndex, newIndex));
    }
  };
  return {
    handleDragStart,
    handleDragEnd,
    activeCard,
    setActiveCard,
    items,
    setItems,
  };
};

export default useDragAndDrop;
