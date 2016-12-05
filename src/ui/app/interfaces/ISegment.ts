/**
 * Created by kumarpadmanabansa01 on 12/1/16.
 */

export interface ISegment {
    id?: number;
    name: string;
    description: string;
    market: string;
    active: boolean;
}

export class Segment implements ISegment {
    id?: number;
    name: string;
    description: string;
    market: string;
    active: boolean;

    constructor(){
        this.name = '';
        this.description = '';
        this.market = '';
        this.active = true;
    }
};
