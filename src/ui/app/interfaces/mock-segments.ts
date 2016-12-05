/**
 * Created by kumarpadmanabansa01 on 12/5/16.
 */

import { Segment } from '../interfaces';

/*
 id?: number;
 name: string;
 description: string;
 market: string;
 active: boolean;
 */

export var SEGMENTS: Segment[] = [
    {
        id: 1,
        name: 'Medium Duty Truck',
        description: 'Medium Duty Trucks Class A',
        market: 'US Trucks',
        active: true
    },
    {
        id: 2,
        name: 'Motor Homes',
        description: 'All Motor Homes',
        market: 'Recreational Vehicles',
        active: true
    },
    {
        id: 3,
        name: 'Motorcycle Book',
        description: 'Motorcycle Publishing Segment',
        market: 'Motorcycle',
        active: true
    },
    {
        id: 4,
        name: 'CPI Book',
        description: 'CPI Publishing Segment',
        market: 'CPI',
        active: true
    },
    {
        id: 5,
        name: 'Autograph 2017',
        description: 'All AUtograph Cars',
        market: 'US New Car',
        active: false
    }

];