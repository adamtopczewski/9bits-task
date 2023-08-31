import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddPromotionComponent } from './pages/add-promotion/add-promotion.component';
import { EditPromotionComponent } from './pages/edit-promotion/edit-promotion.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  { path: 'add-promotion', component: AddPromotionComponent },
  { path: 'edit-promotion/:id', component: EditPromotionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
