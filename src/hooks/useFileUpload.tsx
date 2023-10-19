import { useEffect, useState } from 'react';
import { PreviewItem } from '../types';

const useFileUpload = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [previewItems, setPreviewItems] = useState<PreviewItem[]>([]);
  const [isFilesError, setIsFilesError] = useState<boolean>(false);

  useEffect(() => {
    return () => {
      previewItems.forEach((item) => {
        if (item.src) {
          URL.revokeObjectURL(item.src);
        }
      });
    };
  }, [previewItems]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files || []);

    if (selectedFiles.length >= 3 && selectedFiles.length <= 5) {
      const previews = selectedFiles.map((file, index) => {
        const id = index.toString();
        if (file.type.startsWith('image/')) {
          const fileURL = URL.createObjectURL(file);
          return { id, src: fileURL, name: file.name };
        } else {
          const ext = file.name.split('.').pop() || 'file';
          return { id, color: 'c8c8c8', ext: ext, name: file.name };
        }
      });

      setFiles(selectedFiles);
      setPreviewItems(previews);
    } else {
      setIsFilesError(true);
    }
  };

  return { files, previewItems, handleFileUpload, isFilesError, setIsFilesError };
};

export default useFileUpload;
