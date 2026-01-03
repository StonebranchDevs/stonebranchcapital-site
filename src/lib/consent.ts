export type ConsentStatus = 'accepted' | 'declined' | 'unset';

const COOKIE_NAME = 'sb_consent';
const MAX_AGE_DAYS = 180;

export function getConsent(): ConsentStatus {
  if (typeof document === 'undefined') return 'unset';

  const match = document.cookie
    .split('; ')
    .find(row => row.startsWith(`${COOKIE_NAME}=`));

  if (!match) return 'unset';

  const value = match.split('=')[1];
  if (value === 'accepted' || value === 'declined') return value;

  return 'unset';
}

export function setConsent(value: Exclude<ConsentStatus, 'unset'>) {
  const maxAge = MAX_AGE_DAYS * 24 * 60 * 60;
  document.cookie = `${COOKIE_NAME}=${value}; path=/; max-age=${maxAge}; SameSite=Lax`;
}
