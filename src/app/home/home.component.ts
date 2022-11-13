import {Component, OnInit} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {  HostBinding } from '@angular/core';

//import * as $ from 'jquery';
declare var $:any


@Component({
    selector:'home-7oda',
    templateUrl:'./home.component.html',
    styleUrls:['./home.component.css']
})

export class homeComponent implements OnInit {

    constructor() {
       // let aboutOffset = $("#About").offset().top;
        $(window).scroll(function(){
            let wScroll = $(window).scrollTop();
            if(wScroll > 500)
            {
                $(".btnset").fadeIn(1000);
            }else
            {
                $(".btnset").fadeOut(1000);
            }
          })
          $(".btnset").click(function(){
            $("body,html").animate({scrollTop:0},3000);
        })
     }

    
  
    ngOnInit(): void {
    }
    customOptions: OwlOptions = {
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: false,
        navSpeed: 700,
        navText: ['', ''],
        responsive: {
          0: {
            items: 1
          },
          400: {
            items: 1
          },
          740: {
            items: 1
          },
          940: {
            items: 3
          }
        },
        nav: true
      }
    }
    