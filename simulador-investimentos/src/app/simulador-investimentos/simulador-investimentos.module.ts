import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SimuladorInvestimentosComponent } from "./simulador-investimentos.component";

@NgModule({
    declarations: [
        SimuladorInvestimentosComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: 'simulador', component: SimuladorInvestimentosComponent
            }
        ])
    ]
})

export class SimuladorInvestimentosModule {}