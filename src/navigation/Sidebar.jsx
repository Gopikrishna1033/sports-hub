import { Link, useLocation } from "react-router-dom";
import { LuHouse, LuCalendar, LuBookText } from "react-icons/lu";

export default function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { id: 1, path: "/", label: "Dashboard", icon: <LuHouse /> },
    { id: 2, path: "/ledger", label: "Ledger", icon: <LuBookText /> },
    {
      id: 3,
      path: "/booking-calendar",
      label: "Booking Calendar",
      icon: <LuCalendar />,
    },
  ];

  return (
    <aside className="fixed top-16 left-0 bottom-0 w-64 bg-white border-r border-slate-200 p-4 overflow-y-auto z-40">
      <ul className="space-y-1.5">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={`flex items-center gap-3 p-3 rounded-xl font-medium transition-all ${
                  isActive
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
