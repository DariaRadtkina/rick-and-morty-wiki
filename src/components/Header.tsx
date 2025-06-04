import Link from "next/link";
import clsx from "clsx";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const navLinks = [
    { href: "/", label: "Characters" },
    { href: "/episodes", label: "Episodes" },
    { href: "/locations", label: "Location" },
  ];

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div className="container">
          <Link
            className="navbar-brand fs-3 ubuntu text-decoration-none"
            href="/"
          >
            Rick & Morty <span className="text-primary">WiKi</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-controls="navbarNav"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={clsx(
              "collapse",
              "navbar-collapse",
              "justify-content-end",
              isOpen && "show",
            )}
            id="navbarNav"
          >
            <div className="navbar-nav fs-5">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  className={clsx(
                    "nav-link text-decoration-none pb-2",
                    router.pathname === href
                      ? "active text-primary fw-semibold"
                      : "text-gray",
                  )}
                  href={href}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
