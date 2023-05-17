import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { SearchResult } from '../search-result.model';
import { YouTubeSearchService } from '../youtube-search.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-serach-box',
  template: `<input
    type="text"
    class="form-control"
    placeholder="Search"
    autofocus
  />`,
})
export class SearchBoxComponent implements OnInit {
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>(); //output
  @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<
    SearchResult[]
  >();

  constructor(private youtube: YouTubeSearchService, private el: ElementRef) {}
  ngOnInit(): void {
    Observable.fromEvent(this.el.nativeElement, 'keyup'); // keyup
  }
}
