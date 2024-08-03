import CacheService from "./cache-service";

const service = CacheService.getCache();

service.store(1, "s");
service.store(2, "ss");

console.log(service.getValue(2));