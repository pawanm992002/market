"use client";
import {
  faBars,
  faMagnifyingGlass,
  faShop,
  faStore,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const styles = {
  shopCustLinks:
    "bg-slate-100 rounded-md h-9 px-3 text-black hover:opacity-70 items-center flex ml-auto sm:ml-1",
  navButtonMobileStyle:
    "bg-slate-100 rounded-md h-9 px-4 text-black hover:opacity-70 items-center flex justify-center text-yellow-700",
  navButtonDesktopStyle:
    "bg-slate-100 rounded-md h-9 px-4 text-black hover:opacity-70 items-center flex",
};

export default function Navbar() {
  const [showHamburger, setShowHamburger] = useState(false);

  // roles : shopkeeper, customer
  const [role, setRole] = useState("customer");
  const [searchText, setSearchText] = useState("");
  const OnSearch = async (e) => {
    if (searchText === "") {
      toast.warning("Please enter something in search");
      return;
    }

    // call search api
    // console.log(searchText);
  };
  useEffect(() => {
    // call getNavbar api
  }, []);
  return (
    <nav className="bg-slate-700 sticky top-0 z-50 h-16 min-w-screen w-screen mb-4 border-b-2 px-4 py-2">
      <div className="w-full flex items-center gap-3 max-w-screen-xl mx-auto box-border h-full">
        <div className="flex items-center gap-2 lg:gap-5">
          <Link
            href={"/"}
            className="h-12 min-w-40 w-40 flex justify-between items-center px-1 box-border"
          >
            <FontAwesomeIcon icon={faStore} size="lg" />
            <span className="font-bold text-red-300 text-lg">
              General Store
            </span>
          </Link>
        </div>
        <div className="flex flex-row gap-4 w-full justify-evenly h-full items-center mx-auto">
          <div className="max-w-72 w-1/2 sm:flex justify-between items-center min-w-7 hidden">
            <span className="w-full border bg-white rounded-lg px-3">
              <input
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                type="text"
                name="search"
                placeholder="search"
                className="h-9 w-11/12 outline-none text-black pr-2"
              />
              <FontAwesomeIcon
                className="text-black w-1/12"
                icon={faMagnifyingGlass}
                onClick={(e) => OnSearch(e)}
              />
            </span>
          </div>
          {role === "customer" && (
            <Link href={"/login"} className={styles.shopCustLinks}>
              <FontAwesomeIcon icon={faShop} size="lg" />
            </Link>
          )}
          {role === "shopkeeper" && (
            <Link href={"/login"} className={styles.shopCustLinks}>
              <FontAwesomeIcon icon={faUser} size="lg" />
            </Link>
          )}
          {/* mobile view */}
          <div className="lg:hidden relative flex items-center mr-2 w-9 h-9 justify-center ">
            <FontAwesomeIcon
              onClick={(e) => setShowHamburger(!showHamburger)}
              icon={faBars}
              size="2xl"
            />
            {showHamburger && (
              <ul className="absolute bg-slate-500 p-3 top-12 right-1 min-w-44 border-black rounded-md gap-3 flex flex-col">
                <li className="bg-slate-100 rounded-md h-9 px-4 text-black hover:opacity-70 items-center sm:hidden flex">
                  <input
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    type="text"
                    name="search"
                    placeholder="search"
                    className="h-9 w-full rounded-lg px-2 text-center outline-none text-black"
                  />
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    onClick={(e) => OnSearch(e)}
                  />
                </li>
                <li className={styles.navButtonMobileStyle}>
                  <Link href={"/profile"}>My Profile</Link>
                </li>
                <li className={styles.navButtonMobileStyle}>
                  <Link href={"/services"}>Services</Link>
                </li>
                <li className={styles.navButtonMobileStyle}>
                  <Link href={"/orders"}>Orders</Link>
                </li>
                <li className={styles.navButtonMobileStyle}>
                  <Link href={"/about"}>About</Link>
                </li>
              </ul>
            )}
          </div>
          {/* desktop view */}
          <ul className="hidden lg:flex items-center justify-center gap-2 sm:gap-4 m-0">
            <li className={styles.navButtonDesktopStyle}>
              <Link href={"/profile"}>My Profile</Link>
            </li>
            <li className={styles.navButtonDesktopStyle}>
              <Link href={"/services"}>Services</Link>
            </li>
            <li className={styles.navButtonDesktopStyle}>
              <Link href={"/orders"}>Orders</Link>
            </li>
            <li className={styles.navButtonDesktopStyle}>
              <Link href={"/about"}>About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
