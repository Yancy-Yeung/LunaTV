/* eslint-disable no-console, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import { BaseRedisStorage } from './redis-base.db';

export class KvrocksStorage extends BaseRedisStorage {
  constructor() {
    const config = {
      url: process.env.KVROCKS_URL!,
      clientName: 'Kvrocks',
      // 可选：通过环境变量传入 Kvrocks 数据库编号（例如 KVROCKS_DATABASE），默认为0
      database: process.env.KVROCKS_DATABASE
        ? parseInt(process.env.KVROCKS_DATABASE, 10)
        : undefined,
    };
    const globalSymbol = Symbol.for('__MOONTV_KVROCKS_CLIENT__');
    super(config, globalSymbol);
  }
}
