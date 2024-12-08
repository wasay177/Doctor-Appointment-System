import DoctorForm from "@/components/ApplyForm";
import { auth } from "../../../../auth";

export default async function ApplyAsDoctor() {
  const session = await auth()
  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-2xl ml-10 mt-10">
        Apply as a Doctor in our Platform
      </h1>
      <p className="text-secondary-foreground ml-10 my-5">
        Apply as a Doctor in our Platform Apply as a Doctor in our Platform
        Apply as a Doctor in our Platform Apply as a Doctor in our Platform
        Apply as a Doctor in our Platform Apply as a Doctor in our Platform 
        Apply as a Doctor in our Platform Apply as a Doctor in our Platform
        Apply as a Doctor in our Platform{" "}  
      </p>

      <DoctorForm session={session} />
    </div>
  );  
}