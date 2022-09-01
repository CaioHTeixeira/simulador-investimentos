import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Error404Component } from "./component/error-404/error-404.component";
import { NavBarComponent } from "./component/nav-bar/nav-bar.component";

@NgModule({
    declarations: [
        Error404Component,
        NavBarComponent
    ],
    imports: [
        RouterModule
    ], 
    exports: [
        NavBarComponent,
        RouterModule
    ]
})
export class CoreModule {}