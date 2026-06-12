"use client";

import { useEffect } from "react";

export default function CardInteractions() {
  useEffect(() => {
    const cards = Array.from(
      document.querySelectorAll<HTMLElement>(".home-page .experience-card, .home-page .project-card")
    );

    const cleanups: Array<() => void> = [];

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
