"use client";
import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <>
      <SignUp routing="hash" signInUrl="/signin" />
    </>
  );
}
