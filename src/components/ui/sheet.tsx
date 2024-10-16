import React, { useState } from "react";

interface SheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Sheet: React.FC<SheetProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <button onClick={onClose} className="text-red-500 mb-4">
          Close
        </button>
        {children}
      </div>
    </div>
  );
};

export const SheetContent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="p-4">{children}</div>
);

export const SheetHeader: React.FC<{ title: string }> = ({ title }) => (
  <div className="text-lg font-bold mb-2">{title}</div>
);

export const SheetTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h1 className="text-xl font-semibold">{children}</h1>
);

export const SheetDescription: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-gray-500 mb-4">{children}</p>
);

export const SheetTrigger: React.FC<{ onClick: () => void; children: React.ReactNode }> = ({
  onClick,
  children,
}) => (
  <button onClick={onClick} className="bg-blue-500 text-white p-2 rounded">
    {children}
  </button>
);
