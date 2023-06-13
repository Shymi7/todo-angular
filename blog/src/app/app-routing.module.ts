import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskDetailsComponent } from './components/task/task-details/task-details.component';
import { TasksHomeComponent } from './components/tasks-home/tasks-home.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './services/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { TaskAddComponent } from './components/task/task-add/task-add.component';
import { TaskEdit } from './components/task/task-edit/task-edit';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'blog',
    component: TasksHomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'blog/detail/:id',
    component: TaskDetailsComponent,
  },
  {
    path: 'blog/edit/:id',
    component: TaskEdit,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'add',
    component: TaskAddComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
