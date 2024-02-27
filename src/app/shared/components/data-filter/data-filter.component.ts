import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TopicItem } from '@app/shared/models/topic-item.model';

@Component({
  selector: 'app-data-filter',
  templateUrl: './data-filter.component.html',
  styleUrls: ['./data-filter.component.scss']
})
export class DataFilterComponent implements OnInit {
  
  selectedTopic: string[] = [];
  selectedLevel: any[] = [];
  selectedDeliveryMode: any[] = [];
  topics: TopicItem[] = [
    { code: 'META', title: 'Metaverse'},
    { code: 'WEB3.0', title: 'Web 3.0'},
    { code: 'AI', title: 'Aritifical Intelligence'}
  ];
  levelCategories: any[] = [
    { name: 'BIGINNER', code: 'BIGINNER' },
    { name: 'INTERMEDIATE', code: 'INTERMEDIATE' },
    { name: 'High', code: 'HIGH' }
  ];
  @Output() filterUpdate = new EventEmitter<any>();
  
  constructor() {}

  ngOnInit(): void {
      
  }

  onFilterChange(event: any, key: string) {
    console.log('topic ', this.selectedTopic, this.selectedLevel);
    this.filterUpdate.emit({
      'topic': this.selectedTopic, 'payments': this.selectedLevel 
    });
  }
}
