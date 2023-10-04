import { Component, OnInit } from '@angular/core';
import { SocialIcons } from 'src/app/shared/types/SocialIcons';

@Component({
	selector: 'app-menu-bar',
	templateUrl: './menu-bar.component.html',
	styleUrls: ['./menu-bar.component.css'],
})
export class MenuBarComponent implements OnInit {
	navigationLinks: Array<string> = [];
	socials: Array<SocialIcons> = [];
	logo: SocialIcons = {
		alt: 'Kermit`s Logo',
		iconSrc: 'https://img.icons8.com/color/64/kermit-the-frog.png',
		linkSrc: '#'
	};

	ngOnInit(): void {
		this.navigationLinks = ['learn', 'about', 'bookmarks', 'ui kit'];
		this.socials = [
			{
				alt: 'LinkedIn',
				iconSrc: 'https://img.icons8.com/color/50/linkedin.png',
				linkSrc: 'http://linkedin.com/in/joaohnl',
			},
			{
				alt: 'Instagram',
				iconSrc: 'https://img.icons8.com/fluency/50/instagram-new.png',
				linkSrc: 'https://instagram.com/joaonloureiro/',
			},
			{
				alt: 'GitHub',
				iconSrc: 'https://img.icons8.com/fluency/50/github.png',
				linkSrc: 'www.linkedin.com/in/joaohnl',
			}
		];
	}
}
