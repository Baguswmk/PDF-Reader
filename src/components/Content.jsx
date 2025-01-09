/* eslint-disable react/prop-types */
import IdleVideo from "./Screen";
const Content = ({ activePdf }) => {
  

  const getFileType = (fileName) => {
    return fileName.split('.').pop().toLowerCase(); 
  };

  return (
    <div
      className="flex-1 flex w-full md:w-3/4 ml-auto h-full md:py-6 md:pl-4 text-white overflow-auto"
    >
      {activePdf ? (
        getFileType(activePdf) === "pdf" ? ( 
          <iframe
            src={`/data/${activePdf}`}
            title="PDF Viewer"
            className="w-full h-full border-none"
          ></iframe>
        ) : getFileType(activePdf) === "jpg" || getFileType(activePdf) === "png" ? ( 
          <img
            src={`/data/${activePdf}`}
            alt="Gambar Viewer"
            className="w-full h-auto max-h-full object-contain"
          />
        ) : (
          <div className="flex justify-center items-center h-full text-white">
            <p className="text-lg font-medium">Format file tidak didukung.</p>
          </div>
        )
      ) : (
        <IdleVideo />
      )}
    </div>
  );
};

export default Content;
