import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    //for view child
    console.log(this.div1?.nativeElement.innerHtml);
    if (this.div1) {
      this.div1.nativeElement.innerText = 'kusuma';
    }
    //for view Children
    this.divs?.forEach((div) => {
      console.log(div.nativeElement.innerHtml);
      div.nativeElement.innerText = div.nativeElement.innerText + ' kusu';
    });

    console.log('child', this.childComponent?.setData('jhjghjghghj'));
  }
  title = 'angular-viewchild-contentchild';
  @ViewChild('div1', { static: false }) div1: ElementRef | undefined;
  @ViewChildren('div1') divs: QueryList<ElementRef> | undefined;
  //data passinf from child to parent
  @ViewChild(ChildComponent) childComponent: ChildComponent | undefined;
}
