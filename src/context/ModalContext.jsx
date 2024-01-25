"use client"

import React, { createContext, useState, useContext } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
	const [openModal, setOpenModal] = useState(false);

	return (
        <ModalContext.Provider value={{ openModal, setOpenModal }}>
            <div>
                {children}
            </div>
			
		</ModalContext.Provider>
	);
};

export const useModal = () => {
	const context = useContext(ModalContext);
	if (!context) {
		throw new Error("useModal must be used within a ModalProvider");
	}
	return context;
};
