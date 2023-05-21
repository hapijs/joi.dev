export async function copyToClipboard(content) {
  // Modern way
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(content);
      return;
    } catch (err) {
      console.error('Failed to copy: ', err);
    }

    // Keep going as modern way failed
  }

  // Legacy
  const el = document.createElement('textarea');
  el.value = content;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

