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
      <h1 className="text-center pt-[61px] text-3xl bg-white">Error</h1>
      <div className="w-full pt-[33px] bg-[#f9f9f9]">
        <p className=" text-[#545454] text-center text-base">
          Please add not less than 2 and not more than 5 files.
        </p>
        <button
          className="uppercase w-[175px] h-[45px] rounded-md bg-[#009EE2] text-white text-xl mx-auto block mt-[54px] mb-[61px] hover:bg-[#1c8fc0]"
          onClick={() => closePopup()}>
          ok
        </button>
      </div>
    </Modal>
  );
};

export default ErrorPopup;
