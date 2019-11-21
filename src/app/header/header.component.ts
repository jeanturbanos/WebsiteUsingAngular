import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  header = {
    heading:'My website',
    headingText:'Namari is a free landing page template you can use for your projects. It is free to use for your' +
    'personal and commercial projects enjoy!',
    buttonText: 'do some action',
    buttonLink:'/Home'
  }

  constructor() { }

  ngOnInit() {
  }

}
