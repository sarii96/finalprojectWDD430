import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';
// import { DndModule } from 'ng2-dnd';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { HeaderComponent } from './header.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookEditComponent } from './books/book-edit/book-edit.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { BookItemComponent } from './books/book-item/book-item.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    HeaderComponent,
    BookListComponent,
    BookDetailComponent,
    BookEditComponent,
    BookItemComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
