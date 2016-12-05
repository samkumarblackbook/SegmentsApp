/**
 * Created by kumarpadmanabansa01 on 12/2/16.
 */

import { Component } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { IVehicle } from '../interfaces';
import {Vehicle} from "../interfaces/IVehicle";

@Component ({
    selector: 'vehicle-detail',
    template: require('./vehicle-detail.view.pug')
})
export class VehicleDetailComponent {

    public vehicleForm: FormGroup;
    public vehicle: IVehicle = new Vehicle();

    public isNewVehicle:boolean = true;
    public isReadOnly:boolean = true;


    constructor(
        private formBuilder: FormBuilder
    ){
        this.vehicleForm = this.formBuilder.group({
                'name': ['' , Validators.required],
                'make': ['', Validators.required],
                'model': ['', Validators.required],
                'year': ['2016', Validators.required],
                'description': [''],
                'vin': ['']
            },
        );
    }

    editVehicle = () => {
        this.isReadOnly = false;
        this.vehicleForm.enable();
    }

    resetForm = () => {
        this.vehicle = new Vehicle();
        this.vehicleForm.reset();
    }

    saveVehicle = () => {
        if(this.vehicleForm.valid){
            console.log('Vehicle Saved');
        }
    }



}