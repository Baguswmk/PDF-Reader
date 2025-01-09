import { useState, useEffect } from "react";
import Menu from "./components/Sidebar";
import Content from "./components/Content";
import IdleVideo from "./components/Screen";
import { FaBook, FaCalendarAlt, FaLightbulb, FaBars, FaTimes } from "react-icons/fa";
import wallpaper from "./assets/wallpaper.jpg";
import "./App.css";

function App() {
  const menuBuku = [
    { label: "Ad Art", file: "Ad-ART.pdf" },
    { label: "Perduptar", file: "PERDUPTAR-POLTEKIP.pdf" },
  ];
  const menuJadwal = [{ label: "Pembina", file: "Jadwal.pdf" }];
  const menuAspirasi = [
    { label: "Scan Formulir", file: "barcode.jpg" },
    { label: "Tindak Lanjut", file: "PERDUPTAR-POLTEKIP.pdf" },
  ];

  const [activePdf, setActivePdf] = useState(null); 
  const [isIdle, setIsIdle] = useState(false); 
  const [showWallpaper, setShowWallpaper] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 

  useEffect(() => {
    // const enterFullscreen = () => {
    //   const element = document.documentElement;
    //   if (element.requestFullscreen) {
    //     element.requestFullscreen();
    //   } else if (element.mozRequestFullScreen) { 
    //     element.mozRequestFullScreen();
    //   } else if (element.webkitRequestFullscreen) { 
    //     element.webkitRequestFullscreen();
    //   } else if (element.msRequestFullscreen) { 
    //     element.msRequestFullscreen();
    //   }
    // };

    // enterFullscreen(); 

    let timeout;
    let wallpaperTimeout;

    const resetIdleTimer = () => {
      clearTimeout(timeout);
      clearTimeout(wallpaperTimeout);
      setIsIdle(false);
      setShowWallpaper(false); 

      timeout = setTimeout(() => {
        setShowWallpaper(true); 
        wallpaperTimeout = setTimeout(() => {
          setShowWallpaper(false); 
          setIsIdle(true); 
        }, 5000); // Durasi wallpaper (5 detik)
      }, 600000); // Durasi idle (10 menit tanpa aktivitas)     
    };

    window.addEventListener("mousemove", resetIdleTimer);
    window.addEventListener("keydown", resetIdleTimer);
    window.addEventListener("touchstart", resetIdleTimer);
    window.addEventListener("touchmove", resetIdleTimer);
  
    resetIdleTimer(); 
  
    return () => {
      window.removeEventListener("mousemove", resetIdleTimer);
      window.removeEventListener("keydown", resetIdleTimer);
      window.removeEventListener("touchstart", resetIdleTimer);
      window.removeEventListener("touchmove", resetIdleTimer);
      clearTimeout(timeout);
      clearTimeout(wallpaperTimeout);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-600 text-white">
      <div className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 transition-transform duration-200 ease-in-out bg-[#1b1e27] w-3/4 md:w-1/4 py-12 px-8 z-50`}>
        <div className="flex justify-end md:hidden">
          <button onClick={toggleSidebar} className="text-white text-2xl">
            <FaTimes />
          </button>
        </div>
        <Menu
          title="Buku"
          icon={<FaBook />}
          items={menuBuku}
          onMenuClick={(menu) => {
            setActivePdf(menu.file);
            setIsSidebarOpen(false);
          }}
        />
        <Menu
          title="Jadwal"
          icon={<FaCalendarAlt />}
          items={menuJadwal}
          onMenuClick={(menu) => {
            setActivePdf(menu.file);
            setIsSidebarOpen(false);
          }}
        />
        <Menu
          title="Aspirasi"
          icon={<FaLightbulb />}
          items={menuAspirasi}
          onMenuClick={(menu) => { setActivePdf(menu.file); setIsSidebarOpen(false); }}
        />
      </div>

      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-40 md:hidden" onClick={toggleSidebar}></div>
      )}

      <div className="absolute top-4 left-4 md:hidden z-50">
        <button onClick={toggleSidebar} className="text-white text-3xl">
          <FaBars />
        </button>
      </div>

      <div className="flex-1 p-6 md:ml-1/4  ">
        {showWallpaper ? (
          <div className="flex-1 flex w-full md:w-3/4 ml-auto h-full items-center bg-cover bg-center">
            <img src={wallpaper} alt="Wallpaper" className="w-full h-full rounded-sm object-cover" />
          </div>
        )
         : isIdle ? (
          <IdleVideo />
        ) 
        : (
          <Content activePdf={activePdf} />
        )}
      </div>
    </div>
  );
}

export default App;