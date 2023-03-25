/**
 * 将字节转换为合理的容量单位
 * @param bytes
 * @returns
 */
export function byteToFileSize(bytes: number) {
  let BYTES = bytes;
  const thresh = 1024;
  if (Math.abs(BYTES) < thresh) {
    return `${BYTES} B`;
  }
  const units = ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  let u = -1;
  const r = 10 ** 1;
  do {
    BYTES /= thresh;
    u += 1;
  } while (Math.round(Math.abs(BYTES) * r) / r >= thresh && u < units.length - 1);
  return `${BYTES.toFixed(1)} ${units[u]}`;
}
