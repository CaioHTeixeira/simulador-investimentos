import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './core/component/error-404/error-404.component';
import { CoreModule } from './core/core.module';
import { SimuladorInvestimentosModule } from './simulador-investimentos/simulador-investimentos.module';

const routes: Routes = [
  {
    path: '', redirectTo: 'simulador', pathMatch: 'full'
  },
  {
    path: '**', component: Error404Component
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CoreModule,
    CommonModule,
    SimuladorInvestimentosModule
  ],
  exports: [
    RouterModule,
    CoreModule,
    CommonModule,
    SimuladorInvestimentosModule
  ]
})
export class AppRoutingModule { }
