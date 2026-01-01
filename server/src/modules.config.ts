import {ConfigModule, ConfigService} from "@nestjs/config";
import {Logger} from "@nestjs/common";
import {RedisModule} from "./reddis.module";


export const redisModule = RedisModule.registerAsync({
    imports: [ConfigModule],
    useFactory: async (configService: ConfigService) => {
        const logger = new Logger('RedisModule');
        return {
            connectionOptions:{
                host:configService.get('REDIS_HOST'),
                port: configService.get('REDIS_PORT')
            },
            onClientReady: (client) => {
                logger.log('Redis client ready');
                client.on('error',(err)=>
                {
                    Logger.log(err)
                });
                client.on('connect',()=>{
                    logger.log(
                        `Connected to redis on ${client.options.host}:${client.options.port}`
                    )
                });
            }
        }
    },
    inject: [ConfigService],
})