import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Material Modules
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MAT_RADIO_DEFAULT_OPTIONS, MatRadioModule } from '@angular/material/radio';
import { MAT_CHECKBOX_DEFAULT_OPTIONS, MatCheckboxModule } from '@angular/material/checkbox';

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
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { ButtonComponent } from './shared/components/button/button.component';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

const CheckboxProvider = {
  provide: MAT_CHECKBOX_DEFAULT_OPTIONS,
  useValue: { color: 'primary' },
}
const RadioButtonProvider = {
  provide: MAT_RADIO_DEFAULT_OPTIONS,
  useValue: { color: 'primary' },
}

const SubscriptSizingProvider =   {
  provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
  useValue: {
    subscriptSizing: 'dynamic'
  }
}

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
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatDividerModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatIconModule,
    MatTooltipModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatRadioModule
  ],
  providers: [MatDatepickerModule, MatNativeDateModule, CheckboxProvider, RadioButtonProvider, SubscriptSizingProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
