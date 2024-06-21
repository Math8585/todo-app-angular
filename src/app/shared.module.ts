// shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './pages/profile-page/sidebar/sidebar.component'
import { SearchComponent } from './pages/profile-page/search/search.component'
import { TodoFormComponent } from './pages/profile-page/todo-form/todo-form.component';
import { TodoListComponent } from './pages/profile-page/todo-list/todo-list.component';
import { CategoryFormComponent } from './pages/profile-page/sidebar/category-form/category-form.component';
import { CategoryListComponent } from './pages/profile-page/sidebar/category-list/category-list.component';

@NgModule({
  declarations: [
    SidebarComponent,
    SearchComponent,
    TodoFormComponent,
    TodoListComponent,
    CategoryFormComponent,
    CategoryListComponent

  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent,
    SearchComponent,
    TodoFormComponent,
    TodoListComponent,
    CategoryFormComponent,
    CategoryListComponent
  ]
})
export class SharedModule { }
