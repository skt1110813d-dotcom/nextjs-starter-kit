"use client";

import { useEffect, useState } from "react";

/**
 * 컴포넌트가 마운트되었는지 확인하는 훅
 * 하이드레이션 불일치를 방지하는 데 유용
 */
export function useMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}
