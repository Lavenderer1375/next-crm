import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <>
      <header className="header">
        <Link href="/">
          <h2>NextJS CRM Project</h2>
        </Link>
        <Link href="/add-customer">Add Customer</Link>
      </header>
      <div className="main">{children}</div>
      <footer className="footer">
        <p>
          <a
            href="https://github.com/Lavenderer1375"
            target="_blank"
            rel="noreferrer"
          >
            My GitHub
          </a>{" "}
          | Created by Kianoush &copy; 2025
        </p>
      </footer>
    </>
  );
};

export default Layout;
