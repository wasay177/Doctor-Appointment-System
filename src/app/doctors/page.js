import DoctorsSection from "@/components/DoctorsSection";
import Header from "@/components/Header";


export default function Doctors({ searchParams }) {
  console.log("searcParams=>", searchParams);
  return (
    <div>
      <DoctorsSection />  
    </div>
  );  
}