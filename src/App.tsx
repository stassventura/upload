import DragContainer from './components/DragContainer';
import ErrorPopup from './components/ErrorPopup';
import UploadArea from './components/UploadArea';
import useFileUpload from './hooks/useFileUpload';

function App() {
  const { files, previewItems, handleFileUpload, isFilesError, setIsFilesError } = useFileUpload();
  return (
    <>
      <div className="container max-w-[1200px] bg-white mx-auto border-8  border-[#EDEDED] rounded-lg h-[333px] flex items-center justify-center">
        {files.length === 0 ? (
          <UploadArea handleFileUpload={handleFileUpload} />
        ) : (
          <DragContainer previewItems={previewItems} />
        )}

        {isFilesError && <ErrorPopup setIsFilesError={setIsFilesError} />}
      </div>
    </>
  );
}

export default App;