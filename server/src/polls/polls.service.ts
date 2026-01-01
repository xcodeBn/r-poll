import { Injectable } from '@nestjs/common';
import {CreatePollDto, JoinPollDto} from "./dtos";
import {CreatePollFields, JoinPollFields, RejoinPollFields} from "./polls.fields";
import {createPollId, createUserId} from "./ids";

@Injectable()
export class PollsService {


    async createPoll(fields: CreatePollFields) {
        const pollId = createPollId();
        const userId = createUserId();

        return {
            ...fields,
            pollId,
            userId,
        };
    }

    async joinPoll(fields: JoinPollFields) {
        const userId = createUserId();

        return {
            ...fields,
            userId,
        };
    }

    async rejoinPoll(fields: RejoinPollFields) {
        return {
            ...fields
        };
    }
}
