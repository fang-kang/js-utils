/**
 * 劫持粘贴板
 * @param value
 */
export function copyTextToClipboard(value: string) {
  const textArea = document.createElement('textarea');
  textArea.style.background = 'transparent';
  textArea.value = value;
  document.body.appendChild(textArea);
  textArea.select();
  try {
    const successful = document.execCommand('copy');
  } catch (err) {
    console.log('Oops, unable to copy');
  }
  document.body.removeChild(textArea);
}
