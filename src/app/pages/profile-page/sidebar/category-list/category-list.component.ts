import { Component, OnInit } from '@angular/core';
import { Category } from '../../../../../types/interfaces';
import { CategoryService } from '../../../../../services/categories.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit {

  categories: Category[] = [];

  constructor(private CategoryService: CategoryService) { }

  ngOnInit(): void {
    this.CategoryService.getCategories().subscribe((categories) => {
    this.categories = categories;
    });
    }
}
