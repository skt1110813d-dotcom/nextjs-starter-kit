"use client";

import { useEffect, useState } from "react";

/**
 * 미디어 쿼리를 감지하는 커스텀 훅
 * @param query - 미디어 쿼리 문자열 (예: "(min-width: 768px)")
 * @returns 미디어 쿼리가 매치되는지 여부
 */
export function useMediaQuery(query: string): boolean {
  // Lazy initialization으로 초기값 설정
  const [matches, setMatches] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    const media = window.matchMedia(query);

    // 현재 값과 다를 때만 업데이트
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    // 변경 감지 리스너
    const listener = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };

    // 리스너 등록
    media.addEventListener("change", listener);

    // 정리
    return () => media.removeEventListener("change", listener);
  }, [query, matches]);

  return matches;
}

// 자주 사용하는 미디어 쿼리 훅들
export const useIsMobile = () => useMediaQuery("(max-width: 768px)");
export const useIsTablet = () => useMediaQuery("(min-width: 768px) and (max-width: 1024px)");
export const useIsDesktop = () => useMediaQuery("(min-width: 1024px)");
