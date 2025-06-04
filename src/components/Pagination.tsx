import clsx from "clsx";
import Link from "next/link";

interface PaginationProps {
  currentPage?: number;
}

export default function Pagination({ currentPage = 1 }: PaginationProps) {
  return (
    <ul className="pagination justify-content-center my-4 gap-4">
      <li
        className={clsx(
          "btn",
          "btn-primary",
          "fs-5",
          "prev",
          currentPage === 1 && "disabled",
        )}
      >
        <Link
          href="#"
          tabIndex={currentPage === 1 ? -1 : 0}
          role="button"
          aria-disabled={currentPage === 1}
          aria-label="Previous page"
          rel="prev"
          className="text-white text-decoration-none"
        >
          Prev
        </Link>
      </li>
      <li className={clsx("page-item", currentPage === 1 && "active")}>
        <Link
          href="#"
          className="page-link"
          role="button"
          tabIndex={0}
          aria-label="Page 1 is your current page"
          aria-current={currentPage === 1 ? "page" : undefined}
        >
          1
        </Link>
      </li>
      <li className={clsx("page-item", currentPage === 2 && "active")}>
        <Link
          href="#"
          className="page-link"
          role="button"
          tabIndex={0}
          aria-label="Page 1 is your current page"
          aria-current={currentPage === 2 ? "page" : undefined}
        >
          2
        </Link>
      </li>

      <li className={clsx("page-item", currentPage === 3 && "active")}>
        <Link
          href="#"
          className="page-link"
          role="button"
          tabIndex={0}
          aria-label="Page 1 is your current page"
          aria-current={currentPage === 3 ? "page" : undefined}
        >
          3
        </Link>
      </li>
      <li className="break">
        <span role="button" tabIndex={0} aria-label="More pages">
          ...
        </span>
      </li>
      <li className={clsx("page-item", currentPage === 41 && "active")}>
        <Link
          href="#"
          className="page-link"
          role="button"
          tabIndex={0}
          aria-label="Page 1 is your current page"
          aria-current={currentPage === 41 ? "page" : undefined}
        >
          41
        </Link>
      </li>
      <li className={clsx("page-item", currentPage === 42 && "active")}>
        <Link
          href="#"
          className="page-link"
          role="button"
          tabIndex={0}
          aria-label="Page 1 is your current page"
          aria-current={currentPage === 42 ? "page" : undefined}
        >
          42
        </Link>
      </li>
      <li
        className={clsx(
          "btn",
          "btn-primary",
          "fs-5",
          "next",
          currentPage === 42 && "disabled",
        )}
      >
        <Link
          href="#"
          tabIndex={currentPage === 42 ? -1 : 0}
          role="button"
          aria-disabled={currentPage === 42}
          aria-label="Next page"
          rel="next"
          className="text-white text-decoration-none"
        >
          Next
        </Link>
      </li>
    </ul>
  );
}
