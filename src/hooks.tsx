import { useEffect, useState } from "react";

export function useTypewriter(texts: string[], speed = 40, hold = 1200) {
  const [index, setIndex] = useState(0); // which string
  const [subIndex, setSubIndex] = useState(0); // how many chars visible
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!texts.length) return;
    const current = texts[index % texts.length];

    // timing
    const timeout = setTimeout(
      () => {
        // done typing, hold before deleting
        if (!deleting && subIndex === current.length) {
          setDeleting(true);
          return;
        }
        // finished deleting, move to next
        if (deleting && subIndex === 0) {
          setDeleting(false);
          setIndex((i) => (i + 1) % texts.length);
          return;
        }
        setSubIndex((s) => s + (deleting ? -1 : 1));
      },
      !deleting ? speed : Math.max(20, speed / 2)
    );

    // extra hold time when full word is shown
    if (!deleting && subIndex === current.length) {
      const holdTimer = setTimeout(() => setSubIndex((s) => s), hold);
      return () => {
        clearTimeout(holdTimer);
        clearTimeout(timeout);
      };
    }

    return () => clearTimeout(timeout);
  }, [texts, index, subIndex, deleting, speed, hold]);

  const currentText = texts[index % texts.length]?.slice(0, subIndex) ?? "";
  return currentText;
}
