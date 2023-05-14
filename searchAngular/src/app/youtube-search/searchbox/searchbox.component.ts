import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { SearchResult } from '../search-result.model';
import { YouTubeSearchService } from '../youtube-search.service';

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
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<
    SearchResult[]
  >();

  constructor(private youtube: YouTubeSearchService, private el: ElementRef) {}
  ngOnInit(): void {}
}
