/* eslint-disable react/prop-types */
const Menu = ({ title, items, onMenuClick, icon }) => {
    return (
      <div className="mb-12">
        <h2 className=" font-bold text-4xl mb-4">
         <span className="flex flex-row items-center gap-2 " >{icon} {title} </span>
         </h2>
        <ul className="space-y-4 text-3xl">
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
  