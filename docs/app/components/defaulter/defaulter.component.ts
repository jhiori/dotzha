import { Component, AfterViewInit } from '@angular/core';

declare var anime: any; 
//declare let textWrapper = HTMLElement | null | undefined;

@Component({
  selector: 'app-defaulter',
  templateUrl: './defaulter.component.html',
  styleUrls: ['./defaulter.component.scss']
})
export class DefaulterComponent implements AfterViewInit {


  constructor(){}
 
  ngAfterViewInit(): void {

    let textWrapper = document.querySelector('.c1') as HTMLElement;  //<HTMLElement>
    
    //textWrapper = textWrapper ? textWrapper.textContent | ''
    // if(textWrapper)
    textWrapper.innerHTML = textWrapper.textContent?.replace(/\S/g, "<span class='el' style='display:inline-block;'>$&</span>")!;

    anime.timeline({loop: true})
    .add({
      targets: '.c1 .el',
      translateY: ["1.1em", 0],
      translateZ: 0,
      duration: 750,
      delay: (el : any, i:any) => 100 * i
    }).add({
      targets: '.c1',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 100
    });

}


}


