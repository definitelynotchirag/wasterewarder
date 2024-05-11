"use client";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  UserButton,
  useAuth,
} from "@clerk/nextjs";

import { buttonVariants } from "@/components/ui/button";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import axios from "axios";

export default function Home() {
  const { userId } = useAuth();

  const createuser = async () => {
    try {
      await axios.post('/api/users/createuser',userId);
    } catch (error:any) {
      console.log(error.message);
    }
  };

  if (!userId) {
    return <SignIn />;
  } else {
    createuser();
  }

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
        <Link
          href="/addadustbin"
          className={buttonVariants({ variant: "default" })}
        >
          Add A Dustbin
        </Link>
        {/* <Button>
          <Link href="/addadustbin"></Link>
          Add A Dustbin
        </Button> */}
      </div>
    </>
  );
}
