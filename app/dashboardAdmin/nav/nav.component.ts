import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  lougout() {
    this.route.navigateByUrl("/login")
  }
}
