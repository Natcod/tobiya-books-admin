

import React from 'react';
import { Link } from 'react-router-dom';
import { Routes, Route } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { BellIcon, Package2Icon, UsersIcon,SearchIcon, PackageIcon, UploadIcon } from "@/assets/icons";
import { Badge } from "@/components/ui/badge"


import Header from './components/Header'
import Sidebar from './components/Sidebar';
import UserManagement from './components/UserManagement';
import PublisherManagement from './components/PublisherManagement';
import Notifications from './components/Notifications';
import BookUploadRequests from './components/BookUploadRequests'

function App() {
  console.log('App component is rendering');
  return (
    <>
      {/* <Header /> */}
      <main>
          <Component/>
      </main>
    </>
  );
}








export function Component() {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <div className="flex h-full max-h-screen flex-col gap-2">
          {/* comp 1 */}
          
{/* comp sidebar */}
          <Sidebar/>
        </div>
      </div>
      <div className="flex flex-col">
        {/* comp header */}

        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <Link className="lg:hidden" href="#">
            <Package2Icon className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </Link>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
                  placeholder="Search readers, publishers, or requests"
                  type="search"
                />
              </div>
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
                size="icon"
                variant="ghost"
              >
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Admin</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
         <Routes>
            <Route path="/" element={ <UserManagement/>}></Route>
            <Route path="/publisher-management" element={<PublisherManagement/>}></Route>
            <Route path="/book-upload-requests" element={<BookUploadRequests/>}></Route>
            <Route path="/notifications" element={<Notifications/>}></Route>
            
          </Routes>
        </main>
      </div>
    </div>
  );

}

export default App;




