import { Component } from '@angular/core';

interface PromotionsTableItems {
  id: number;
  name: string;
}

const MOCK_DATA: PromotionsTableItems[] = [
  {id: 0, name: '123' },
  {id: 0, name: '123' },
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  displayedColumns: string[] = ['id', 'name', 'actions'];
  dataSource = MOCK_DATA;
}
