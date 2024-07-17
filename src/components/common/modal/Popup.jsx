import React from 'react';

const Popup = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-50 bg-white rounded-lg max-w-md mx-auto p-6">
          <button
            onClick={onClose}
            className="absolute top-0 right-0 m-3 text-gray-500 hover:text-gray-600"
          >
            <svg
              className="h-5 w-5 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M18.364 5.636c-.78-.78-2.048-.78-2.828 0L12 9.172 8.464 5.636c-.78-.78-2.048-.78-2.828 0-.78.78-.78 2.048 0 2.828L9.172 12l-3.536 3.536c-.78.78-.78 2.048 0 2.828.78.78 2.048.78 2.828 0L12 14.828l3.536 3.536c.78.78 2.048.78 2.828 0 .78-.78.78-2.048 0-2.828L14.828 12l3.536-3.536c.78-.78.78-2.048 0-2.828z"
              />
            </svg>
          </button>
          <div className="mt-4">{children}</div>
        </div>
      </div>
    );
};

export default Popup;
