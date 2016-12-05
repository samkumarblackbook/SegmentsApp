import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { AgGridModule } from 'ag-grid-ng2/main';
import { HttpModule }    from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './routes.module';
import { SegmentService } from './segments/segment.services';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AgGridModule.withNg2ComponentSupport(),
    AppRoutingModule
  ],
  declarations: [...routingComponents],
  providers: [ SegmentService  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {
    console.debug('Main Module Built')
  }
}
