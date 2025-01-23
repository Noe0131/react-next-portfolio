"use client";

import { useState } from "react";
import HamburgerButton from "./HamburgerButton";
import MenuList from "./MenuList";

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);  
    };

    const closeMenu = () => {
        setIsOpen(false);  
    };

    return (
        <div>
            <HamburgerButton isOpen={isOpen} toggleMenu={toggleMenu} />
            <MenuList isOpen={isOpen} onClose={closeMenu} />
        </div>
    );
}
