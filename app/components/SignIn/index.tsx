"use client";

import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const SignIn = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <>
        <p className="text-sky-600">{session.user.name}</p>
        <button
          onClick={() => signOut()}
          className="text-white font-bold hover:underline hover:text-gray-200 block md:inline-block mt-4 md:mt-0 md:ml-6"
        >
          Logout
        </button>
      </>
    );
  }
  return (
    <button
      onClick={() => signIn()}
      className="text-white font-bold hover:underline hover:text-gray-200 block md:inline-block mt-4 md:mt-0 md:ml-6"
    >
      Login
    </button>
  );
};

export default SignIn;
