import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.scss']
})
export class TabContentComponent implements OnInit {
  isAddMode!: boolean;
  @Output() unlockSteps = new EventEmitter<boolean>()
  @Input() activeTab!: string;
  subscription!: Subscription;
  promotionForm = this.fb.group({
    marketingName: ['', Validators.required],
    technicalName: [''],
    description: [''],
    promotionScope: ['', Validators.required],
    promotionType: ['', Validators.required],
    benefitAmount: ['', Validators.min(0)],
    startDate: ['', Validators.required],
    finishDate: [''],
    promotionCondition: [''],
    connectWithOther: [''],
    backPromotion: [''],
  })
  
  constructor(private fb: FormBuilder, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.isAddMode = !id;

    this.subscription = this.promotionForm.valueChanges.subscribe(form => {
      this.checkFormUnlocked(form.marketingName, form.technicalName)
    })
  }

  checkFormUnlocked(marketingName : string | null | undefined, technicalName: string |  null | undefined): void {
    if( (marketingName && marketingName.length) || (technicalName && technicalName.length) ) {
      this.unlockSteps.emit(true);
      this.subscription.unsubscribe();
    }
  }
}
