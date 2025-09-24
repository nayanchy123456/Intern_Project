import React, { useState, useRef, useEffect } from "react";
import "./Sidebar.css";
import logo from "../assets/nea-header-logo.png";
import Footer from "./FooterContact/Contact";

const MAIN_MENU = [
  {
    key: "student",
    label: "STUDENT SUCCESS",
    items: [
      "Great Public Schools",
      "Engaged Families & Communities",
      "School Health & Safety",
      "Recruit & Retain Educators",
      "Teacher Quality",
      "Student Assessments",
    ],
  },
  {
    key: "rights",
    label: "YOUR RIGHTS & WORKPLACE",
    items: [
      "Fairplay and benefits",
      "Union and educator voice",
      "Student debt and support",
      "Inclusive workplaces",
      "Resource Library",
    ],
  },
  {
    key: "professional",
    label: "PROFESSIONAL EXCELLENCE",
    items: [
      "Just & Equitable Schools",
      "Student Engagement",
      "Professional Learning",
      "Leadership Development",
      "Conference & Events",
    ],
  },
  {
    key: "advocacy",
    label: "ADVOCATING FOR CHANGE",
    items: [
      "Action Center",
      "Protect Public Schools",
      "Racial Justice for students & schools",
      "Educator pay & Benefits",
      "News From NEA",
    ],
  },
  {
    key: "join",
    label: "JOIN OUR MOVEMENT",
    items: [
      "Become a member",
      "Become a Community Ally",
      "Connect with Us",
      "Join a campaign",
      "Donate",
    ],
  },
];

const EXTRA_MENU = [
  {
    key: "about",
    label: "About NEA",
    items: [
      "Our Mission, Vision & Values",
      "Our Leaders",
      "Our Members",
      "Governance & Policies",
      "Partnerships",
      "Contact Us",
      "Grants & Funding",
    ],
  },
  {
    key: "affilates",
    label: "NEA Affiliates",
    items: ["NEA Affiliates"],
  },
  {
    key: "media",
    label: "Media Center",
    items: ["Press Releases"],
  },
  {
    key: "benefits",
    label: "NEA Member Benefits",
    items: ["Insurance Programs", "Professional Tools"],
  },
  {
    key: "resources",
    label: "Resource Library",
    items: ["Teaching Resources", "Training Materials"],
  },
  {
    key: "more",
    label: "More NEA Sites +",
    items: ["NEA Today"],
  },
];

export default function Sidebar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [submenuPos, setSubmenuPos] = useState({ top: 0, left: 0 });
  const [isOpen, setIsOpen] = useState(true);
  const sidebarRef = useRef(null);

  useEffect(() => {
    function handleDocClick(e) {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener("mousedown", handleDocClick);
    return () => document.removeEventListener("mousedown", handleDocClick);
  }, []);

  const handleMouseEnter = (e, key) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setSubmenuPos({ top: rect.top, left: rect.right });
    setOpenMenu(key);
  };

  return (
    <>
      {isOpen ? (
        <aside className="sidebar" ref={sidebarRef}>
          {/* Logo */}
          <div className="logo">
            <img src={logo} alt="NEA logo" className="logo-img" />
          </div>

          {/* Close button */}
          <button className="close-btn" onClick={() => setIsOpen(false)}>
            ✖
          </button>

          <div className="menu-container">
            {/* MAIN menu */}
            <nav className="menu" aria-label="Main navigation">
              {MAIN_MENU.map((m) => (
                <div
                  className="menu-item"
                  key={m.key}
                  onMouseEnter={(e) => handleMouseEnter(e, m.key)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button className="menu-button">
                    <span className="menu-label">{m.label}</span>
                    <span className="caret">▶</span>
                  </button>
                </div>
              ))}
            </nav>

            {/* Action button */}
            <div className="action-container">
              <button className="action-btn">TAKE ACTION ▶</button>
            </div>

            {/* Search */}
            <div className="search">
              <input type="text" placeholder="Search nea.org ..." />
            </div>

            {/* EXTRA menu */}
            <div className="extra-menu">
              {EXTRA_MENU.map((m) => (
                <div
                  className="extra-item"
                  key={m.key}
                  onMouseEnter={(e) => handleMouseEnter(e, m.key)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button className="extra-button">
                    <span className="extra-label">{m.label}</span>
                    <span className="caret">▶</span>
                  </button>
                </div>
              ))}
            </div>

            {/* Footer */}
            <Footer />
          </div>

          {/* Submenu */}
          {openMenu && (
            <div
              className="submenu-overlay"
              style={{ top: submenuPos.top, left: submenuPos.left }}
              onMouseEnter={() => setOpenMenu(openMenu)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              {(MAIN_MENU.find((m) => m.key === openMenu) ||
                EXTRA_MENU.find((m) => m.key === openMenu)).items.map((it) => (
                <a key={it} href="#" className="submenu-link">
                  {it}
                </a>
              ))}
            </div>
          )}
        </aside>
      ) : (
        <button className="open-btn" onClick={() => setIsOpen(true)}>
          ☰
        </button>
      )}
    </>
  );
}
