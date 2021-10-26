import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.sass']
})

export class TopicsComponent implements OnInit {
  /* PROPERTIES */
  moduleId?: string | null; //Mock: només per saber si a nivell de rutes funciona

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.moduleId = this.route.snapshot.paramMap.get('moduleId');
  }

}
