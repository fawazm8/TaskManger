import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { ProjectsComponent } from './admin/projects/projects.component';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AdminModule,ProjectsComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
