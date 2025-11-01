/* eslint-disable no-console, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import { BaseRedisStorage } from './redis-base.db';

export class RedisStorage extends BaseRedisStorage {
  constructor() {
    const config = {
      url: process.env.REDIS_URL!,
      clientName: 'Redis',
      // 可选：通过环境变量传入 Redis 密码（例如 REDIS_PASSWORD）
      password: process.env.REDIS_PASSWORD,
    };
    const globalSymbol = Symbol.for('__MOONTV_REDIS_CLIENT__');
    super(config, globalSymbol);
  }
}
