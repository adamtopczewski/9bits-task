import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @Input() form!: FormGroup;
  promotionScope: string[] = ['Portal', 'Shop', 'Partners', 'Influencer'];
  promotionType: string[] = ['Short', 'Long', 'Recurring', 'Limited'];
}
