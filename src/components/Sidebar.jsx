
import React from 'react';
import { Link } from 'react-router-dom'
import { BellIcon, Package2Icon, UsersIcon, PackageIcon, UploadIcon } from "@/assets/icons";
import { Button } from "@/components/ui/button";

const Sidebar = () => (
  <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-[60px] items-center border-b px-6">
        <Link className="flex items-center gap-2 font-semibold" to="/">
          <Package2Icon className="h-6 w-6" />
          <span>Tobia Books</span>
        </Link>
        <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
          <BellIcon className="h-4 w-4" />
          <span className="sr-only">Toggle notifications</span>
        </Button>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid items-start px-4 text-sm font-medium">
          <Link
            className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
            to="/reader-management"
          >
            <UsersIcon className="h-4 w-4" />
            Reader Management
          </Link>
          <Link
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            to="/publisher-management"
          >
            <PackageIcon className="h-4 w-4" />
            Publisher Management
          </Link>
          <Link
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            to="/book-upload-requests"
          >
            <UploadIcon className="h-4 w-4" />
            Book Upload Requests
          </Link>
          <Link
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            to="/notifications"
          >
            <BellIcon className="h-4 w-4" />
            Notifications
          </Link>
        </nav>
      </div>
    </div>
  </div>
);

export default Sidebar;
