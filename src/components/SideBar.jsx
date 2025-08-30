import { Home, ShoppingCart, Package, Truck, BarChart, Wallet, Tag, Users, Layout, Plug } from "lucide-react";
import { useState } from "react";
const menuItems = [
  { name: "Home", icon: <Home size={18} /> },
  { name: "Orders", icon: <ShoppingCart size={18} /> },
  { name: "Products", icon: <Package size={18} /> },
  { name: "Delivery", icon: <Truck size={18} /> },
  { name: "Marketing", icon: <BarChart size={18} /> },
  { name: "Analytics", icon: <BarChart size={18} /> },
  { name: "Payouts", icon: <Wallet size={18} /> },
  { name: "Discounts", icon: <Tag size={18} /> },
  { name: "Audience", icon: <Users size={18} /> },
  { name: "Appearance", icon: <Layout size={18} /> },
  { name: "Plugins", icon: <Plug size={18} /> },
];

export default function Sidebar() {
    const[isOpen,setIsOpen]=useState(true)
  return (
    <div className={`min-h-screen bg-gray-900 text-gray-100 flex flex-col ${ isOpen ? "w-64" : "w-20"}`}>
        <div className="h-16 flex items-center justify-between px-4 border-b border-gray-700">
        {isOpen && <span className="text-lg ml-15 font-bold">Nishyan</span>}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-5 hover:bg-gray-800 rounded-lg"
        >
          {isOpen ? "<" : ">"}
        </button>
      </div>

      {/* Menu */}
      <nav className="flex-1 overflow-y-auto">
        <ul className={`${isOpen ? "p-3" : "p-5"} space-y-2`}>
          {menuItems.map((item, i) => (
            <li
              key={i}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 cursor-pointer"
            >
              {item.icon}
              {isOpen && <span>{item.name}</span>}
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-700">
        <button className="w-full text-left flex items-center gap-2 p-2 hover:bg-gray-800 rounded-lg">
          <span>Visit Store</span>
        </button>
      </div>
    </div>
  );
}
