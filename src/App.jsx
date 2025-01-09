import { useState, useEffect } from "react";
import Menu from "./components/Sidebar";
import Content from "./components/Content";
import IdleVideo from "./components/Screen";
import { FaBook, FaCalendarAlt, FaLightbulb } from "react-icons/fa";
import wallpaper from "./assets/wallpaper.jpg";

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

  useEffect(() => {
    const enterFullscreen = () => {
      const elem = document.documentElement;
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen(); 
      }
    };

    enterFullscreen(); 

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
        }, 1000); // Durasi wallpaper (2 detik)
      }, 1000); // Durasi idle (3 detik tanpa aktivitas)
    };

    // Event listener untuk aktivitas pengguna
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

  return (
    <div className="flex h-screen bg-gray-800 text-white">
      {/* Sidebar */}
      <div className="flex h-screen bg-gray-900 flex-col w-1/4 py-12 px-8">
        <Menu
          title="Buku"
          icon={<FaBook />}
          items={menuBuku}
          onMenuClick={(menu) => setActivePdf(menu.file)}
        />
        <Menu
          title="Jadwal"
          icon={<FaCalendarAlt />}
          items={menuJadwal}
          onMenuClick={(menu) => setActivePdf(menu.file)}
        />
        <Menu
          title="Aspirasi"
          icon={<FaLightbulb />}
          items={menuAspirasi}
          onMenuClick={(menu) => setActivePdf(menu.file)}
        />
      </div>

      {/* Content */}
      {showWallpaper ? (
        <div className="flex-1 flex justify-center items-center bg-cover bg-center p-16">
          <img src={wallpaper} alt="Wallpaper"   className="w-full h-full rounded-sm" />
        </div>
      )
       : isIdle ? (
        <IdleVideo />
      ) 
      : (
        <Content activePdf={activePdf} />
      )
      }
    </div>
  );
}

export default App;
