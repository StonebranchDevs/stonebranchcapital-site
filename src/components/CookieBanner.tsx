'use client';

import { useEffect, useState } from 'react';
import { getConsent, setConsent } from '@/lib/consent';
import { initAnalytics } from '@/lib/analytics';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = getConsent();
    if (consent === 'accepted') initAnalytics();
    if (consent === 'unset') setVisible(true);
    if (process.env.NODE_ENV === 'development') {
    console.log('Consent status:', consent);
    }
  }, []);

  const accept = () => {
    setConsent('accepted');
    initAnalytics();
    setVisible(false);
  };

  const decline = () => {
    setConsent('declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h3 style={styles.title}>Analytics cookies</h3>
        <p style={styles.text}>
          We use analytics to understand how the site is used and improve it.
        </p>

        <div style={styles.buttons}>
          <button
            onClick={accept}
            style={styles.accept}
            onMouseEnter={(e) => {
                e.currentTarget.style.background = '#e5e7eb'; // subtle gray
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = '0 8px 18px rgba(0,0,0,0.25)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.background = '#ffffff';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
            }}

          >
            Accept
          </button>

          <button
            onClick={decline}
            style={styles.decline}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#1e40af';
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#ffffff';
            }}
          >
            Decline
          </button>
        </div>
            <p style={styles.privacy}>
                <a href="/privacy" style={styles.privacyLink}>
                Privacy Policy
                </a>
            </p>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed' as const,
    inset: 0,
    background: 'rgba(30,30,30,0.65)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2000,
  },
  modal: {
    background: '#07375e', // on-brand navy
    padding: '18px 32px',
    borderRadius: 14,
    maxWidth: 420,
    width: '90%',
    color: '#ffffff',
    boxShadow: '0 20px 50px rgba(0,0,0,0.45)',
  },
  title: {
    margin: 0,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 600,
  },
  text: {
    margin: 0,
    marginBottom: 22,
    fontSize: 14,
    lineHeight: 1.5,
    color: '#e5e7eb', // darker + readable
  },
  buttons: {
    display: 'flex',
    gap: 12,
    justifyContent: 'flex-end',
  },
  accept: {
    background: '#ffffff',
    color: '#000000',
    border: 'none',
    padding: '8px 18px',
    borderRadius: 8,
    cursor: 'pointer',
    fontWeight: 600,
    transition: 'background 0.15s ease, box-shadow 0.15s ease, transform 0.15s ease',
  },
  decline: {
    background: 'transparent',
    color: '#ffffff',
    border: '1px solid rgba(255,255,255,0.4)',
    padding: '8px 18px',
    borderRadius: 8,
    cursor: 'pointer',
    transition: 'background 0.15s ease, color 0.15s ease',
  },
  privacy: {
  marginTop: 14,
  fontSize: 12,
  textAlign: 'right' as const,
  opacity: 0.85,
  },
    privacyLink: {
    color: '#e5e7eb',
    textDecoration: 'underline',
    },

};
