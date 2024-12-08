import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { EyeIcon } from "lucide-react";

export default function DoctorDetailSheet({ doctor }) {
  return (
    <Sheet>
      <SheetTrigger>
        <EyeIcon />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Doctor Detail</SheetTitle>
          <SheetDescription>
          <div className="flex gap-3">
            <h1 className="font-bold text-xl">
              {doctor.user.firstName + " " + (doctor?.user?.lastName || "")}
            </h1>
            <Avatar className="self-center h-10 w-10">
              <Image fill={true} src={doctor.user.picture} /> 
              <AvatarFallback>DAS</AvatarFallback> 
            </Avatar>
          </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>   
    );
  }