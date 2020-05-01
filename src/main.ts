import './polyfills';

import { Component, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector : 'joke',
  template : ` <h1>{{ setup }}</h1>
  <p>{{punchline}}</p> `
})
class JokeComponent{
  setup : string;
  punchline : string;
  constructor(){
    this.setup = "Hello World";
    this.punchline = "I am using Angular";
  }
}

@Component({
  selector : 'joke-list',
  template : `
  <div class="card card-block"
     *ngFor="let joke of jokes">
     <h4 class="card-title">{{joke.setup}}</h4>
     <p class="card-text">{{joke.punchline}}</p>
  </div>
  `
})
class JokeListComponent{
 jokes : Object[];
 constructor(){
   this.jokes =[
     {
      setup : "Joke1",
      punchline : "I am a good person"
    },
    {
      setup : "Joke2",
      punchline : "I like jokes"
    },
    {
      setup : "Joke3",
      punchline : "I am a smart"
    },
    {
      setup : "Joke4",
      punchline : "I like playing outdoor games"
    }
   ]
 }
}

@NgModule({
  imports: [BrowserModule],
  declarations : [JokeComponent , JokeListComponent],
  bootstrap : [JokeListComponent]
})
class AppModule {
  
}

platformBrowserDynamic().bootstrapModule(AppModule);