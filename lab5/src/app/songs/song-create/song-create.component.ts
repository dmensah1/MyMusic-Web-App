import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SongsService } from '../songs.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Song } from '../song.model';
import { ReviewsService } from 'src/app/reviews/review.service';

@Component({
  selector: 'app-song-create',
  templateUrl: './song-create.component.html',
  styleUrls: ['./song-create.component.css']
})
export class SongCreateComponent implements OnInit {
  enteredTitle = '';
  enteredArtist = '';
  private mode = 'create';
  private songId: string;
  song: Song;
  songTitleInput = '';

  constructor(public songsService: SongsService, public reviewsService: ReviewsService, public route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('songId')) {
        this.mode = 'addingReview';
        this.songId = paramMap.get('songId');
        this.song = this.songsService.getSong(this.songId);
      } else {
        this.mode = 'list';
      }
    });
  }

  onAddSong(form: NgForm) {
    if (form.invalid) { return; }
    // form values passed to addSong function in service ts file
    this.songsService.addSong(form.value.title,
       form.value.artist,
        form.value.album,
        form.value.year,
        form.value.comment,
        form.value.track,
        form.value.genre,
        form.value.header,
        form.value.zeroByte
        );
    form.resetForm();
  }

  onAddReview(form: NgForm) {
    if (form.invalid) { return; }
    this.reviewsService.addReview(form.value.rating, form.value.review, form.value.title, form.value.username);
    form.resetForm();
  }
}

