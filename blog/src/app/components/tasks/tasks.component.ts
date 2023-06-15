import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {DataService} from 'src/app/services/data.service';
import {Subscription} from 'rxjs';
import {compareAsc, parse} from "date-fns";

@Component({
  selector: 'blog',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit, OnDestroy {
  @Input() filterText: string = '';
  public items$: any;
  private postDeletedSubscription?: Subscription;
  private blogRefreshedSubscription?: Subscription;

  constructor(private service: DataService) {
  }

  ngOnInit() {
    this.getAll();
    this.postDeletedSubscription = this.service.postDeleted.subscribe(
      (postId: number) => {
        console.log('Post deleted:', postId);
        this.items$ = this.items$.filter((item: any) => item.id !== postId);
      }
    );
    this.blogRefreshedSubscription = this.service.blogRefreshed.subscribe(
      () => {
        this.getAll();
      }
    );
  }

  getAll() {
    this.service.getAllFromCurrentUser().subscribe((response: any) => {
      //console.log(response);
      //sort tasks by date, ascending
      this.items$ = response.sort((a: { date: string; }, b: { date: string; }) => {
          try {
            const firstDate = parse(a.date, 'dd.MM.yyyy', new Date());
            const secondDate = parse(b.date, 'dd.MM.yyyy', new Date());
            return compareAsc(firstDate, secondDate);
          } catch (e) {
            console.log("date was empty or of wrong format while sorting tasks: " + e);
            return 0;
          }
        }
      )
    });
  }

  refreshComponent() {
    this.getAll();
  }

  ngOnDestroy() {
    if (this.postDeletedSubscription) {
      this.postDeletedSubscription.unsubscribe();
    }
    if (this.blogRefreshedSubscription) {
      this.blogRefreshedSubscription.unsubscribe();
    }
  }
}
