import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import classNames from 'classnames';

interface FileCardProps {
  src?: string;
  color?: string;
  name: string | undefined;
  id: string;
  ext?: string | undefined;
}

const FileCard = ({ src, color, name, id, ext }: FileCardProps) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const fileImageStyle = src
    ? {
        backgroundImage: `url(${src})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
      }
    : {};

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="file-preview w-[175px] h-[212px] bg-[#dfdfdf] flex flex-col p-3 rounded-lg cursor-grab opacity-40 border-2 border-gray-300"></div>
    );
  }

  return (
    <>
      <div
        ref={setNodeRef}
        style={style}
        className={classNames(
          'file-preview w-[175px] h-[212px] flex flex-col p-3 rounded-lg cursor-grab ',
          'bg-transparent',
        )}
        {...attributes}
        {...listeners}>
        {src ? (
          <div className="file-image w-full h-[144px]" style={fileImageStyle} />
        ) : (
          <div
            className={`file-image w-full h-[144px] rounded-md flex items-center justify-center`}
            style={{ background: `${color}` }}>
            {ext}
          </div>
        )}
        <p className="text-[#49494A] text-center mt-4 text-sm whitespace-nowrap truncate">{name}</p>
      </div>
    </>
  );
};

export default FileCard;
