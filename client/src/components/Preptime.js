import React from 'react';
import ReactDom from 'react-dom';
import {Component} from 'react';
import RangeSelector from 'devextreme-react/range-selector'
import  {
  Margin, Scale, Label, Behavior, Format,
} from 'devextreme-react/range-selector';
import DataGrid from 'devextreme-react/data-grid';
import {Sample} from './sample';

const columns = ['RecipeName', 'TotalTimeInMins','PrepTimeInMins', 'Course', 'Cuisine', 'Diet'];
export class Preptime extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedsample:Sample,
    };
    this.filterTime = this.filterTime.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        <RangeSelector
          id="range-selector"
          title="Filter Time from dataset "
          dataSource={Sample}
          dataSourceField="PrepTimeInMins"
          onValueChanged={this.filterTime}
        >
          <Margin top={20} />
          <Scale tickInterval={10} minorTickInterval={10}>
            <Label>
              <Format type="Decimal" />
            </Label>
          </Scale>
          <Behavior callValueChanged="onMoving" />
        </RangeSelector>
        <h2 className="grid-header">PrepTime Recipe</h2>
        <DataGrid
          dataSource={this.state.selectedsample}
          columns={columns}
          showBorders={true}
          columnAutoWidth={true}
        />
      </React.Fragment>
    );
  }

  filterTime({ value }) {
    this.setState({
      selectedsample: Sample
        .filter((Sample) => (Sample.PrepTimeInMins >= value[0] && Sample.PrepTimeInMins <=  value[1])
          || !value.length),
    });
    console.log(value[0],value[1])
  }
}



