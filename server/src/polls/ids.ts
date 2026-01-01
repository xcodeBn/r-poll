import {customAlphabet, nanoid} from "nanoid";

export function createPollId(){
    return customAlphabet(
        `ABCDEFGHIJKLMNOPQRSTVWXYZ123456789`,
        8,
    )
}

export const createUserId = ()=> nanoid()
export const createNominationId = ()=> nanoid(8)