"use client";

import app from "../../firebase/credit";
import { getAuth, sendEmailVerification } from "firebase/auth";

const auth = getAuth(app);

export default function SignOutButton() {
  const user = auth.currentUser;

  const handleSignOut = async () => {
    try {
      if (user) {
        sendEmailVerification(user).then(() => {
          // Email verification sent!
          console.log("Email verification sent to " + user.email);
          // ...
        });
      }
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  return <button onClick={handleSignOut}>Sign Out</button>;
}
