import { useState } from "react";
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
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookIcon, PackageIcon, UsersIcon, MoveHorizontalIcon } from "@/assets/icons";
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
  measurementId: "G-CJQC9J9LBB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const UserManagement = () => {
  const [loading, setLoading] = useState(true);
  const [viewingUser, setViewingUser] = useState(null);
  const [readersCount, setReadersCount] = useState(0);
  const [publsihersCount, setPublishersCount] = useState(0);
  const [pendingRequestsCount, setPendingRequestsCount] = useState(0);

  useEffect(() => {
      async function fetchData() {
        setLoading(true);
        let querySnapshot = await getDocs(collection(db, "Readers"));
        let documentCount = querySnapshot.size;

        console.log(`Number of documents in Readers:`, documentCount);

        setReadersCount(documentCount);

        querySnapshot = await getDocs(collection(db, "Publishers"));
        documentCount = querySnapshot.size;

        console.log(`Number of documents in Publishers:`, documentCount);

        setPublishersCount(documentCount);

        querySnapshot = await getDocs(collection(db, "Ebooks"),where("approvalStatus", "==", "Pending"));
        documentCount = querySnapshot.size;

        console.log(`Number of documents in Ebooks pending approval:`, documentCount);

        setPendingRequestsCount(documentCount);
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
        <h1 className="font-semibold text-lg md:text-2xl">Dashboard</h1>
        {/* <Button className="ml-auto" size="sm">
          Add Reader
        </Button> */}
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" style={{ marginBottom: "2rem" }}>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Readers</CardTitle>
            <UsersIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <>
                <div className="text-2xl font-bold">{readersCount}</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">+5.2% from last month</p>
              </>
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Publishers</CardTitle>
            <PackageIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <>
                <div className="text-2xl font-bold">{publsihersCount}</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">+3.1% from last month</p>
              </>
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Pending Requests</CardTitle>
            <BookIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <>
                <div className="text-2xl font-bold">{pendingRequestsCount}</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">+8% from last month</p>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserManagement;
