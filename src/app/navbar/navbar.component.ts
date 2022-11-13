import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup  } from '@angular/forms';
import { Validators } from '@angular/forms';
//import * as $ from 'jquery';
declare var $:any

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  contactsForm = new FormGroup({
    name : new FormControl(''),
    email : new FormControl(''),
    phone : new FormControl(''),
    clientFeedback : new FormControl('')
  });
  contactsList:any[] = [];
  saveForm()
  {
    this.contactsList.push(this.contactsForm.value);
    localStorage.setItem("contacts" , JSON.stringify(this.contactsList))
    console.log(this.contactsForm.value);
    
    /*this.http.post('http://localhost/projects/API/add.php',data)
    .subscribe(()=>{
      console.warn("result",result)
    })*/
    
  }

  constructor(private http:HttpClient) {

$( () => {
   
  'use strict';
    
  $(window).scroll(() =>{
    let wScroll = $(window).scrollTop();
    if(wScroll > 160)
    {
        $("nav").addClass("bg");
        $('.second-content ul li a').addClass('Pcolor'); 
    }else
    {
        $("nav").removeClass("bg");
        $('.second-content ul li a').removeClass('Pcolor');
    }
  });

    $(".navSpanOne").click(function(){

        $(".navSpanOne").addClass('Pactive');
        $('.navSpanTwo').removeClass('Pactive');
        $('.navSpanThree').removeClass('Pactive');
        $('.navSpanFour').removeClass('Pactive');
    });
    $(".navSpanTwo").click(function(){

      $(".navSpanTwo").addClass('Pactive');
      $('.navSpanOne').removeClass('Pactive');
      $('.navSpanThree').removeClass('Pactive');
      $('.navSpanFour').removeClass('Pactive');
    });
    $(".navSpanThree").click(function(){

      $(".navSpanThree").addClass('Pactive');
      $('.navSpanTwo').removeClass('Pactive');
      $('.navSpanOne').removeClass('Pactive');
      $('.navSpanFour').removeClass('Pactive');
    });
    $(".navSpanFour").click(function(){

      $(".navSpanFour").addClass('Pactive');
      $('.navSpanTwo').removeClass('Pactive');
      $('.navSpanThree').removeClass('Pactive');
      $('.navSpanOne').removeClass('Pactive');
  });

  /*
   $('.navSpanOne span').click(function(){
        $(this).addClass('Pactive').siblings('span').removeClass('Pactive');
    });
  */

});


   }
   
  ngOnInit(): void {
  }

}
function result(arg0: string, result: any) {
  throw new Error('Function not implemented.');
}

function data(arg0: string, data: any) {
  throw new Error('Function not implemented.');
}

