import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { BehaviorSubject } from 'rxjs';

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
  public promotionsSubject: BehaviorSubject<IDraft[]>= new BehaviorSubject<IDraft[]>(this.getPromotions());
  public promotions$ = this.promotionsSubject.asObservable();
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

  getPromotion(id:string): IDraft {
    const promotions = this.localService.getData('promotions');
    if(!promotions) {
      return {};
    }
    const parsedPromotions = this.localService.parseItem(promotions);
    return parsedPromotions.filter((promotion: IDraft) => promotion.id === id)[0];
  }

  addPromotion(promotion: IDraft) {
    const promotions = this.localService.getData('promotions');
    if(!promotions)  {
      this.promotionsSubject.next([promotion]);
      return this.localService.saveData('promotions', this.localService.toJson([promotion]));
    }
    const parsedPromotions = this.localService.parseItem(promotions);
    this.localService.saveData('promotions', this.localService.toJson([...parsedPromotions, promotion]));
  }

  editPromotion(id: string, promotionDraft: IDraft) {
    const promotions = this.localService.getData('promotions');
    if(!promotions) {
      return;
    }
    const filteredPromotions = (this.localService.parseItem(promotions)).map((promotion: IDraft) => {
      return promotion.id === id ? promotionDraft : promotion;
    });
    this.localService.saveData('promotions',  this.localService.toJson(filteredPromotions));
    this.promotionsSubject.next(this.getPromotions())
    return filteredPromotions;
  }

  removePromotion(id: string) {
    const promotions = this.localService.getData('promotions');
    if(!promotions) {
      return;
    }
    const filteredPromotions = (this.localService.parseItem(promotions)).filter((promotion: IDraft) => promotion.id !== id);
    this.localService.saveData('promotions',  this.localService.toJson(filteredPromotions));
    this.promotionsSubject.next(this.getPromotions())
    return filteredPromotions;
  }
}
