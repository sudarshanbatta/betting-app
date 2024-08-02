import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-static-table',
  templateUrl: './static-table.component.html',
  styleUrls: ['./static-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StaticTableComponent implements OnInit {
  @Input() selectedMatch: any;
  dateTime:any;
  @ViewChildren('falconInput') falconInputs: QueryList<ElementRef>;
  @ViewChildren('sinLimitInput') sinLimitInputs: QueryList<ElementRef>;
  buttonColor: string = '#fff';
  activeIndex: number | null = null; 
  constructor() { }

  ngOnInit(): void {
    this.dateTime = new Date();
  }
  onKeyDown(event: KeyboardEvent, index: number): void {
    if (event.key === 'Escape') {
      event.preventDefault();
      this.selectedMatch.matchData[index].falcon = this.selectedMatch.matchData[index].falconOriginalValue;

      this.selectedMatch.matchData[index].falconEdited = false;
      this.selectedMatch.matchData[index].sinLimitEdited = false;
      this.selectedMatch.matchData = [...this.selectedMatch.matchData];
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      this.focusNextInput(index);
    }  else if (event.key === 'ArrowUp') {
      event.preventDefault();
      this.focusPreviousInput(index);
    } else if (event.key !== 'Enter') {
      this.selectedMatch.matchData[index].falconEdited = true;
    } else if (event.target['name'] === 'sinLimit') {
      this.selectedMatch.matchData[index].sinLimitEdited = true;
    }
  }

  onInput(index: number, value: any, field: string): void {
    if (field === 'falcon') {
      this.selectedMatch.matchData[index][field] = parseFloat(value); 
      this.selectedMatch.matchData[index].falconEdited = true; 
      this.selectedMatch.matchData[index].sinLimitEdited = false;
    } else if (field === 'sinLimit') {
      this.selectedMatch.matchData[index][field] = parseFloat(value);
      this.selectedMatch.matchData[index].falconEdited = false; 
      this.selectedMatch.matchData[index].sinLimitEdited = true;
    }
  }

  updateValue(index: number, field: string, value: any): void {
    if (field === 'falcon') {
      this.selectedMatch.matchData[index][field] = parseFloat(value);
      this.selectedMatch.matchData[index].falconOriginalValue = this.selectedMatch.matchData[index][field];
      this.selectedMatch.matchData[index].falconEdited = false;
    } else if (field === 'sinLimit') {
      this.selectedMatch.matchData[index][field] = parseFloat(value);
      this.selectedMatch.matchData[index].sinLimitOriginalValue = this.selectedMatch.matchData[index][field];
      this.selectedMatch.matchData[index].sinLimitEdited = false;
    }
  }

  private focusNextInput(currentIndex: number): void {
    const falconInputs = this.falconInputs.toArray();
    const sinLimitInputs = this.sinLimitInputs.toArray();
    const nextIndex = currentIndex + 1;

    if (nextIndex < falconInputs.length) {
      falconInputs[nextIndex].nativeElement.focus();
    } else if (nextIndex < falconInputs.length + sinLimitInputs.length) {
      sinLimitInputs[nextIndex - falconInputs.length].nativeElement.focus();
    }
  }

  private focusPreviousInput(currentIndex: number): void {
    const falconInputs = this.falconInputs.toArray();
    const sinLimitInputs = this.sinLimitInputs.toArray();
    const previousIndex = currentIndex - 1;

    if (previousIndex >= 0 && previousIndex < falconInputs.length) {
      falconInputs[previousIndex].nativeElement.focus(); 
    } else if (previousIndex >= falconInputs.length - sinLimitInputs.length) {
      sinLimitInputs[previousIndex - (falconInputs.length - sinLimitInputs.length)].nativeElement.focus();
    }
  }
  getProgressBarBackground(sinRisk: number, sinLimit: number): string {
    const percentage = sinLimit > 0 ? (sinRisk / sinLimit) * 100 : 0;
    let color;
    if (percentage <= 35) {
      color = '#4caf50'; // Green
    } else if (percentage <= 75) {
      color = '#ffeb3b'; // Yellow
    } else {
      color = 'rgb(241 82 71)'; // Red
    }
    return `linear-gradient(to right, ${color} ${percentage}%, #f1f1f1 ${percentage}%)`;
  }
  setActiveIndex(index: number): void {
    this.activeIndex = index;
  }

  getButtonColor(index: number): string {
    if (this.activeIndex === index) {
      return 'lightcoral'; 
    }
    return 'lightgray'; 
  }

}
