import { NavLink } from "react-router-dom";
import { moblieNavigation } from "../constants/navigation";

const MobileNavigation = () => {
  return (
    <div className="lg:hidden fixed bottom-0 bg-black bg-opacity-80 h-14 w-full z-50 ">
      <div className="flex items-cemter justify-between h-full text-neutral-400 ">
        {moblieNavigation.map((navItem) => {
          return (
            <NavLink
              key={navItem.label}
              to={navItem.href}
              className={({ isActive }) =>
                `px-3 flex h-full items-center flex-col justify-center ${
                  isActive && "text-white"
                }`
              }
            >
              <div className="text-2xl">{navItem.icon}</div>
              <p className="text-sm">{navItem.label}</p>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default MobileNavigation;



