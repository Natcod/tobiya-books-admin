
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button";

const PublisherProfile = ({ user, setViewingUser }) =>{
  return (
    <div className="mx-auto max-w-md px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex items-center space-x-4">
        <Avatar className="h-16 w-16">
          <AvatarImage alt="User Avatar" src="/placeholder-user.jpg" />
          <AvatarFallback>JP</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-xl font-bold">John Doe</h2>
          <p className="text-gray-500 dark:text-gray-400">johndoe@example.com</p>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-4">
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
          <h3 className="text-lg font-medium">Books Subscribed</h3>
          <p className="text-4xl font-bold">24</p>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
          <h3 className="text-lg font-medium">Books Bought</h3>
          <p className="text-4xl font-bold">12</p>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-medium">Address</h3>
        <p className="text-gray-500 dark:text-gray-400">123 Main Street, Anytown USA 12345</p>
      </div>
      <Button onClick={() => setViewingUser(null)}>Back to Publisher Management</Button>
    </div>
  )
}

export default PublisherProfile;