import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {MainComponent} from './main.component';
import {SegmentListComponent} from './segments/segment-list.component';
import {VehicleDetailComponent} from './vehicles/vehicle-detail.component';

const routes: Routes = [
    {path: '', redirectTo: 'list', pathMatch: 'full'},
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: 'list',
                component: SegmentListComponent,
            }, {
                path: 'vehicle',
                component: VehicleDetailComponent,
            },
        ]
    },
    {path: '**', redirectTo: ''}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    providers: [],
    exports: [RouterModule]
})
export class AppRoutingModule {
    id: any;
    name: any;

    constructor() {

    }
}

export const routingComponents = [MainComponent, AppComponent, SegmentListComponent, VehicleDetailComponent];
