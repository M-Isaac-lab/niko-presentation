import { createContext, useContext, useMemo } from "react";

type SlidesContextValue = {
  slideIds: string[];
  indexById: Record<string, number>; // 0-based
};

const SlidesContext = createContext<SlidesContextValue | null>(null);

export function SlidesProvider({
  slideIds,
  children,
}: {
  slideIds: string[];
  children: React.ReactNode;
}) {
  const value = useMemo<SlidesContextValue>(() => {
    const indexById: Record<string, number> = {};
    slideIds.forEach((id, i) => {
      indexById[id] = i;
    });
    return { slideIds, indexById };
  }, [slideIds]);

  return <SlidesContext.Provider value={value}>{children}</SlidesContext.Provider>;
}

export function useSlides() {
  const ctx = useContext(SlidesContext);
  if (!ctx) throw new Error("useSlides must be used within SlidesProvider");
  return ctx;
}

export function useSlideNumber(id: string) {
  const ctx = useContext(SlidesContext);
  if (!ctx) return undefined;

  const idx = ctx.indexById[id];
  if (typeof idx !== "number") return undefined;
  return idx + 1;
}
