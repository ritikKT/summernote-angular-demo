import { ApplicationRef, Component, ElementRef, Injector } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { LanguageService } from './language/language.service';
import { Direction } from '@angular/cdk/bidi';
declare var $: any;
export interface Fruit {
  name: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showFiller = false;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  fruits: Fruit[] = [{ name: 'Lemon' }, { name: 'Lime' }, { name: 'Apple' }];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.push({ name: value });
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }
  // appElementRef: ElementRef;
  constructor(private service: LanguageService, private applicationRef: ApplicationRef, private injector: Injector) { }
  flag!: Direction;
  flag1!: Direction;
  ngOnInit() {
    this.flag1 = "ltr";
    this.service.getValue().subscribe((value) => {
      this.flag = value;
      console.log(this.flag)
    });
    var options = {
      height: 300,
      placeholder: 'Start typing your text...',
      toolbar: [
        ['style', ['bold', 'italic', 'underline', 'clear']],
        ['fontsize', ['fontsize']],
        ['color', ['color']],
        ['para', ['ul', 'ol', 'paragraph']],
        ['insert', ['ltr', 'rtl']],
        ['view', ['fullscreen', 'codeview']]
      ]
    };
    $('.summernote').summernote(options);
    document.getElementsByClassName("note-editor")[0].setAttribute("dir","rtl")
  }
  toggle() {
    this.service.setValue(this.flag == "ltr" ? "rtl" : "ltr");
    this.flag1 = this.flag1 == "ltr" ? "rtl" : "ltr";
    // document.dir = this.flag1;
    document.body.setAttribute("dir", this.flag1)
    // this.appElementRef = injector.get(this.applicationRef.componentTypes[0]).elementRef;
  }
}
