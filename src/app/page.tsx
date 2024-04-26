import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { buttonVariants } from "@/components/ui/button"


import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <h1>Waste Management App</h1>
        <SignedIn>
          {/* Mount the UserButton component */}
          <UserButton />
        </SignedIn>
        <SignedOut>
          {/* Signed out users get sign in button */}
          <SignInButton />
        </SignedOut>
      </header>
      <div className="flex">
        <Button>Analytics</Button>
        <Button>Week Analytics</Button>
        <Button>Area Analytics</Button>
        <Button>My Dustbins</Button>
        <Link href="/addadustbin" className={buttonVariants({ variant: "default" })}>Add A Dustbin</Link>
        {/* <Button>
          <Link href="/addadustbin"></Link>
          Add A Dustbin
        </Button> */}
      </div>
    </>
  );
}
