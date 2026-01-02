import {Module} from "@nestjs/common";
import {PollsController} from "./polls.controller";
import { PollsService } from './polls.service';
import {ConfigModule} from "@nestjs/config";
import {redisModule} from "../modules.config";
import {PollsRepository} from "./polls.repository";


@Module({
    imports: [ConfigModule, redisModule,],
    controllers: [PollsController],
    providers: [PollsService, PollsRepository],
})
export class PollsModule {}