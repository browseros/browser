
import { Component, Output, EventEmitter, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ITab } from '../../models/tab.model';

@Component({
    selector: 'web-view',
    styleUrls: ['./web-view.component.css'],
    templateUrl: './web-view.component.html'
})

export class WebviewComponent implements AfterViewInit {
    @Input() public tab: ITab;
    @Output() public onTitleChanged: EventEmitter<string> = new EventEmitter<string>();
    @ViewChild('webview') private webview: ElementRef;

    public ngAfterViewInit() {
        let webviewElm = this.webview.nativeElement;
        webviewElm.addEventListener('page-title-updated', (e) => {
            this.onTitleChanged.emit(e.title);
        });
    }
 }
