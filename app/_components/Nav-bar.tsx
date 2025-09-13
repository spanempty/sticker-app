"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import type { User } from "firebase/auth";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ImageLogo from "./Images";
import app from "../../firebase/credit";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
// import SignOutButton from "./SignoutButton";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";

const auth = getAuth(app);

const dUser = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageLogoUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Customization", href: "#", current: false },
];
const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Settings", href: "/settings" },
];

function classNames(...classes: (string | undefined | null | boolean)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push("/auth");
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  });

  // Rendering logic moved outside useEffect
  if (user) {
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    console.log(
      "user displayName:",
      displayName +
        "\n" +
        "user email:" +
        email +
        "\n" +
        "user photoURL:" +
        photoURL
    );

    if (typeof email === "string") {
      return (
        <Disclosure as="nav" className="bg-neutral-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-25 items-center justify-between">
              <div className="flex items-center">
                <div className="shrink-0">
                  <ImageLogo />
                </div>
                <div className="m-r-20 m-l-7 m-5 font-mono">Hairy Sticker</div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? "page" : undefined}
                        className={classNames(
                          item.current
                            ? "bg-gray-950/50 text-white"
                            : "text-gray-300 hover:bg-white/5 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <MenuButton className="relative flex max-w-xs items-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <Image
                        alt=""
                        src={photoURL ? photoURL : dUser.imageLogoUrl}
                        width={500}
                        height={500}
                        className="size-8 md:size-9 lg:size-10 2xl:size-11 @max-4xl:size-13 rounded-full outline -outline-offset-1 outline-white/10"
                      />
                    </MenuButton>

                    <MenuItems
                      transition
                      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-800 py-1 outline-1 -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                    >
                      {userNavigation.map((item) => (
                        <MenuItem key={item.name}>
                          <Link
                            href={item.href}
                            className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:outline-hidden"
                          >
                            {item.name}
                          </Link>
                        </MenuItem>
                      ))}
                      <MenuItem key={"Sign Out"}>
                        <button
                          onClick={handleSignOut}
                          className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:outline-hidden"
                        >
                          Sign Out
                        </button>
                      </MenuItem>
                    </MenuItems>
                  </Menu>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon
                    aria-hidden="true"
                    className="block size-6 group-data-open:hidden"
                  />
                  <XMarkIcon
                    aria-hidden="true"
                    className="hidden size-6 group-data-open:block"
                  />
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.current
                      ? "bg-gray-950/50 text-white"
                      : "text-gray-300 hover:bg-white/5 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
            <div className="border-t border-white/10 pt-4 pb-3">
              <div className="flex items-center px-5">
                <div className="shrink-0">
                  <Image
                    alt=""
                    src={photoURL ? photoURL : dUser.imageLogoUrl}
                    width={500}
                    height={500}
                    className="size-10 rounded-full outline -outline-offset-1 outline-white/10"
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base/5 font-medium text-white">
                    {displayName}
                  </div>
                  <div className="text-sm font-medium text-gray-400">
                    {email}
                  </div>
                </div>
              </div>
              <div className="mt-3 space-y-1 px-2">
                {userNavigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-white/5 hover:text-white"
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
                <DisclosureButton
                  onClick={handleSignOut}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-white/5 hover:text-white"
                >
                  Sign Out
                </DisclosureButton>
              </div>
            </div>
          </DisclosurePanel>
        </Disclosure>
      );
    }
  } else {
    return (
      <Disclosure as="nav" className="bg-gray-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-25 items-center justify-between">
            <div className="flex items-center">
              <div className="shrink-0">
                <ImageLogo />
              </div>
              <div className="m-r-20 m-l-7 m-5 font-mono sm:text-sm md:text-lg lg:text-2xl">
                Hairy Sticker
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? "page" : undefined}
                      className={classNames(
                        item.current
                          ? "bg-gray-950/50 text-white"
                          : "text-gray-300 hover:bg-white/5 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center gap-10 md:ml-6">
                {/* This is the large navbar button */}

                <div className="relative ml-3">
                  <button
                    className="p-0.5 px-4 border-1 mx-3 sm:p-1 md:p-1.5 lg:p-2 2xl:p-2 border-gray-200 hover:ring-2 hover:ring-offset-cyan-700 rounded-sm hover:bg-gray-800"
                    onClick={() => router.push("/auth")}
                  >
                    Login
                  </button>
                  <button
                    className="p-0.5 px-4 border-1 mx-3 sm:p-1 md:p-1.5 lg:p-2 2xl:p-2 border-gray-200 hover:ring-2 hover:ring-offset-cyan-700 rounded-sm hover:bg-gray-800"
                    onClick={() => router.push("/register")}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
            {/* This is the small navbar button */}

            <div className="-mr-2 flex md:hidden">
              <button
                className="p-0.5 px-2 border-1 mx-3 sm:p-1 sm:px-4 text-xs sm:text-sm border-gray-200 hover:ring-2 hover:ring-offset-cyan-700 rounded-sm hover:bg-gray-800"
                onClick={() => router.push("/auth")}
              >
                Login
              </button>
              <button
                className="p-0.5 px-2 border-1 mx-3 sm:p-1 sm:px-4 text-xs sm:text-sm border-gray-200 hover:ring-2 hover:ring-offset-cyan-700 rounded-sm hover:bg-gray-800"
                onClick={() => router.push("/register")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </Disclosure>
    );
  }
}
