import { Component, AfterViewInit, ViewChild, ElementRef, Output, EventEmitter, OnInit  } from '@angular/core';
import { Video } from '../_models/video';
import { VideosService } from '../_services/videos.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
   videos: any;

  constructor(private videoService: VideosService) { }

  ngOnInit(): void {
    this.getVideos();
  }

  getVideos() {
    this.videoService.getVideos().subscribe(response => {
      console.log(response);
      this.videos = response;
    })
  }

}
