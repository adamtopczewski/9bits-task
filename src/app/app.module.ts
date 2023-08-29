import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Material Modules
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TableComponent } from './features/table/table.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddPromotionComponent } from './pages/add-promotion/add-promotion.component';
import { EditPromotionComponent } from './pages/edit-promotion/edit-promotion.component';
import { StepperComponent } from './features/promotion-form/components/stepper/stepper.component';
import { FormComponent } from './features/promotion-form/components/form/form.component';
import { MockStepSectionComponent } from './features/promotion-form/components/mock-step-section/mock-step-section.component';
import { SummaryComponent } from './features/promotion-form/components/summary/summary.component';
import { PromotionFormComponent } from './features/promotion-form/promotion-form.component';
import { StepComponent } from './features/promotion-form/components/step/step.component';
import { TabContentComponent } from './features/promotion-form/components/tab-content/tab-content.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    DashboardComponent,
    AddPromotionComponent,
    EditPromotionComponent,
    StepperComponent,
    FormComponent,
    MockStepSectionComponent,
    SummaryComponent,
    PromotionFormComponent,
    StepComponent,
    TabContentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatDividerModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
