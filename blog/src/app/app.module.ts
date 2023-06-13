import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task/task-item/task-item/task-item.component';
import { TaskItemButtonsComponent } from './components/task/task-item/task-item-text/task-item-buttons.component';
import { TaskItemImageComponent } from './components/task/task-item/task-item-image/task-item-image.component';
import { TaskDetailsComponent } from './components/task/task-details/task-details.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';
import { SummaryPipe } from './pipes/summary.pipe';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { TasksHomeComponent } from './components/tasks-home/tasks-home.component';
import { FilterTextPipe } from './pipes/filter-text.pipe';
import { TextFormatDirective } from './directives/text-format.directive';
import { HomeComponent } from './components/home/home.component';
import { AuthService } from './services/auth.service';
import { AuthInterceptor } from './services/auth.interceptor';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { TaskAddComponent } from './components/task/task-add/task-add.component';
import { TaskTitleComponent } from './components/task/task-item/task-item-title/task-title.component';
import { TaskEdit } from './components/task/task-edit/task-edit';
@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskItemComponent,
    TaskItemButtonsComponent,
    TaskItemImageComponent,
    TaskDetailsComponent,
    SummaryPipe,
    SearchBarComponent,
    TasksHomeComponent,
    FilterTextPipe,
    TextFormatDirective,
    TextFormatDirective,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    TaskAddComponent,
    TaskTitleComponent,
    TaskEdit,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    DataService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
