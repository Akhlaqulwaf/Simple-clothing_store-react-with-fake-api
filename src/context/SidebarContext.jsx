import React, { useState, createContext } from "react";

export const sidebarContext = createContext();

export default function SidebarProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <sidebarContext.Provider value={{isOpen, setIsOpen, handleClose}}>
      {children}
    </sidebarContext.Provider>
  );
}
