/**
 * 根据url下载文件
 * @param url 下载的url
 * @param fileName 文件名
 * @returns
 */
export function downloadByUrl(url: any, fileName: string) {
  if (!url) return;

  const callback = (url: BlobPart) => {
    const link = document.createElement('a'); // 创建url对象
    const objectUrl = window.URL.createObjectURL(new Blob([url]));
    link.style.display = 'none';
    link.href = objectUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    window.URL.revokeObjectURL(objectUrl);
  };

  const xhr = new XMLHttpRequest();
  xhr.open('get', url, true);
  xhr.responseType = 'blob';
  xhr.onload = () => {
    callback(xhr.response);
  };
  xhr.send();
}
