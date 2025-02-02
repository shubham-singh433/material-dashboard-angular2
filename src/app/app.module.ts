import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app.routing";
import { ComponentsModule } from "./components/components.module";
import { AppComponent } from "./app.component";
// import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";


import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
// import { ToastrModule } from "ngx-toastr";


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    FontAwesomeModule,
 
    // ToastrModule.forRoot({
    //   positionClass: "toast-top-left",
    // }),
  ],
  declarations: [AppComponent, 
    // AdminLayoutComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
