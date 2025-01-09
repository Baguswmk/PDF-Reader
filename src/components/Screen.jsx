const IdleVideo = () => {
  return (
    <div className="flex-1 flex w-full md:w-3/4 ml-auto h-full px-4 pl-4 mr-4 md:p-6 items-center ">
      <video
        className="w-full h-full object-cover"
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
