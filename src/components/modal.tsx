import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { KeyRound } from "lucide-react";

const Modal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="relative overflow-hidden group cursor-pointer">
          <span className="invisible">It's yo boy 😌✋</span>
          <span className="absolute top-0 left-0 group-hover:-translate-y-full transition-transform ease-in-out duration-500 hover:duration-300">
            It's yo boy 😌✋
          </span>
          <span className="absolute top-0 left-0 translate-y-full group-hover:translate-y-0 transition-transform ease-in-out duration-500 hover:duration-300">
            Write ✨✒️
          </span>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>What's the password? 🔒</DialogTitle>
          <DialogDescription>
            You need to enter the password to access this content.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="flex flex-1 gap-2">
            <Input id="link" placeholder="Enter the password" type="password" />
            <Button type="submit" size="sm" className="px-3">
              <KeyRound strokeWidth={2} />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
