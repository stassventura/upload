import { useEffect } from 'react';

interface ErrorPopup {
  setIsFilesError: (value: boolean) => void;
}

const ErrorPopup = ({ setIsFilesError }: ErrorPopup) => {
  useEffect(() => {
    const overlay = document.querySelector('.popup-overlay') as HTMLElement;
    if (overlay) {
      setTimeout(() => {
        overlay.style.opacity = '1';
      }, 200);
    }
  }, []);

  const onClosePopupClick = () => {
    const overlay = document.querySelector('.popup-overlay') as HTMLElement;
    if (overlay) {
      overlay.style.opacity = '0';
    }
    setTimeout(() => {
      setIsFilesError(false);
    }, 200);
  };

  return (
    <div className="popup-overlay">
      <div className="popup w-[484px] h-[300px] bg-[#f9f9f9] relative border-8  border-[#EDEDED] rounded-lg">
        <span className="close-popup bg-red-500 w-[15px]" onClick={() => onClosePopupClick()}>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <line
              y1="-1"
              x2="18.3848"
              y2="-1"
              transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 13 15)"
              stroke="#959595"
              strokeWidth="2"
            />
            <line
              y1="-1"
              x2="18.3848"
              y2="-1"
              transform="matrix(0.707107 -0.707107 0.707107 0.707107 2 15)"
              stroke="#959595"
              strokeWidth="2"
            />
          </svg>
        </span>
        <h1 className="text-center pt-[61px] text-3xl bg-white">Error</h1>
        <div className="w-full pt-[33px]">
          <p className=" text-[#545454] text-center text-base">
            Please add not less than 2 and not more than 5 files.
          </p>
          <button
            className="uppercase w-[175px] h-[45px] rounded-md bg-[#009EE2] text-white text-xl mx-auto block mt-[54px] mb-[61px] hover:bg-[#1c8fc0]"
            onClick={() => onClosePopupClick()}>
            ok
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPopup;
