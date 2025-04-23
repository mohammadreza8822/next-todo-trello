import { signOut } from "next-auth/react";
import React, { useEffect } from "react";

function SignOutPage() {
  useEffect(() => {
    signOut({ callbackUrl: "/signin", redirect: true });
  }, []);
  return <p>Signing out...</p>;
}

export default SignOutPage;
