interface Window {
  webkitRequestAnimationFrame: (callback: FrameRequestCallback) => number;
  mozRequestAnimationFrame: (callback: FrameRequestCallback) => number;
  msRequestAnimationFrame: (callback: FrameRequestCallback) => number;
  oRequestAnimationFrame: (callback: FrameRequestCallback) => number;
  webkitCancelAnimationFrame: (handle: number) => void;
  mozCancelAnimationFrame: (handle: number) => void;
  oCancelAnimationFrame: (handle: number) => void;
  msCancelAnimationFrame: (handle: number) => void;
  webkitIndexedDB: IDBFactory;
  mozIndexedDB: IDBFactory;
  msIndexedDB: IDBFactory;
  indexedDB: IDBFactory;
  SpeechRecognition: any;
  webkitSpeechRecognition: any;
}

interface Navigator {
  webkitGetUserMedia: () => void;
  mozGetUserMedia: () => void;
  msGetUserMedia: () => void;
  getUserMedia: () => void;
}

export interface DeviceType {
  os: string;
  dev: string;
}

export type UseTimeoutReturn<T> = T extends Function ? () => void : undefined;
