import { useEffect, useState } from "react";
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table";
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
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PlusIcon, MoveHorizontalIcon } from "@/assets/icons";
import PublisherProfile from "@/components/PublisherProfile";

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
  measurementId: "G-CJQC9J9LBB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


const PublisherManagement = () => {
  const [viewingUser, setViewingUser] = useState(null);
  const [publishers, setPublishers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const usersQuery = query(collection(db, "Users"), where("role", "==", "publisher"));
      const usersQuerySnapshot = await getDocs(usersQuery);

      // Step 2: For each publisher user, get their book count
      const publisherData = await Promise.all(usersQuerySnapshot.docs.map(async (userDoc) => {
        const userId = userDoc.id;
        const userData = userDoc.data();

        // Create a reference to the user document
        const userRef = doc(db, "Users", userId);

        // Query the Books collection to count the books by this user reference
        const booksQuery = query(collection(db, "Books"), where("publisher", "==", userRef));
        const booksQuerySnapshot = await getDocs(booksQuery);
        const bookCount = booksQuerySnapshot.size;

        // Combine user data with the book count
        return {
          id: userId,
          ...userData,
          bookCount: bookCount
        };
      }));

      console.log(publisherData);

      setPublishers(publisherData);
      setLoading(false);
    }
    fetchData();
  }, []);

  const handleView = (publisher) => {
    setViewingUser(publisher);
  };

  if (viewingUser) {
    return <PublisherProfile user={viewingUser} setViewingUser={setViewingUser} />;
  }

  return (
    <div>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Publisher Management</CardTitle>
          <Button size="sm">
            <PlusIcon className="w-4 h-4 mr-2" />
            Add Publisher
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Books</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan="4" className="text-center">Loading...</TableCell>
                </TableRow>
              ) : (
                publishers.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan="4" className="text-center">No Publishers</TableCell>
                  </TableRow>
                ) : (
                  publishers.map((publisher, index) => (
                    <TableRow key={publisher.id}>
                      <TableCell className="font-medium">{publisher.firstName} {publisher.lastName}</TableCell>
                      <TableCell>{publisher.email}</TableCell>
                      <TableCell>{publisher.bookCount}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button size="icon" variant="ghost">
                              <MoveHorizontalIcon className="w-4 h-4" />
                              <span className="sr-only">Actions</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => handleView({ publisher })}>
                              View Publisher
                            </DropdownMenuItem>
                            <DropdownMenuItem>Edit Publisher</DropdownMenuItem>
                            <DropdownMenuItem>Delete Publisher</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                )
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default PublisherManagement;
