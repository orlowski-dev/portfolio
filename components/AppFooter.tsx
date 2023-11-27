import Link from "next/link";
import "./AppFooter.scss";
import { FaEnvelope, FaGithub } from "react-icons/fa6";

export default function AppFooter() {
  return (
    <footer className="app-footer">
      <div className="container">
        <p>
          <FaGithub />
          <Link href="https://github.com/orlowski-dev" target="_blank">
            @orlowski-dev
          </Link>
        </p>
        <p>
          <FaEnvelope />
          <Link href="mailto:orlowski.dev@gmail.com" target="_blank">
            orlowski.dev@gmail.com
          </Link>
        </p>
      </div>
    </footer>
  );
}
