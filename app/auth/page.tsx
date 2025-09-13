"use client";

import { useState } from "react";
import app from "@/firebase/credit";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"; // Adjust path as needed
import { signInWithEmailAndPassword } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("welcome ", user.emailVerified);
        return router.push("/");
      })
      .catch((err) => {
        setError(err.message);
        console.error("Login error:", error);
      });
  };
  //   try {
  //     // Login successful! Redirect to home
  //     router.push("/");
  //   } catch (err: any) {
  //     setError(err.message);
  //     console.error("Login error:", err);
  //     console.log("failed to login");
  //   }
  // };

  function handleGoogleSignIn() {
    // Implement Google Sign-In logic here
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("welcome ", result.user.emailVerified);
        return router.push("/");
      })
      .catch((error) => {
        setError(error.message);
        console.error("Google sign-in error:", error);
      });
  }

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="/window.svg"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">
            Sign in to your account
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
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="example@abc.com"
                  autoComplete="email"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-bg-emerald-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-100"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-bg-emerald-400 hover:text-bg-emerald-300"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-bg-emerald-500 sm:text-sm/6 "
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-emerald-500 px-3 py-1.5 text-sm/6 font-semibold text-black hover:bg-emerald-300 hover:cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bg-emerald-500"
              >
                Sign in
              </button>
            </div>
          </form>
          <p className="mt-10 text-center">or</p>
          <div className="w-full flex flex-row justify-center">
            <button
              className="mt-5 flex w-full max-w-sm items-center justify-center gap-3 rounded-sm bg-white/90 px-3 py-1.5 text-sm/6 font-semibold text-black shadow-sm hover:bg-white hover:cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white size-10"
              onClick={handleGoogleSignIn}
            >
              <FcGoogle className="size-7" />
              Login with Google
            </button>
          </div>
          <p className="mt-10 text-center text-sm/6 text-gray-400">
            Already have an account?{" "}
            <a
              href="/"
              className="font-semibold text-bg-emerald-400 hover:text-bg-emerald-300"
            >
              LogIn
            </a>
          </p>
        </div>
      </div>
      {/* {incorrectCredit ? (
        <p className="text-red-500 text-center mt-4">
          Incorrect email or password.
        </p>
      ) : null} */}
      {/* <div>
      <h1>Login</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div> */}
    </>
  );
}
