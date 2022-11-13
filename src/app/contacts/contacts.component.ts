import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {  HostBinding } from '@angular/core';

declare var $:any;


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor() { 

    $( () => {
   
      'use strict';
  
      $(".order-first .plus").click(function(){

        $(".order-first .minus").removeClass('active');

        $(".order-first .plus").addClass('active');

        $(".second .full-view").fadeIn(1000);

       });


       $(".order-first .minus").click(function() {

        $(".order-first .plus").removeClass('active');

        $(".order-first .minus").addClass('active');

        $(".second .full-view").fadeOut(1000);

       });


   
  });
    



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
        items: 1
      }
    },
    nav: true
  }
}
