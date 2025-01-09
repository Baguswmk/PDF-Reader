/* eslint-disable react/prop-types */
const Menu = ({ title, items, onMenuClick, icon }) => {
  return (
    <div className="mb-8 md:pl-6 py-2">
      <div className="flex items-center mb-4 text-lg font-bold">
        {icon && <span className="mr-2 text-xl md:text-4xl">{icon}</span>} {/* Ikon */}
        <span className="  text-xl md:text-4xl">{title}</span> {/* Tampilkan judul hanya di layar medium ke atas */}
      </div>
      <ul className="space-y-4 text-base md:text-3xl">
        {items.map((item, index) => (
          <li key={index}>
            <button
              className="w-full text-left py-2 px-4 bg-gray-700 rounded hover:bg-gray-600"
              onClick={() => onMenuClick(item)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
