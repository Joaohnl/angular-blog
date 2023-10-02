import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

	navigationLinks: Array<string> = [];

	ngOnInit(): void {
		this.navigationLinks = ["learn", "about", "bookmarks", "ui kit"];
	}
}
