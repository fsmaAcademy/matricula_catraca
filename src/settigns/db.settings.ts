import { TypeOrmModule } from '@nestjs/typeorm';
import { DynamicModule } from '@nestjs/common';

export class DbSettings {
    public static postgreConnection(): DynamicModule {
        return TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'postgres',
            database: 'catraca',
            schema: 'system',
            entities: ['../../src/**/*.entity.ts', './dist/**/*.entity.js'],
            synchronize: true,
            logging: true,
        });
    }
}
