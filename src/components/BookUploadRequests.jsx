import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BookIcon, PackageIcon, UsersIcon, MoveHorizontalIcon } from "@/assets/icons";

const BookUploadRequests = () => (
  <div className="grid gap-6 md:gap-8">
    <div className="flex items-center">
      <h1 className="font-semibold text-lg md:text-2xl">Book Upload Requests</h1>
    </div>
    <div className="border shadow-sm rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Publisher</TableHead>
            <TableHead>Book Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Tobia Publishing</TableCell>
            <TableCell>The Secrets of the Universe</TableCell>
            <TableCell>A comprehensive guide to the mysteries of the cosmos.</TableCell>
            <TableCell>
              <Badge
                className="bg-yellow-100 text-yellow-800 dark:bg-yellow-800/20 dark:text-yellow-300"
                variant="outline"
              >
                Pending
              </Badge>
            </TableCell>
       
            <TableCell className="text">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" variant="ghost">
                        <MoveHorizontalIcon className="w-4 h-4" />
                        <span className="sr-only">Actions</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => handleView({ name: 'Tobia Publishing', email: 'info@acmepublishing.com' })}>
                        View Book
                      </DropdownMenuItem>
                      <DropdownMenuItem> <Button className="mr-2" size="sm" variant="outline">
                Approve
              </Button></DropdownMenuItem>
                      <DropdownMenuItem>   <Badge className="bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-300" variant="outline">
                Reject
              </Badge>  </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
             
              
          
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Bookworm Inc.</TableCell>
            <TableCell>The Art of Storytelling</TableCell>
            <TableCell>Explore the techniques and strategies of master storytellers.</TableCell>
           
           
            <TableCell>
            <Badge
                className="bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-300"
                variant="outline"
              >
                Approved
              </Badge>
            </TableCell>
            <TableCell className="text">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" variant="ghost">
                        <MoveHorizontalIcon className="w-4 h-4" />
                        <span className="sr-only">Actions</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => handleView({ name: 'Tobia Publishing', email: 'info@acmepublishing.com' })}>
                        View Book
                      </DropdownMenuItem>
                      <DropdownMenuItem> </DropdownMenuItem>
                      <DropdownMenuItem>   <Badge className="bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-300" variant="outline">
                Reject
              </Badge>  </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Lit House Media</TableCell>
            <TableCell>The Forgotten Realms</TableCell>
            <TableCell>A fantasy adventure set in a world of magic and mystery.</TableCell>
            <TableCell>
              <Badge className="bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-300" variant="outline">
                Rejected
              </Badge>
            </TableCell>
            <TableCell>
              <Button className="text-gray-500 dark:text-gray-400" size="sm" variant="outline">
                View
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  </div>
);

export default BookUploadRequests;
