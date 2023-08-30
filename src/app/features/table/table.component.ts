import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IDraft, PromotionsService } from 'src/app/shared/services/promotions.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'actions'];
  dataSource!: IDraft[];
  promotionsSubscription!: Subscription;
  constructor(private promotionsService: PromotionsService, private router: Router) {}

  ngOnInit(): void {
    this.promotionsSubscription = this.promotionsService.promotions$.subscribe(promotions => {
      this.dataSource = promotions
    })
  }

  deletePromotion(id: string) {
    this.promotionsService.removePromotion(id);
  }

  ngOnDestroy(): void {
    this.promotionsSubscription.unsubscribe();
  }
}
