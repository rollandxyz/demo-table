import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MatCheckbox, MatSelectionList } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-column-value-filter',
  templateUrl: './column-value-filter.component.html',
  styleUrls: ['./column-value-filter.component.css']
})
export class ColumnValueFilterComponent implements OnInit {
  _columnValues = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers', 'Boots2', 'Clogs2', 'Loafers2', 'Moccasins2', 'Sneakers2'];
  selectedLength = 0;

  @Output() columnValueFilterChange = new EventEmitter();

  constructor() { }
  ngOnInit() {}

  @Input()  get columnValues() { return this._columnValues; }

  set columnValues(val) {
    this._columnValues = val;
  }

  onSelectAllChanged(list: MatSelectionList, selectAllCheckbox: MatCheckbox) {
    if (selectAllCheckbox.checked) {
      list.options.forEach(option => {
        if (!option.selected) {
          option._setSelected(true);
        }
      });
    } else if (!selectAllCheckbox.indeterminate) {
      list.selectedOptions.clear();
    }
  }
  onSelectionChange(list: MatSelectionList, selectAllCheckbox: MatCheckbox) {
    this.selectedLength = list.selectedOptions.selected.length;
    selectAllCheckbox.indeterminate  = (this.selectedLength > 0) &&
    (list.options.length !== this.selectedLength);
    selectAllCheckbox.checked  = list.options.length === this.selectedLength;
  }
  onApplyClicked(list: MatSelectionList) {
    console.log('selected=' + list.selectedOptions.selected.length);
    const selectedValues = [];

    list.selectedOptions.selected.forEach(element => {
      selectedValues.push(element.value);
    });
    this.columnValueFilterChange.emit(selectedValues);
  }
  onCancelClicked() {
    console.log('cancel');
  }
}
