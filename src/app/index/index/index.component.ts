import { Component, OnInit } from '@angular/core';
import { expand } from '../../base';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../../services';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  animations: [expand]
})
export class IndexComponent implements OnInit {

  constructor(
    private http: HttpClient,
    public baseService: BaseService
  ) { }

  text = 'xxxx';

  status = 'expand';


  ngOnInit() {
    this.http.get('./index.html').subscribe(
      data => {
        console.log(data);
      }
    );
    const xx = this.baseService.isNumber('xxx');
    console.log(xx);
  }


  toggle() {
    this.status = this.status === 'expand' ? 'noexpand' : 'expand';
  }

}
