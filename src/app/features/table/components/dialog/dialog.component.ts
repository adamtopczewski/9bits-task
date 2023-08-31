import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PromotionsService } from 'src/app/shared/services/promotions.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  @Output() removeItemEvent = new EventEmitter<string>();
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: string,
    private promotionService: PromotionsService
  ) {}

  removeItem(): void {
    const id = this.data;
    this.promotionService.removePromotion(id);
  }
}
