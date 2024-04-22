import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

export default function Home() {
  return (
    <>
    <header style={{ display: "flex", justifyContent: "space-between", padding: 10 }}>
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
    </>
    
)
}
