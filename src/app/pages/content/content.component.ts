import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

	constructor(
		private route: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.route.paramMap.subscribe(routeParams => console.log(routeParams));
	}

	photoCover: string = "http://via.placeholder.com/480x300";
	contentTitle: string = "Lorem Ipsum";
	contentDescription: string = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid voluptatem quia, vitae atque libero eaque consequuntur. Facere voluptate repudiandae vel voluptas, reprehenderit fuga quasi quod iusto officia quae amet magnam.";
}
