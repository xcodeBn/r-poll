import {IsInt, IsString, Length, Max, Min} from "class-validator";



export class CreatePollDto {
    @IsString()
    @Length(1,99)
    topic: string;

    @IsInt()
    @Min(1)
    @Max(5)
    votesPerVoter:number;

    @IsString()
    @Length(1,25)
    name : string;
}

export class JoinPollDto {
    @IsString()
    @Length(6,8)
    pollID: string;

    @IsString()
    @Length(1,25)
    name : string;
}