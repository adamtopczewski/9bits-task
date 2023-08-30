import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

export interface IDraft {
  id?: string | null | undefined;
  marketingName?: string | null | undefined;
  technicalName?: string | null | undefined;
  description?: string | null | undefined;
  promotionScope?: string | null | undefined;
  promotionType?: string | null | undefined;
  benefitAmount?: string | null | undefined;
  startDate?: string | null | undefined;
  finishDate?: string | null | undefined;
  promotionCondition?: string | null | undefined;
  connectWithOther?: boolean | null | undefined;
  backPromotion?: boolean | null | undefined;
}

@Injectable({
  providedIn: 'root'
})

export class PromotionsService {
  draft!: Object;
  promotions!: [];
  
  constructor(private localService: LocalStorageService) { }

  getDraft(): IDraft {
    const draft = this.localService.getData('draft');
    if (!draft) {
      this.localService.saveData('draft', '');
      return {};
    }
    return this.localService.parseItem(draft);
  }

  saveDraftData(formObject: IDraft) {
    this.localService.saveData('draft', this.localService.toJson(formObject))
  }

  removeDraft() {
    this.localService.removeData('draft')
  }
  
  getPromotions(): IDraft[] {
    const promotions = this.localService.getData('promotions');
    if(!promotions) {
      this.localService.saveData('promotions', '')
      return []
    }
    return this.localService.parseItem(promotions);
  }

  addPromotion(promotion: IDraft) {
    const promotions = this.localService.getData('promotions');
    if(!promotions) {
      return this.localService.saveData('promotions', this.localService.toJson([promotion]))
    }
    const parsedPromotions = this.localService.parseItem(promotions);
    this.localService.saveData('promotions', this.localService.toJson([...parsedPromotions, promotion]))
  }

  editPromotion(id: string, promotion: IDraft) {
    const promotions = this.localService.getData('promotions');
    if(!promotions) {
      return;
    }
    const filteredPromotions = (this.localService.parseItem(promotions)).filter((promotion: IDraft) => promotion.id !== id ? promotion : false);
    this.localService.saveData('promotions',  this.localService.toJson(filteredPromotions));
    return filteredPromotions;
  }

  removePromotion(id: string) {
    const promotions = this.localService.getData('promotions');
    if(!promotions) {
      return;
    }
    const filteredPromotions = (this.localService.parseItem(promotions)).filter((promotion: IDraft) => promotion.id !== id);
    this.localService.saveData('promotions',  this.localService.toJson(filteredPromotions));
    return filteredPromotions;
  }
}
