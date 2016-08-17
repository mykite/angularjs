import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { Hero } from './hero'
import { HeroService } from './hero.service'

@Component({
  selector: 'my-heroes',
  //template: '<h1>{{title}}</h1><h2>{{hero.name}} details!</h2><div><label>id: </label>{{hero.id}}</div><div><label>name: </label>{{hero.name}}</div>'
  //反引号
  //属性绑定 [class.selected]="hero === selectedHero"  单向数据流，从数据源到class
  //属性绑定 [hero]="selectedHero"			单向数据流，从selectedHero到hero
 /* template: `
  <h2>my Heroes</h2>
  <ul class="heroes">
  	<li *ngFor="let hero of heroes" 
  		(click)="onSelect(hero)" 
  		[class.selected]="hero === selectedHero">
  	 <span class="badge">{{hero.id}}</span>{{hero.name}}
  	</li>
  </ul>
   <div *ngIf="selectedHero">
    <h2>
      {{selectedHero.name | uppercase}} is my hero
    </h2>
    <button (click)="gotoDetail()">View Details</button>
  </div>
  `,*/
  //html分离
  templateUrl:'app/heroes.component.html',
  //css分离
  styleUrls:['app/heroes.component.css']
})
/*
	双向数据绑定使用[(ngModel)],需要导入FormsModule
*/
/*
	*ngIf="selectedHero"
	
*/


//export class AppComponent implements OnInit   { 测试来看不需要实现可能默认进行了实现 
	export class HeroesComponent {
	title = 'tour of heros ';
	/*
		构造对象
	*/
	/*hero: Hero = {
	  id: 1,
	  name: 'Windstorm'
	};*/
	selectedHero: Hero;
	//heroes = HEROES;
	heroes: Hero[]; 
	constructor(
    private heroService: HeroService,
    private router: Router
  ) {};
	getHeroes() {
	    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	  }
 
	onSelect(hero: Hero) { 
		this.selectedHero = hero;
	}
	//初始化调用
	ngOnInit() {
		this.getHeroes();
	}

  gotoDetail() {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}





