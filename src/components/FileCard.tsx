import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import classNames from 'classnames';
import { FC } from 'react';
import { PreviewItem } from '../types';

const FileCard: FC<PreviewItem> = (props) => {
  const isImage = 'src' in props;

  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: props.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="file-preview w-[175px] h-[212px] bg-[#dfdfdf] flex flex-col p-3 rounded-lg cursor-grab opacity-40 border-2 border-gray-300"
      />
    );
  }

  return (
    <>
      <div
        ref={setNodeRef}
        style={style}
        className={classNames(
          'file-preview w-[175px] h-[212px] flex flex-col p-3 rounded-lg cursor-grab justify-between',
          'bg-transparent',
        )}
        {...attributes}
        {...listeners}>
        {isImage ? (
          <img className="shadow-lg max-h-36" src={props.src} alt={''} />
        ) : (
          <div
            className={`file-image w-full h-[144px] rounded-md flex items-center justify-center shadow-lg bg-[#ddd6d6]`}>
            {props.ext}
          </div>
        )}
        <p className="text-[#49494A] text-center mt-4 text-sm whitespace-nowrap truncate">
          {props.name}
        </p>
      </div>
    </>
  );
};

export default FileCard;
