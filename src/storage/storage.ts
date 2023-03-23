const EXPIRE_KEY = '__expires';
// 无限时间
const InfinityTime = -1;

type StorageType = 'localStorage' | 'sessionStorage';

class Storage {
  storageType: StorageType;
  constructor(storageType: StorageType) {
    this.storageType = storageType;
  }
  /**
   * 存值，这里注意无需进行Object的转换，存什么都可以，方法内部会自动做类型转换
   * @param {string} key 存储key
   * @param {any} value 存储值
   * @param {number} time 有效时间，默认为永久
   */
  set(key: string, value: any, time: number = InfinityTime) {
    const data = {
      [EXPIRE_KEY]: time === InfinityTime ? time : Date.now() + time,
      value,
    };

    window[this.storageType].setItem(key, JSON.stringify(data));
  }

  /**
   * 取值，这里如果是JsonObject类型会自动帮你转回原类型
   * 取值后无需再多做一次类型转换
   * @param {*} key
   */
  get(key: string) {
    const data = window[this.storageType].getItem(key);
    if (data) {
      const parsedData = JSON.parse(data);
      const expireTime = parsedData[EXPIRE_KEY];
      if (expireTime === InfinityTime || expireTime >= Date.now()) {
        return parsedData.value;
      } else {
        // 过期则清空对应key数据
        this.del(key);
      }
    }
    return null;
  }

  del(key: string) {
    window[this.storageType].removeItem(key);
  }

  clear() {
    window[this.storageType].clear();
  }
}

export const LocalStorage = new Storage('localStorage');

export const SessionStorage = new Storage('sessionStorage');
