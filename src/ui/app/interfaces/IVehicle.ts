/**
 * Created by kumarpadmanabansa01 on 12/2/16.
 */

export interface IVehicle {
    id?: number;
    name: string;
    description: string;
    make: string;
    model: string;
    year: number;
    vin: string;
}

export class Vehicle implements IVehicle {
    id?: number;
    name: string;
    description: string;
    make: string;
    model: string;
    year: number;
    vin: string;

    constructor(){
        this.name = '';
        this.description = '';
        this.make = '';
        this.model = '';
        this.year = 2016;
        this.vin = '';
    }
};
