import Link from "next/link";
import { FiLogOut } from "react-icons/fi";
import { VscListSelection } from "react-icons/vsc";
import { BiMessageSquareAdd } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";
import { signOut, useSession } from "next-auth/react";

function Layout({ children }) {
  const logOutHandler = () => {
    signOut();
  };
  const { status } = useSession();
  return (
    <div className="container">
      <header>
        <p>Todo Next App</p>
        {status === "authenticated" && (
          <button onClick={logOutHandler}>
            Log Out <FiLogOut />
          </button>
        )}
      </header>
      <div className="container--main">
        <aside>
          <p>Welcome 👋</p>
          <ul>
            <li>
              <VscListSelection />
              <Link href={"/"}>Todos</Link>
            </li>
            <li>
              <BiMessageSquareAdd />
              <Link href={"/add-todo"}>Add Todo</Link>
            </li>
            <li>
              <RxDashboard />
              <Link href={"/profile"}>Profile</Link>
            </li>
          </ul>
        </aside>
        <section>{children}</section>
      </div>
    </div>
  );
}

export default Layout;
