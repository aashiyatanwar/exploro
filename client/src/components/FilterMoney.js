import React from 'react';

import RangeSelector, {
  Margin, Scale, Label, Behavior, Format,
} from 'devextreme-react/range-selector';
import DataGrid from 'devextreme-react/data-grid';
import {Sample} from './sample';

const columns = ['RecipeName', 'Ingredients',' PrepTimeInMins', 'TotalTimeInMins', 'Cuisine','Calories','Money'];

 export class FilterMoney extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedsample: Sample,
    };
    this.filtersample = this.filtersample.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        <RangeSelector
          id="range-selector"
          title="Filter recipe List by Money"
          dataSource={Sample}
          dataSourceField="Money"
          onValueChanged={this.filtersample}
        >
          <Margin top={20} />
          <Scale tickInterval={10} minorTickInterval={10}>
            <Label>
              <Format type="Decimal" />
            </Label>
          </Scale>
          <Behavior callValueChanged="onMoving" />
        </RangeSelector>
        <h2 className="grid-header">selected recipes</h2>
        <DataGrid
          dataSource={this.state.selectedsample}
          columns={columns}
          showBorders={true}
          columnAutoWidth={true}
        />
      </React.Fragment>
    );
  }

  filtersample({ value }) {
    this.setState({
      selectedsample: Sample
        .filter((sample) => (sample.Money >= value[0] && sample.Money <= value[1])
          || !value.length),
    });
  }
}