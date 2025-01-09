const IdleVideo = () => {
  return (
    <div className="flex-1 flex justify-center items-center bg-gray-800">
      <video
        className="w-3/4 h-3/4"
        autoPlay
        loop
        muted
      >
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default IdleVideo;
