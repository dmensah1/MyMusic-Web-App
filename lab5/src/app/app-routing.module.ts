import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SongListComponent } from './songs/song-list/song-list.component';
import { SongCreateComponent } from './songs/song-create/song-create.component';
import { ReviewCreateComponent } from './reviews/review-create/review-create.component';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';


const routes: Routes = [
  { path: '', component: SongListComponent },
  { path: 'create', component: SongCreateComponent },
  { path: 'review-create/:songId', component: ReviewCreateComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule {}
