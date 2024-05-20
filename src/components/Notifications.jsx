import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

import React from 'react';
import { Link } from 'react-router-dom'

const Notifications = () => (
  <div className="grid gap-6 md:gap-8">
    <div className="flex items-center">
      <h1 className="font-semibold text-lg md:text-2xl">Notifications</h1>
      <Button className="ml-auto" size="sm">
        Send Notification
      </Button>
    </div>
    <div className="border shadow-sm rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Message</TableHead>
            <TableHead>Link</TableHead>
            <TableHead>Sent</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">New Book Release</TableCell>
            <TableCell>Check out the latest book from our featured author!</TableCell>
            <TableCell>
              <Link className="text-blue-600 underline" to="/">
                View Book
              </Link>
            </TableCell>
            <TableCell>2023-05-01</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Summer Reading List</TableCell>
            <TableCell>Discover our top picks for your summer reading pleasure.</TableCell>
            <TableCell>
              <Link className="text-blue-600 underline" to="/">
                View List
              </Link>
            </TableCell>
            <TableCell>2023-06-15</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Book Club Announcement</TableCell>
            <TableCell>Join our monthly book club discussion on the latest bestseller.</TableCell>
            <TableCell>
              <Link className="text-blue-600 underline" to="/">
                Join Now
              </Link>
            </TableCell>
            <TableCell>2023-07-01</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  </div>
);

export default Notifications;
