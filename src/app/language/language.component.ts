import { Direction } from '@angular/cdk/bidi';
import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {
  ngOnInit() {
    $('#summernote').summernote({
      placeholder: 'Hello Bootstrap 4',
      tabsize: 2,
      height: 100
    });
    console.log("fsfesfesfsef")
  }


}
