import { Component } from '@angular/core';
import { Category } from '../../../../../types/interfaces';
import { CategoryService } from '../../../../../services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent {

  categories: Category[] = [];

  constructor(private CategoryService: CategoryService) { }

  ngOnInit(): void {
    this.CategoryService.getCategories().subscribe((categories) => {
    this.categories = categories;
    });
    }
}
