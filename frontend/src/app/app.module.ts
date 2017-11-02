import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelFilterComponent } from './hotel-filter/hotel-filter.component';
import { HotelService } from './hotel-service';

@NgModule({
	declarations: [
		AppComponent,
		HotelListComponent,
		HotelFilterComponent
	],
	imports: [
		BrowserModule,
		HttpModule,
		FormsModule,
		FlexLayoutModule
	],
	providers: [HotelService],
	bootstrap: [AppComponent]
})

export class AppModule { }
