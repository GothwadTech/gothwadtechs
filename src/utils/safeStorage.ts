/**
 * Safe Storage Abstraction with In-Memory & Multi-Tier Fallbacks
 * Designed specifically to prevent DOMException / SecurityError in iframe sandbox environments
 * (such as Google AI Studio preview, cross-origin iframes, and restrictive cookie policies).
 */

class SafeStorageEngine {
  private memoryStore: Map<string, string> = new Map();
  private isLocalStorageAvailable: boolean = false;

  constructor() {
    this.checkLocalStorageAvailability();
  }

  private checkLocalStorageAvailability(): void {
    try {
      if (typeof window === 'undefined') {
        this.isLocalStorageAvailable = false;
        return;
      }
      // Testing read/write on localStorage to ensure access is allowed in current frame
      const testKey = '__gt_storage_test__';
      window.localStorage.setItem(testKey, '1');
      window.localStorage.removeItem(testKey);
      this.isLocalStorageAvailable = true;
    } catch {
      // Access denied or sandboxed without allow-same-origin
      this.isLocalStorageAvailable = false;
    }
  }

  public getItem<T = string>(key: string, defaultValue: T | null = null): T | null {
    try {
      if (this.isLocalStorageAvailable) {
        const value = window.localStorage.getItem(key);
        if (value !== null) {
          try {
            return JSON.parse(value) as T;
          } catch {
            return value as unknown as T;
          }
        }
      }
    } catch {
      // Fall through to memory store if localStorage fails
    }

    if (this.memoryStore.has(key)) {
      const memVal = this.memoryStore.get(key)!;
      try {
        return JSON.parse(memVal) as T;
      } catch {
        return memVal as unknown as T;
      }
    }

    return defaultValue;
  }

  public setItem<T>(key: string, value: T): boolean {
    const stringified = typeof value === 'string' ? value : JSON.stringify(value);
    
    // Always keep memory store updated as immediate fallback
    this.memoryStore.set(key, stringified);

    try {
      if (this.isLocalStorageAvailable) {
        window.localStorage.setItem(key, stringified);
        return true;
      }
    } catch {
      // Failed to write to localStorage (quota exceeded or iframe security), but memory store succeeded
    }

    return true;
  }

  public removeItem(key: string): void {
    this.memoryStore.delete(key);
    try {
      if (this.isLocalStorageAvailable) {
        window.localStorage.removeItem(key);
      }
    } catch {
      // Ignore error
    }
  }

  public clear(): void {
    this.memoryStore.clear();
    try {
      if (this.isLocalStorageAvailable) {
        window.localStorage.clear();
      }
    } catch {
      // Ignore error
    }
  }
}

export const safeStorage = new SafeStorageEngine();
