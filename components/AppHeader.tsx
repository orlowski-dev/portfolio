import Image from "next/image";
import "./AppHeader.scss";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

export default function AppHeader() {
  return (
    <header className="app-header">
      <div className="container">
        <div>
          <Link href="/">
            <Image src="/logo.svg" height={24} width={42} alt="logo" priority />
          </Link>
        </div>
        <div className="links">
          <Link
            href="https://github.com/orlowski-dev"
            target="_blank"
            title="Profil GitHub"
            className="gh-link"
          >
            <FaGithub />
          </Link>
          <Link href="/" target="_blank" className="cv-link">
            Moje CV
          </Link>
        </div>
      </div>
    </header>
  );
}
