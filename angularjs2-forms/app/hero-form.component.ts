import { Component } from '@angular/core'
import { Hero } from './hero'



@Component({
	selector: 'hero-form',
	templateUrl: 'app/hero-from.component.html'
})

export class HeroFormComponent {
	powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer']

    model = new Hero(10, "kite", "super Hot", "water change")

    submited = false

    onSubmit() {
    	this.submited = true
    }

    get diagnostic(){ return JSON.stringify(this.model) }
}