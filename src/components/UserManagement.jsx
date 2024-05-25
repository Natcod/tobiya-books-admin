import { useState } from "react";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BookIcon,
  PackageIcon,
  UsersIcon,
  MoveHorizontalIcon,
} from "@/assets/icons";
import UserProfile from "@/components/UserProfile";

import { useEffect } from "react";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getDocs, collection, query, where, doc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVGSNkBWy4E2b_ppPRN3sugAQFhGEexP0",
  authDomain: "tobiya-books.firebaseapp.com",
  projectId: "tobiya-books",
  storageBucket: "tobiya-books.appspot.com",
  messagingSenderId: "1020858474315",
  appId: "1:1020858474315:web:b1ac8ad0afeb7cf6fc92ce",
  measurementId: "G-CJQC9J9LBB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const UserManagement = () => {
  const [loading, setLoading] = useState(true);
  const [viewingUser, setViewingUser] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const usersQuery = query(collection(db, "Readers"));
      const usersQuerySnapshot = await getDocs(usersQuery);

      const dataArray = usersQuerySnapshot.docs.map((doc) => ({
        id: doc.id,
        registerationDate: doc
          .data()
          .registrationDate.toDate()
          .toLocaleDateString(),
        ...doc.data(),
      }));

      setUsers(dataArray);
      setLoading(false);
    }
    fetchData();
  }, []);

  const handleView = (user) => {
    setViewingUser(user);
  };

  if (viewingUser) {
    return <UserProfile user={viewingUser} setViewingUser={setViewingUser} />;
  }

  return (
    <div className="grid gap-6 md:gap-8">
      <div className="flex items-center">
        <h1 className="font-semibold text-lg md:text-2xl">Reader Management</h1>
      </div>
      <div className="border shadow-sm rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Registered</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan="4" className="text-center">
                  Loading...
                </TableCell>
              </TableRow>
            ) : users.length === 0 ? (
              <TableRow>
                <TableCell colSpan="4" className="text-center">
                  No Readers
                </TableCell>
              </TableRow>
            ) : (
              users.map((user, index) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">
                    {user.firstName} {user.lastName}
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.registerationDate}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button size="icon" variant="ghost">
                          <MoveHorizontalIcon className="w-4 h-4" />
                          <span className="sr-only">Actions</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => handleView(user)}>
                          View Reader
                        </DropdownMenuItem>
                        <DropdownMenuItem>Edit Reader</DropdownMenuItem>
                        <DropdownMenuItem>Delete Reader</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default UserManagement;
