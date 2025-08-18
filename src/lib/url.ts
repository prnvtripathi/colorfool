'use client';

import { useCallback } from 'react';

export function useUrlSync() {
  // Get ?c param

  const getColorParam = useCallback(() => {
    if (typeof window === 'undefined') return '';
    const url = new URL(window.location.href);
    return url.searchParams.get('c') || '';
  }, []);

  // Set ?c param (push state)
  const setColorParam = useCallback((color: string) => {
    if (typeof window === 'undefined') return;
    const url = new URL(window.location.href);
    if (color) {
      url.searchParams.set('c', color);
    } else {
      url.searchParams.delete('c');
    }
    window.history.pushState({}, '', url.toString());
    // Dispatch custom event for Reactivity
    window.dispatchEvent(new Event('pushstate'));
  }, []);

  return { getColorParam, setColorParam };
}
