import CacheService from "./cache-service";

const service = CacheService.getCache();

service.store(1, "a");
service.store(2, "b");

console.log(service.getValue(1));