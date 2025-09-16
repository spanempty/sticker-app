"use client";

import app from "../../firebase/credit";
import Link from "next/link";
import Image from "next/image";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import {
  // signInWithRedirect,
  // getRedirectResult,
  GoogleAuthProvider,
} from "firebase/auth";

const provider = new GoogleAuthProvider();

const auth = getAuth(app);

export default function SignUp() {
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Access form data and handle authentication here

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    if (typeof email === "string" && typeof password === "string") {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          router.push("/");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          // ..
        });
    } else {
      // Handle missing or invalid form data
      console.error("Email or password is missing or invalid.");
    }
  }
  function handleGoogleSignIn() {
    // Implement Google Sign-In logic here
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log(credential);
        return router.push("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        console.log(errorCode, " ", errorMessage, "\n", email);
        const credential = GoogleAuthProvider.credentialFromError(error);
        return credential;
      });
  }

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            alt="Your Company"
            src="/window.svg"
            width={500}
            height={500}
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">
            Crate your new account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-100"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-bg-emerald-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              {/* <div className="flex items-center justify-between"> */}
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-gray-100"
              >
                Password
              </label>
              {/* <div className="text-sm">
                  <Link
                    href="#"
                    className="font-semibold text-bg-emerald-400 hover:text-bg-emerald-300"
                  >
                    Forgot password?
                  </Link>
                </div> */}
              {/* </div> */}
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-bg-emerald-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-emerald-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-emerald-400 shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg-emerald-500"
              >
                Sign in
              </button>
            </div>
          </form>
          <p className="mt-10 text-center">or</p>
          <div className="w-full flex flex-row justify-center">
            <button
              className="mt-5 flex w-full max-w-sm items-center justify-center gap-3 rounded-sm bg-white/90 px-3 py-1.5 text-sm/6 font-semibold text-black shadow-sm hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white size-10"
              onClick={handleGoogleSignIn}
            >
              <FcGoogle className="size-7" />
              Sign Up with Google
            </button>
          </div>
          <p className="mt-10 text-center text-sm/6 text-gray-400">
            Not a member?{" "}
            <Link
              href="/auth"
              className="font-semibold text-bg-emerald-400 hover:text-bg-emerald-300"
            >
              Crate an account
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
