import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
} from '@dnd-kit/core';
import { createPortal } from 'react-dom';
import useDragAndDrop from '../hooks/useDragAndDrop';
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable';
import FileCard from './FileCard';
import { PreviewItem } from '../types';

interface DragContainerProps {
  previewItems: PreviewItem[];
}

const DragContainer = ({ previewItems }: DragContainerProps) => {
  const sensors = useSensors(useSensor(PointerSensor));
  const { handleDragStart, handleDragEnd, activeCard, items } = useDragAndDrop({
    previewItems,
  });

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}>
      <div className="files-list bg-main w-full h-full flex items-center justify-center ">
        <div className="file-previews flex gap-2 select-none w-fit mx-auto">
          <SortableContext
            items={items.map((item) => item.id)}
            strategy={horizontalListSortingStrategy}>
            {items.map((item) => (
              <FileCard key={item.id} {...item} />
            ))}
          </SortableContext>
        </div>
      </div>

      {createPortal(
        <DragOverlay>
          {activeCard ? <FileCard key={activeCard.id} {...activeCard} /> : null}
        </DragOverlay>,
        document.body,
      )}
    </DndContext>
  );
};

export default DragContainer;
