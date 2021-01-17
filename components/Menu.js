import { useState } from "react";
import MenuIcon from "icons/menu";
import CloseIcon from "icons/close";
import Link from "next/link";

export default function Menu() {
  const menuItems = ["Home", "Cooking", "Baking", "Drinking", "Inspiration"];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className="w-10 m-2">
        <MenuIcon color="#6366F1" />
      </button>
      <div className={`bg-indigo-500 inset-0 transition-all	${isOpen ? "absolute" : "hidden"} z-50`}>
        <div className="w-full flex justify-end">
          <button className="w-12 m-2" onClick={() => setIsOpen(!isOpen)}>
            <CloseIcon color="#fef5dc" />
          </button>
        </div>

        <ul className="font-medium text-yellow-light text-4xl px-8">
          {menuItems.map((route, index) => (
            <li
              className="p-4 hover:text-orange duration-150 cursor-pointer"
              key={index}
              onClick={() => setIsOpen(false)}
            >
              <Link href={`/${route === "Home" ? "" : route.toLowerCase()}`}>{route}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
