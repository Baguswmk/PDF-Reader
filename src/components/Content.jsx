/* eslint-disable react/prop-types */
const Content = ({ activePdf }) => {
    const getFileType = (fileName) => {
      return fileName.split('.').pop().toLowerCase(); 
    };
  
    return (
      <div className="flex-1 p-6 bg-gray-800 text-black">
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
          <div className="flex justify-center items-center h-full text-white">
            <p className="text-lg font-medium">Silakan pilih menu untuk melihat konten.</p>
          </div>
        )}
      </div>
    );
  };
  
  export default Content;
  