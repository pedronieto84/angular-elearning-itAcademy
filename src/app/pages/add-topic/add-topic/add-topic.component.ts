import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-topic',
  templateUrl: './add-topic.component.html',
  styleUrls: ['./add-topic.component.sass']
})
export class AddTopicComponent implements OnInit {
  /* PROPERTIES */
  queryModule?: string | null;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(data => {
      this.queryModule = data.module;
    });
  }
}
