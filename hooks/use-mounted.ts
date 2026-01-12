"use client";

import { useSyncExternalStore } from "react";

/**
 * 컴포넌트가 마운트되었는지 확인하는 훅
 * 하이드레이션 불일치를 방지하는 데 유용
 * useSyncExternalStore를 사용하여 React 19 권장사항 준수
 */
export function useMounted() {
  return useSyncExternalStore(
    () => () => {}, // subscribe (no-op, 변경 감지 불필요)
    () => true, // getSnapshot (클라이언트에서 항상 true)
    () => false // getServerSnapshot (서버에서 항상 false)
  );
}
