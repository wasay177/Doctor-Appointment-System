import { Button } from "@/components/ui/button";
import { auth, signIn } from "../../../auth";
import { redirect } from "next/navigation";

export default async function Signin() {
  const session = await auth();
  if (session) redirect("/")
  return (
    <div className="min-h-screen flex container mx-auto justify-center items-center">
      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <Button variant = {"outline"}>Continue with GOOGLE</Button>
      </form>    
    </div>
  );    
} 


// Sign in auth by console.cloud.google.com
// Create a new project with new name and select that project
// Go to API & Services folder and select OAuth consent screen
// Select External mode, app name, support email, in developer contact information write email in it,
// If you want to add a test user in it you can otherwise it is not necessary to add in it and write email in it,
// Publish app and confirm it
// Go to Credentials Create Credentials select OAuth client ID
// Application type, name and give htt://localhost 3000/api/auth/callback/google link in it (vercel link/api/auth/callback/google) again submit this in authorized redirect URIs and create it