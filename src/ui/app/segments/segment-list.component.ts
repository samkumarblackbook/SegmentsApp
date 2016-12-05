/**
 * Created by kumarpadmanabansa01 on 12/1/16.
 */

import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GridOptions } from 'ag-grid/main';
import { Response } from '@angular/http';

import { ISegment } from '../interfaces';
import { SegmentService } from './segment.services';

@Component({
    selector: 'segment-list',
    template: require('./segment-list.view.pug')
})

export class SegmentListComponent implements AfterViewInit{

    public gridOptions:GridOptions;
    public rowData: Array<ISegment>;
    public routeInfo: ActivatedRouteSnapshot;

    constructor(
        public route: ActivatedRoute,
        private segmentService: SegmentService
    ) {
        this.routeInfo = this.route.snapshot;
        this.rowData = this.routeInfo['data']['segments'];
        this.gridOptions = <GridOptions>{
            headerHeight: 35,
            enableServerSideSorting: true,
            rowModelType:'pagination',
            paginationPageSize: 25,
        };
        this.gridOptions.columnDefs = this.getColumnDefs();
    }

    ngAfterViewInit(){
        this.gridOptions.api.sizeColumnsToFit();
        this.createNewDataSource();
    }

    onResize(event){
        this.gridOptions.api.sizeColumnsToFit();
    }

    getColumnDefs(){
        return [
            {
                headerName: 'Name',
                field: 'name'
            },{
                headerName: 'Description',
                field: 'description'
            },{
                headerName: 'Market',
                field: 'market'
            },{
                headerName: 'Active',
                field: 'active',
                cellClass: ['center-text-cell'],
                cellRendererFramework: {
                    template: require('../grid/bool-cell.view.pug')
                }
            }
        ]
    }

    createNewDataSource(){
        this.segmentService.getSegments().then(segments => this.rowData = segments);

        var dataSource = {
            getRows: (params) => {
                var pageData = this.rowData.slice(params.startRow, params.endRow)
                params.successCallback(pageData, this.rowData.length);
            }
        }

        this.gridOptions.api.setDatasource(dataSource);

    }


}
