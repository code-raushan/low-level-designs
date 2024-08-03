class CacheService {
    public static service = new CacheService();
    private cacheMap: Map<number, string>;

    private constructor() {
        this.cacheMap = new Map();
    }

    public static getCache() {
        return this.service;
    }

    public getValue(key: number) {
        return this.cacheMap.get(key);
    }

    public store(key: number, value: string) {
        return this.cacheMap.set(key, value);
    }
}

export default CacheService;