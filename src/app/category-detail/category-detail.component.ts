import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitleCasePipe } from '@angular/common';
@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss'],
  imports:[TitleCasePipe]
})
export class CategoryDetailComponent  implements OnInit {

  categoryType: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.categoryType = this.route.snapshot.paramMap.get('type');
  }
}
