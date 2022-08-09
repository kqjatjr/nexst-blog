import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChangeEvent, KeyboardEvent } from "react";
import Container from "./Container";

type TProps = {
  value?: string;
  placeholder?: string;
  onChangeInputValue?: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickLogo?: () => void;
  onKeyPressSesrchKey?: (e: KeyboardEvent<HTMLInputElement>) => void;
};

const NavBar = ({
  value,
  onChangeInputValue,
  onKeyPressSesrchKey,
  onClickLogo,
  placeholder,
}: TProps) => {
  const router = useRouter();

  return (
    <Container className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown z-50 ">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-[100] "
          >
            {router.pathname === "/" && (
              <input
                type="text"
                placeholder={placeholder}
                className="input"
                value={value}
                onChange={onChangeInputValue}
                onKeyUp={onKeyPressSesrchKey}
              />
            )}
            <li tabIndex={0} className="w-[150px] ">
              <a className="justify-between">
                자사 제품
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
              <ul className="p-2 bg-white">
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
        </div>
        <Link href="/" passHref>
          <div
            className="btn btn-link relative w-[25vw] "
            onClick={onClickLogo}
          >
            <a>
              <Image
                src="https://www.rsupport.com/ko-kr/wp-content/uploads/sites/2/2015/11/rsupport.svg"
                alt={"Thumbnail"}
                layout="fill"
                objectFit="contain"
              />
            </a>
          </div>
        </Link>
      </div>

      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0 relative z-50  text-gray-500 ">
          <li className="w-full ">
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
            <ul className="p-2 w-full bg-white ">
              <li className="active:bg-secondary-content">
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
        {router.pathname === "/" && (
          <input
            type="text"
            placeholder={placeholder}
            className="input"
            value={value}
            onChange={onChangeInputValue}
            onKeyUp={onKeyPressSesrchKey}
          />
        )}
      </div>
    </Container>
  );
};

export default NavBar;
