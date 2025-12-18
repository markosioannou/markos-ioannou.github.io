import React, {useEffect, useRef} from "react";
import {useColorMode} from "@docusaurus/theme-common";

export default function GiscusComments() {
  const ref = useRef<HTMLDivElement | null>(null);
  const {colorMode} = useColorMode();

  useEffect(() => {
    if (!ref.current) return;

    // Prevent injecting twice (hot reload / route changes)
    if (ref.current.hasChildNodes()) return;

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";

    script.setAttribute("data-repo", "markosioannou/markosioannou.github.io");
    script.setAttribute("data-repo-id", "R_kgDOQmGG9g");
    script.setAttribute("data-category", "Announcements");
    script.setAttribute("data-category-id", "DIC_kwDOQmGG9s4Cz9O_");
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "bottom");
    script.setAttribute("data-lang", "en");

    // Theme: either keep your fixed theme, or make it follow light/dark
    // Fixed (your current choice):
    // script.setAttribute("data-theme", "catppuccin_macchiato");

    // Follow Docusaurus color mode (recommended):
    script.setAttribute(
      "data-theme",
      colorMode === "dark" ? "catppuccin_macchiato" : "light"
    );

    ref.current.appendChild(script);
  }, [colorMode]);

  return (
    <div style={{marginTop: "2rem"}}>
      <div ref={ref} />
    </div>
  );
}