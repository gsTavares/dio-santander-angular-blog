import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/fake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photo: string = '';
  title: string = '';
  description: string = '';
  newsId: string;

  constructor(
    private route: ActivatedRoute
  ) { 
    this.newsId = this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    
    const data = dataFake.find(data => data.id === this.newsId);

    this.photo = data?.photoCover ?? 'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg';
    this.title = data?.title ?? 'Sorry but this news are unavailable...';
    this.description = data?.description ?? 'Please come back later!';
  }

}
