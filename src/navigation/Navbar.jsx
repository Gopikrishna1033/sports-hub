import { LuBell, LuUser } from "react-icons/lu";
import sportshub from "../../src/assets/sportshub.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-slate-200 z-50 flex items-center justify-between px-6">
      {/* Logo */}
      <img src={sportshub} alt="SportsHub" width={150} />

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Notification Button */}
        <button
          className="
            relative p-2 rounded-full
            transition-colors
            cursor-pointer
          "
        >
          <LuBell className="text-2xl text-slate-600" />
        </button>

        {/* Profile Avatar */}
        <div className="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center">
          <LuUser />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
