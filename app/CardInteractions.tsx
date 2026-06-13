"use client";

import { useEffect } from "react";

export default function CardInteractions() {
  useEffect(() => {
    const cleanups: Array<() => void> = [];

    const hirePage = document.querySelector<HTMLElement>(".hire-page");

    if (hirePage) {
      const style = document.createElement("style");
      style.setAttribute("data-hire-me-fixes", "true");
      style.textContent = `
        .hire-page .nav-pill a[href="/hire-me"],
        .hire-page .mobile-menu-panel a[href="/hire-me"] {
          display: none !important;
        }

        .hire-page .connect-actions .hire-action,
        .hire-page .hire-hero-actions .hire-action {
          cursor: pointer;
        }
      `;
      document.head.appendChild(style);
      cleanups.push(() => style.remove());

      const gmailComposeUrl =
        "https://mail.google.com/mail/?view=cm&fs=1&to=arpansamadder110@gmail.com&su=Portfolio%20Opportunity&body=Hello%20Arpan%2C%0A%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.";

      document
        .querySelectorAll<HTMLAnchorElement>(".hire-page a[href^='mailto:arpansamadder110@gmail.com']")
        .forEach((link) => {
          link.href = gmailComposeUrl;
          link.target = "_blank";
          link.rel = "noopener noreferrer";
        });

      document
        .querySelectorAll<HTMLAnchorElement>(".hire-page a[href='/Arpan_Samadder_CV.pdf'], .hire-page a[download]")
        .forEach((link) => {
          link.href = "/api/download-cv";
          link.setAttribute("download", "Arpan_Samadder_CV.pdf");
        });
    }

    const cards = Array.from(
      document.querySelectorAll<HTMLElement>(".home-page .experience-card, .home-page .project-card")
    );

    cards.forEach((card) => {
      const detailHref = card.classList.contains("project-card") ? "/projects" : "/experience";

      card.tabIndex = 0;
      card.setAttribute("aria-expanded", card.classList.contains("is-expanded") ? "true" : "false");

      if (!card.querySelector(".card-detail-link")) {
        const detailLink = document.createElement("a");
        detailLink.href = detailHref;
        detailLink.className = "card-detail-link";
        detailLink.textContent = "View Details";
        detailLink.setAttribute("aria-label", `View details for ${detailHref === "/projects" ? "this project" : "this experience"}`);
        detailLink.addEventListener("click", (event) => event.stopPropagation());
        card.appendChild(detailLink);
      }

      const setExpanded = (nextState: boolean) => {
        card.classList.toggle("is-expanded", nextState);
        card.setAttribute("aria-expanded", nextState ? "true" : "false");
      };

      const collapseSiblings = () => {
        const siblings = Array.from(
          card.parentElement?.querySelectorAll<HTMLElement>(".experience-card, .project-card") ?? []
        );

        siblings.forEach((sibling) => {
          if (sibling !== card) {
            sibling.classList.remove("is-expanded");
            sibling.setAttribute("aria-expanded", "false");
          }
        });
      };

      const handleToggle = (event: Event) => {
        const target = event.target as HTMLElement | null;
        if (target?.closest("a")) return;

        const shouldExpand = !card.classList.contains("is-expanded");
        collapseSiblings();
        setExpanded(shouldExpand);
      };

      const handleKeydown = (event: KeyboardEvent) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          handleToggle(event);
        }
      };

      card.addEventListener("click", handleToggle);
      card.addEventListener("keydown", handleKeydown);

      cleanups.push(() => {
        card.removeEventListener("click", handleToggle);
        card.removeEventListener("keydown", handleKeydown);
      });
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return null;
}
