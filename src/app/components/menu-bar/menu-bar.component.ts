import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

	navigationLinks: Array<string> = [];
	socials: Array<string> = [];

	ngOnInit(): void {
		this.navigationLinks = ["learn", "about", "bookmarks", "ui kit"];
		this.socials = [
			"http://via.placeholder.com/40x40",
			"http://via.placeholder.com/40x40",
			"http://via.placeholder.com/40x40",
			"http://via.placeholder.com/40x40"
		];
	}
}
