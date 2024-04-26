import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

const Header = () => {
  const { userId } = auth();

  return (
    <nav className="flex items-center justify-center px-6 py-4 mb-5 bg-green-950">
      <div className="flex items-center">
        <Link href="/">
          <div className="text-lg font-bold text-white align-top">MERADustbin</div>
        </Link>
      </div>
      <div className="flex items-center text-white">
        {!userId && (
          <>
            <Link
              href="sign-in"
              className="text-gray-300 hover:text-white mr-4"
            >
              Sign In
            </Link>
            <Link
              href="sign-up"
              className="text-gray-300 hover:text-white mr-4"
            >
              Sign Up
            </Link>
          </>
        )}
        {userId && (
          <Link href="profile" className="text-gray-300 hover:text-white mr-4">
            Profile
          </Link>
        )}
        <div className="ml-auto">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </nav>
  );
};

export default Header;