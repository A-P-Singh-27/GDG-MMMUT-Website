import { Button } from "@/Components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/Components/ui/dialog.jsx"
import { Input } from "@/Components/ui/input"
import { Label } from "@/Components/ui/label"
import { Link } from 'react-router-dom';


export function Login() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Login</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogDescription>
            <h1 className="text-2xl font-bold">Welcome Back to GDG MMMUT! 🚀</h1>
            <p className="text-xl">Empowering innovation and fostering a vibrant developer community.</p>
            <p>Log in to access exclusive events, resources, and connect with like-minded enthusiasts!</p>
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Email
            </Label>
            <Input
              id="name"
              defaultValue="Email/ Username"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              password
            </Label>
            <Input
              id="username"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Link to={'/'}>
          <Button type="submit">Login</Button>
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
