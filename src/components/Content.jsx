/* eslint-disable react/prop-types */
const Content = ({ activePdf }) => {
  // Fungsi untuk mendapatkan ekstensi file
  const getFileType = (fileName) => {
    return fileName.split('.').pop().toLowerCase(); // Mendapatkan ekstensi file
  };

  return (
    <div className="flex-1 flex w-full md:w-3/4 ml-auto h-full  md:p-6    text-white overflow-auto">
      {activePdf ? (
        getFileType(activePdf) === "pdf" ? ( // Jika file PDF
          <iframe
            src={`/data/${activePdf}`}
            title="PDF Viewer"
            className="w-full h-full border-none"
          ></iframe>
        ) : getFileType(activePdf) === "jpg" || getFileType(activePdf) === "png" ? ( // Jika file gambar
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
        <div className="flex mx-auto items-center h-full text-white">
          <p className="text-lg font-medium">Silakan pilih menu untuk melihat konten.</p>
        </div>
      )}
    </div>
  );
};

export default Content;
