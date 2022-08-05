import Image from "next/image";
import Link from "next/link";
import { ChangeEvent } from "react";
import Container from "./Container";

type TProps = {
  value: string;
  placeholder: string;
  onChangeInputValue: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSearchBtn: () => void;
};

const NavBar = ({
  value,
  onChangeInputValue,
  onClickSearchBtn,
  placeholder,
}: TProps) => {
  return (
    <Container className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown z-50">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-[100]"
          >
            <li>
              <a>
                <input />
              </a>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="btn btn-link relative w-[25vw] ">
          <Image
            src="https://www.rsupport.com/ko-kr/wp-content/uploads/sites/2/2015/11/rsupport.svg"
            alt={"Thumbnail"}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>

      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0 relative z-50  text-gray-500">
          <li className="w-full">
            <a>
              자사 제품
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2 w-full bg-white">
              <li>
                <a>RV</a>
              </li>
              <li>
                <a>RC</a>
              </li>
              <li>
                <a>RM</a>
              </li>
              <li>
                <a>RS</a>
              </li>
            </ul>
          </li>
        </ul>
        <input type="text" placeholder="Rjator" className="input" />
      </div>
    </Container>
  );
};

export default NavBar;
