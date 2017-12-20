import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//https://coursetro.com/posts/code/51/How-to-Make-an-Animated-Ionic-Splash-Page-with-HTML-&-CSS
//http://bouncejs.com/
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    tabBarElement: any;
    splash = true;
    constructor(public navCtrl: NavController) {
        this.tabBarElement = document.querySelector('.tabbar');
    }

    ionViewDidLoad() {
        this.tabBarElement.style.display = 'none';
        setTimeout(() => {
            this.splash = false;
            this.tabBarElement.style.display = 'flex';
        }, 4000);
    }
}
