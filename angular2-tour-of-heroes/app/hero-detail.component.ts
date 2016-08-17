import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'

import { Hero } from './hero'
import { HeroService } from './hero.service'


@Component({
	selector: 'my-hero-detail',
	/*template: `	
	<div *ngIf="hero">
	    <h2>{{hero.name}} details!</h2>
	    <div><label>id: </label>{{hero.id}}</div>
	    <div>
	      <label>name: </label>
	      <input [(ngModel)]="hero.name" placeholder="name"/>
	    </div>
  	</div>
	`*/
	templateUrl:'app/hero-detail.component.html'
})


export class HeroDetailComponent implements OnInit {
	//声明为输入属性
	//@Input()
	hero: Hero;
	
	constructor(
	 private heroService: HeroService,
	 private router: ActivatedRoute
	){}

	ngOnInit() {
		this.router.params.forEach((param : Params) => {
			//+装换成数字
			let id = +param['id']
			this.heroService.getHero(id).then(hero => this.hero = hero)
		})
	}
	goBack() {
		window.history.back()
	}
}

