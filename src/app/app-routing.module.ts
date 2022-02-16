
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttributeComponent } from './components/attribute/attribute.component';
import { CustomComponent } from './components/custom/custom.component';
import { StructuralComponent } from './components/structural/structural.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo:'structural-directive'},
  {path: 'structural-directive', component: StructuralComponent},
  {path: 'attribute-directive', component: AttributeComponent},
  {path: 'custom-directive', component: CustomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
