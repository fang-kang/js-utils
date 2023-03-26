/**
 * 判断是否支持调用摄像头
 */
export function isSupportCamera(): boolean {
  const na = navigator as any;
  return !!(na && (na.getUserMedia || na.webkitGetUserMedia || na.mozGetUserMedia || na.msGetUserMedia));
}
