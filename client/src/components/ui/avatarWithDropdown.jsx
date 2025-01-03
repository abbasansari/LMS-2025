import React, { useState } from "react";
import { Link } from "react-router-dom";
import { User } from "lucide-react";

const AvatarWithDropdown = ({ user, logout }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative">
      <button
        className="focus:outline-none focus:ring-0 focus:!ring-0"
        onClick={toggleDropdown}
      >
        {user && user.avatarUrl ? (
          <img
            src={user.avatarUrl}
            alt={`${user.name}'s Avatar`}
            className="rounded-full h-8 w-8 object-cover cursor-pointer"
          />
        ) : (
          <div className="rounded-full h-8 w-8 bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
            <User size={20} className="text-gray-500 dark:text-gray-300" />
          </div>
        )}
      </button>

      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-10">
          {" "}
          {/* Removed ring classes */}
          <div className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            Account
          </div>
          <Link
            to="/profile"
            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
          >
            Profile
          </Link>
          <button
            onClick={logout}
            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left focus:outline-none focus:ring-0"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default AvatarWithDropdown;
