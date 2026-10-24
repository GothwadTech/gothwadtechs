/**
 * Browser Utility Helpers for Iframe-Resilient Execution
 * Handles external navigation and clipboard operations safely across sandboxes.
 */

export async function safeCopyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator?.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    // Fallback to execCommand if clipboard API is blocked in iframe
  }

  try {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    textArea.style.top = '-9999px';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    const successful = document.execCommand('copy');
    document.body.removeChild(textArea);
    return successful;
  } catch {
    return false;
  }
}

export function safeOpenExternalLink(url: string, target: string = '_blank'): void {
  try {
    const link = document.createElement('a');
    link.href = url;
    link.target = target;
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch {
    try {
      window.open(url, target, 'noopener,noreferrer');
    } catch {
      window.location.href = url;
    }
  }
}
