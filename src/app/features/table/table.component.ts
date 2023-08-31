import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import {
  IDraft,
  PromotionsService,
} from 'src/app/shared/services/promotions.service';
import { DialogComponent } from './components/dialog/dialog.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'actions'];
  dataSource!: IDraft[];
  promotionsSubscription!: Subscription;
  constructor(
    private promotionsService: PromotionsService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.promotionsSubscription = this.promotionsService.promotions$.subscribe(
      (promotions) => {
        this.dataSource = promotions;
      }
    );
  }

  deletePromotion(id: string): void {
    this.promotionsService.removePromotion(id);
  }

  openDialog(id: string): void {
    this.dialog.open(DialogComponent, {
      data: id,
    });
  }

  ngOnDestroy(): void {
    this.promotionsSubscription.unsubscribe();
  }
}
