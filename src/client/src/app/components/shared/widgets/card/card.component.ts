import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {

  @Input() label: string;
  @Input() total: string;
  @Input() icon: string;
  @Input() content: string;

  constructor() { }

  ngOnInit(): void {
  }

}
