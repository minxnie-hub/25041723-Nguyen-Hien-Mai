import { List, MoonStars, Sun, X } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Hồ sơ", anchor: "about" },
  { label: "6 bài tập", anchor: "projects" },
  { label: "Tổng kết", anchor: "summary" },
];

function getInitialTheme() {
  const saved = window.localStorage.getItem("mai-theme");
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function SiteHeader({ compact = false }) {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("mai-theme", theme);
  }, [theme]);

  useEffect(() => setMenuOpen(false), [location.pathname]);

  return (
    <header className={`site-header ${compact ? "site-header-compact" : ""}`}>
      <Link className="brand-mark" to="/" aria-label="Về trang chủ của Nguyễn Hiền Mai">
        <span className="brand-monogram">HM</span>
        <span>Hiền Mai</span>
      </Link>

      <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Điều hướng chính">
        {navItems.map((item) => (
          <Link key={item.anchor} to="/" state={{ anchor: item.anchor }}>
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="header-actions">
        <button
          className="icon-button"
          type="button"
          onClick={() => setTheme((current) => (current === "light" ? "dark" : "light"))}
          aria-label={theme === "light" ? "Chuyển sang giao diện tối" : "Chuyển sang giao diện sáng"}
        >
          {theme === "light" ? <MoonStars aria-hidden="true" /> : <Sun aria-hidden="true" />}
        </button>
        <button
          className="icon-button menu-button"
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Đóng menu" : "Mở menu"}
        >
          {menuOpen ? <X aria-hidden="true" /> : <List aria-hidden="true" />}
        </button>
      </div>
    </header>
  );
}
