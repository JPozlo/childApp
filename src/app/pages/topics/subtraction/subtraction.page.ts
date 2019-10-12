import { Component, OnInit } from '@angular/core';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subtraction',
  templateUrl: './subtraction.page.html',
  styleUrls: ['./subtraction.page.scss'],
})
export class SubtractionPage implements OnInit {

  constructor(private videoPlayer: VideoPlayer, private router: Router) { }

  ngOnInit() {
  }

  onPlay() {
    this.videoPlayer.play('file:///android_asset/www/MathVid.mp4').then(() => {
      console.log('Video completed');
    }).catch(err => {
      console.log(err);
    });
  }

  onQuiz() {
    this.router.navigate(['/questions']);

  }

}
