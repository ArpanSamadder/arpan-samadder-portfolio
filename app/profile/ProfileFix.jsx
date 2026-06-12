"use client";

import { useEffect } from "react";

export default function ProfileFix() {
  useEffect(() => {
    const title = window.document.getElementById("profile-title");
    if (!title) return;
    title.className = "profile-title-fixed";
    title.innerText = "A Business Communicator With An\nExecution-First Mindset";
    title.style.whiteSpace = "pre-line";
    title.style.color = "#ffffff";
    title.style.fontSize = "clamp(25px, 2.48vw, 34px)";
    title.style.lineHeight = "1.08";
  }, []);

  return null;
}
