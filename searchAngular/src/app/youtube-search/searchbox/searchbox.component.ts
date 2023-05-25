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
    Observable.fromEvent(this.el.nativeElement, 'keyup') // keyup
      .map((e: any) => e.target.value)
      .filter((text: string) => text.length > 1)
      .debounceTime(250)
      .do(() => this.loading.emit(true)) //search, discarding old events if new input comes in
      .switch()
      .subscribe(
        (results: SearchResult[]) => {
          //on success
          this.loading.emit(false);
          this.results.emit(results);
        },
        (err: any) => {
          // on error 1
          console.log(err); //
          this.loading.emit(false); //
        },
        () => {
          // on completion
          this.loading.emit(false);
        }
      );
  }
}
