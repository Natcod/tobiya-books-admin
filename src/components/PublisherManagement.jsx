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
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PlusIcon, MoveHorizontalIcon } from "@/assets/icons";
import PublisherProfile from "@/components/PublisherProfile";

const PublisherManagement = () => {
  const [viewingUser, setViewingUser] = useState(null);

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
              <TableRow>
                <TableCell className="font-medium">Tobia Publishing</TableCell>
                <TableCell>info@acmepublishing.com</TableCell>
                <TableCell>42</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" variant="ghost">
                        <MoveHorizontalIcon className="w-4 h-4" />
                        <span className="sr-only">Actions</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => handleView({ name: 'Tobia Publishing', email: 'info@acmepublishing.com' })}>
                        View Publisher
                      </DropdownMenuItem>
                      <DropdownMenuItem>Edit Publisher</DropdownMenuItem>
                      <DropdownMenuItem>Delete Publisher</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Starlight Books</TableCell>
                <TableCell>contact@starlightbooks.com</TableCell>
                <TableCell>12</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" variant="ghost">
                        <MoveHorizontalIcon className="w-4 h-4" />
                        <span className="sr-only">Actions</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => handleView({ name: 'Tobia Publishing', email: 'info@acmepublishing.com' })}>
                        View Publisher
                      </DropdownMenuItem>
                      <DropdownMenuItem>Edit Publisher</DropdownMenuItem>
                      <DropdownMenuItem>Delete Publisher</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Horizon Media</TableCell>
                <TableCell>hello@horizonmedia.com</TableCell>
                <TableCell>18</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" variant="ghost">
                        <MoveHorizontalIcon className="w-4 h-4" />
                        <span className="sr-only">Actions</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => handleView({ name: 'Horizon Media', email: 'hello@horizonmedia.com' })}>
                        View Publisher
                      </DropdownMenuItem>
                      <DropdownMenuItem>Edit Publisher</DropdownMenuItem>
                      <DropdownMenuItem>Delete Publisher</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default PublisherManagement;
