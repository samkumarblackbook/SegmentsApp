/**
 * Created by kumarpadmanabansa01 on 12/5/16.
 */

import { Injectable } from '@angular/core';

import { ISegment } from '../interfaces';
import { SEGMENTS } from '../interfaces/mock-segments';


@Injectable()
export class SegmentService {
    getSegments(): Promise<ISegment[]> {
        return Promise.resolve(SEGMENTS);
    }

    getSegment(id: number): Promise<ISegment> {
        return this.getSegments()
            .then(segments => segments.find(segment => segment.id === id));
    }
}
