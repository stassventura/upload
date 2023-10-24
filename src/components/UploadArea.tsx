import { ChangeEvent, useRef } from 'react';

interface UploadAreaProps {
  handleFileUpload: (event: ChangeEvent<HTMLInputElement>) => void;
}

const UploadArea = ({ handleFileUpload }: UploadAreaProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null!);
  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="upload-area">
      <button
        onClick={triggerFileInput}
        className="w-80 h-20 bg-green text-white text-lg font-medium rounded-lg hover:bg-hover_green">
        Add File
      </button>
      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        multiple
        onChange={handleFileUpload}
      />
    </div>
  );
};

export default UploadArea;
