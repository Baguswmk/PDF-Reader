/* eslint-disable react/prop-types */
const Menu = ({ title, items, onMenuClick, icon }) => {
  return (
    <div className="w-10/12 mb-8 mx-auto py-4 px-2 ">
      <div className="flex items-center align-middle mb-6 text-lg font-bold">
        {icon && <span className="pl-2 mr-4 text-xl md:text-2xl lg:text-4xl text-[#3671f5]">{icon}</span>}
        <span className=" text-xl md:text-2xl lg:text-4xl  uppercase font-semibold">{title}</span> 
      </div>
      <ul className="space-y-6 text-white text-base md:text-xl lg:text-[32px]">
        {items.map((item, index) => (
          <li key={index}>
            <button
              className="w-[92%] flex mx-auto py-4 px-6  border border-white rounded-lg hover:bg-[#2b5bae]"
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
