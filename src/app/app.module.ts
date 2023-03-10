import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './home-page/home-page.component';
import { TripPlannerComponent } from './trip-planner/trip-planner.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { CarouselModule } from '@coreui/angular';
import { TestComponent } from './test/test.component';
import { PopupComponent } from './popup/popup.component';
import { SearchPipe } from './pipes/search.pipe';
import { FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';
import { Loader } from '@googlemaps/js-api-loader';
import { GoogleMapsModule } from '@angular/google-maps';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TripPlannerComponent,
    HeaderComponent,
    FooterComponent,
    TestComponent,
    PopupComponent,
    SearchPipe,
    WeatherWidgetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    CarouselModule,
    GoogleMapsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
