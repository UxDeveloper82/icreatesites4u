import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  nextPageToken :any;

  constructor(private http: HttpClientModule) { }

  ngOnInit(): void {
  }



}
