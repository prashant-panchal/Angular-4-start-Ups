import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

// app Services
import { UtilsService  } from './services/utils.service';
import { LOG_LOGGER_PROVIDERS } from './services/logger.service';

// app components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// module
import { DashboardModule } from './components/dashboard/dashboard.module';
import { AppPipe } from './filters/app.pipe';


const ProviderList = [
  UtilsService,
  {provide: LocationStrategy, useClass: HashLocationStrategy},
  LOG_LOGGER_PROVIDERS];

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    DashboardModule,
    RouterModule.forRoot([])
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    AppPipe
  ],
  providers: ProviderList,
  bootstrap: [AppComponent]
})
export class AppModule { }
