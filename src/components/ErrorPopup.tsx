import Modal from './Modal';

interface ErrorPopup {
  setIsFilesError: (value: boolean) => void;
}

const ErrorPopup = ({ setIsFilesError }: ErrorPopup) => {
  const closePopup = () => {
    setIsFilesError(false);
  };
  return (
    <Modal onClose={closePopup}>
      <h1 className="text-center pt-16 text-3xl bg-white">Error</h1>
      <div className="w-full pt-8 bg-modalBg">
        <p className=" text-font text-center text-base">
          Please add not less than 2 and not more than 5 files.
        </p>
        <button
          className="uppercase w-44 h-11 rounded-md bg-blue text-white text-xl mx-auto block mt-14 mb-16 hover:bg-hover_blue"
          onClick={closePopup}>
          ok
        </button>
      </div>
    </Modal>
  );
};

export default ErrorPopup;
