import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";
import mainLogo from "../assets/mainLogoSvg.svg";

function Header() {
  const [showNav, setShowNav] = useState(false);
  const { userInfo } = useSelector((state) => state.auth);
 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();
  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };
  const menuBtnHandle = () => {
    setShowNav(!showNav);
  };

  return (
    <header className="bg-gray-100 top-0 sticky z-10 shadow-md">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          <div className="md:flex justify-center items-center md:items-center md:gap-12 w-11">
            <Link className="block text-red-600" to="">
              <img src={mainLogo} alt="main Logo" className="w-100" />
            </Link>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="text-black  text-lg transition hover:text-gray-500/75"
                    to="/"
                  >
                    {" "}
                    Home{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-black text-lg  transition hover:text-gray-500/75"
                    to="/book"
                  >
                    {" "}
                    Book{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-black text-lg  transition hover:text-gray-500/75"
                    to="/about"
                  >
                    {" "}
                    About Us{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-black text-lg  transition hover:text-gray-500/75"
                    to="/contact"
                  >
                    {" "}
                    Contact{" "}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            {userInfo?.verified? (
              <div className="sm:flex sm:gap-4">
                <button
                  className="rounded-md bg-red-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                  onClick={logoutHandler}
                >
                  Logout
                </button>

                <div className="hidden sm:flex">
                  <Link
                    className="rounded-md bg-gray-300 px-5 py-2.5 text-sm font-medium text-red-600"
                    to="/profile"
                  >
                    Profile
                  </Link>
                </div>
              </div>
            ) : (
              <div className="sm:flex sm:gap-4">
                <Link
                  className="rounded-md bg-red-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                  to="login"
                >
                  Login
                </Link>

                <div className="hidden sm:flex">
                  <Link
                    className="rounded-md bg-gray-300 px-5 py-2.5 text-sm font-medium text-red-600"
                    to="register"
                  >
                    Register
                  </Link>
                </div>
              </div>
            )}

            <div className="block md:hidden">
              <button
                onClick={menuBtnHandle}
                className="rounded bg-gray-300 p-2 text-gray-600 transition hover:text-gray-600/75"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-64 bg-red-400 p-4 ${
          showNav ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flow-root">
          <ul className="-my-2 divide-y divide-gray-100">
            <li className="py-2">
              <ul className="space-y-1">
                <li>
                  <Link
                    to="/"
                    className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-black"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    to="/book"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-black hover:bg-gray-100 hover:text-gray-700"
                  >
                    Book
                  </Link>
                </li>

                <li>
                  <Link
                    to="/contact"
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-black hover:bg-gray-100 hover:text-gray-700"
                  >
                    Projects
                  </Link>
                </li>
              </ul>
            </li>

            <li className="py-2">
              <form action="/logout">
                <button
                  type="submit"
                  className="block w-full rounded-lg px-4 py-2 text-sm font-medium text-black [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700"
                >
                  Logout
                </button>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
