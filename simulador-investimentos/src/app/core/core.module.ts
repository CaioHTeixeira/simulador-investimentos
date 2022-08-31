import { NgModule } from "@angular/core";
import { MatTabsModule } from "@angular/material/tabs";
import { RouterModule } from "@angular/router";
import { Error404Component } from "./component/error-404/error-404.component";
import { NavBarComponent } from "./component/nav-bar/nav-bar.component";

@NgModule({
    declarations: [
        Error404Component,
        NavBarComponent
    ],
    imports: [
        MatTabsModule,
        RouterModule
    ], 
    exports: [
        MatTabsModule,
        NavBarComponent,
        RouterModule
    ]
})
export class CoreModule {}