import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PromotionsService } from 'src/app/shared/services/promotions.service';
import * as uuid from 'uuid';

@Component({
  selector: 'app-tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.scss'],
})
export class TabContentComponent implements OnInit, OnDestroy {
  newId: string = uuid.v4();
  isAddMode!: boolean;
  draft?: any;
  @Output() unlockSteps = new EventEmitter<boolean>();
  @Input() activeTab!: string;
  unlockSubscription!: Subscription;
  draftSubscription!: Subscription;
  promotionForm = this.fb.group({
    id: [this.newId],
    marketingName: ['', Validators.required],
    technicalName: [''],
    description: [''],
    promotionScope: ['', Validators.required],
    promotionType: ['', Validators.required],
    benefitAmount: ['', Validators.min(0)],
    startDate: ['', Validators.required],
    finishDate: [''],
    promotionCondition: [''],
    connectWithOther: [false],
    backPromotion: [false],
  });

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private promotionsService: PromotionsService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.isAddMode = !id;
    if (this.isAddMode) {
      this.handleAddInit();
    } else {
      this.handleEditInit(id);
    }

    this.draftSubscription = this.promotionForm.valueChanges.subscribe(
      (form) => {
        this.promotionsService.saveDraftData(form);
      }
    );
  }

  checkFormUnlocked(
    marketingName: string | null | undefined,
    technicalName: string | null | undefined
  ): void {
    if (
      (marketingName && marketingName.length) ||
      (technicalName && technicalName.length)
    ) {
      this.unlockSteps.emit(true);
      if (this.unlockSubscription) {
        this.unlockSubscription.unsubscribe();
      }
    }
  }

  handleAddInit() {
    this.draft = this.promotionsService.getDraft();

    if (Object.keys(this.draft).length) {
      this.promotionForm.setValue(this.draft);
      this.checkFormUnlocked(
        this.draft.marketingName,
        this.draft.technicalName
      );
    }

    this.unlockSubscription = this.promotionForm.valueChanges.subscribe(
      (form) => {
        this.checkFormUnlocked(form.marketingName, form.technicalName);
      }
    );
  }

  handleEditInit(id: string): void {
    const promotion: any = this.promotionsService.getPromotion(id);
    this.promotionForm.setValue(promotion);
    this.checkFormUnlocked(promotion.marketingName, promotion.technicalName);
  }

  ngOnDestroy(): void {
    this.draftSubscription.unsubscribe();
    if (this.unlockSubscription) {
      this.unlockSubscription.unsubscribe();
    }
  }
}
