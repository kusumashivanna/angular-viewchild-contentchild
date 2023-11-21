import {
  AfterContentInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  QueryList,
} from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements AfterContentInit {
  data = 'kusuma';
  subject = new Subject<String>();
  ngAfterContentInit(): void {
    console.log('hai', this.projectContent?.nativeElement.innerText);
    //for content child
    console.log(this.projectContent?.nativeElement.innerHtml);
    if (this.projectContent) {
      this.projectContent.nativeElement.innerText = 'Pavithra';
    }

    //for content Children
    this.projectContents?.forEach((div) => {
      console.log(div.nativeElement.innerHtml);
      div.nativeElement.innerText = div.nativeElement.innerText + ' amma';
    });
  }

  //for content child
  @ContentChild('projectContent', { static: false }) projectContent:
    | ElementRef
    | undefined;
  //for content children
  @ContentChildren('projectContent') projectContents:
    | QueryList<ElementRef>
    | undefined;

  setData(data: string) {
    this.data = data;
  }
}
