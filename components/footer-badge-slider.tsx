"use client";

import { useEffect, useRef, type ReactNode } from "react";
import styles from "./footer-badge-slider.module.css";

export function FooterBadgeSlider({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const viewport = viewportRef.current;
    const group = groupRef.current;
    if (!root || !viewport || !group) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const controller = new AbortController();
    const { signal } = controller;
    let copy: HTMLElement | undefined;

    const ensureCopy = () => {
      if (copy) return;
      copy = group.cloneNode(true) as HTMLElement;
      copy.setAttribute("aria-hidden", "true");
      copy.classList.add(styles.copy);
      copy.querySelectorAll("a").forEach((link) => {
        link.tabIndex = -1;
      });
      group.after(copy);
    };

    let hovered = false;
    let touching = false;
    let manualUntil = 0;
    let position = viewport.scrollLeft;
    let previousTime = 0;
    let frame = 0;
    let visible = false;
    let width = 0;
    const observer = new ResizeObserver(() => {
      width = group.getBoundingClientRect().width;
    });
    observer.observe(group);

    const updateMotion = () => {
      if (copy) copy.hidden = motion.matches;
      position = viewport.scrollLeft;
    };
    updateMotion();
    motion.addEventListener("change", updateMotion, { signal });
    root.addEventListener(
      "pointerenter",
      (event) => {
        hovered = event.pointerType === "mouse";
      },
      { signal },
    );
    root.addEventListener(
      "pointerleave",
      () => {
        hovered = false;
      },
      { signal },
    );
    viewport.addEventListener(
      "pointerdown",
      () => {
        touching = true;
      },
      { signal },
    );
    const release = () => {
      if (touching) manualUntil = performance.now() + 1500;
      touching = false;
    };
    window.addEventListener("pointerup", release, { signal });
    window.addEventListener("pointercancel", release, { signal });
    viewport.addEventListener(
      "wheel",
      () => {
        manualUntil = performance.now() + 1500;
      },
      { signal, passive: true },
    );
    viewport.addEventListener(
      "focusin",
      (event) => {
        const link = event.target;
        if (!(link instanceof HTMLAnchorElement)) return;
        const bounds = viewport.getBoundingClientRect();
        const badge = link.getBoundingClientRect();
        if (badge.left < bounds.left || badge.right > bounds.right) {
          viewport.scrollLeft += badge.left - bounds.left - (bounds.width - badge.width) / 2;
        }
        position = viewport.scrollLeft;
      },
      { signal },
    );

    const tick = (time: number) => {
      const elapsed = previousTime ? Math.min(time - previousTime, 64) : 0;
      previousTime = time;
      if (
        hovered ||
        touching ||
        motion.matches ||
        document.hidden ||
        root.matches(":focus-within") ||
        time < manualUntil
      ) {
        position = viewport.scrollLeft;
      } else if (width > 0) {
        position = (position + elapsed * 0.032) % width;
        viewport.scrollLeft = position;
      }
      if (visible && !motion.matches && !document.hidden) frame = requestAnimationFrame(tick);
    };

    const updateAnimation = () => {
      cancelAnimationFrame(frame);
      previousTime = 0;
      if (visible && !motion.matches && !document.hidden) {
        ensureCopy();
        frame = requestAnimationFrame(tick);
      }
    };

    const visibility = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      updateAnimation();
    });
    visibility.observe(root);
    motion.addEventListener("change", updateAnimation, { signal });
    document.addEventListener("visibilitychange", updateAnimation, { signal });

    return () => {
      cancelAnimationFrame(frame);
      visibility.disconnect();
      observer.disconnect();
      controller.abort();
      copy?.remove();
    };
  }, []);

  return (
    <div ref={rootRef} className={styles.root}>
      <p id="footer-badges-label" className={styles.label}>
        Featured on
      </p>
      <div
        ref={viewportRef}
        className={styles.viewport}
        role="region"
        aria-labelledby="footer-badges-label"
        tabIndex={0}
      >
        <div className={styles.track}>
          <div ref={groupRef} className={styles.group}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
