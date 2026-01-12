/**
 * 입력 유효성 검사 유틸리티
 */

/**
 * 이메일 주소 유효성 검사
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * 한국 휴대폰 번호 유효성 검사
 */
export function isValidPhoneNumber(phone: string): boolean {
  const phoneRegex = /^01[0-9]-?[0-9]{3,4}-?[0-9]{4}$/;
  return phoneRegex.test(phone);
}

/**
 * 비밀번호 강도 검사
 * 최소 8자, 대문자, 소문자, 숫자, 특수문자 포함
 */
export function isStrongPassword(password: string): boolean {
  const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return strongPasswordRegex.test(password);
}

/**
 * URL 유효성 검사
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * 한글 이름 유효성 검사 (2-5자)
 */
export function isValidKoreanName(name: string): boolean {
  const koreanNameRegex = /^[가-힣]{2,5}$/;
  return koreanNameRegex.test(name);
}

/**
 * 빈 문자열 또는 공백만 있는지 검사
 */
export function isEmpty(value: string): boolean {
  return value.trim().length === 0;
}

/**
 * 문자열 길이 범위 검사
 */
export function isLengthInRange(
  value: string,
  min: number,
  max: number
): boolean {
  const length = value.trim().length;
  return length >= min && length <= max;
}
