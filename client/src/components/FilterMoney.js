import React , {useState} from 'react';

import RangeSelector, {
  Margin, Scale, Label, Behavior, Format,
} from 'devextreme-react/range-selector';
import DataGrid from 'devextreme-react/data-grid';
import {Sample} from './sample';

const columns = ['RecipeName', 'Ingredients',' PrepTimeInMins', 'TotalTimeInMins', 'Cuisine','Calories','Money'];

 let sample_money=[]
 const FilterMoney = () =>  {
   const [selectedsample , setSelectedSample]  =  useState([])
   
  const filtersample = ({ value }) => {
      sample_money = Sample.filter((Sample) => (Sample.Money >= value[0] && Sample.Money <=  value[1])
     || !value.length)
     setSelectedSample(sample_money)
    };
  

  
    return (
      <React.Fragment>
        <RangeSelector
          id="range-selector"
          title="Filter recipe List by Money"
          dataSource={Sample}
          dataSourceField="Money"
          onValueChanged={filtersample}
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
          dataSource={selectedsample}
          columns={columns}
          showBorders={true}
          columnAutoWidth={true}
        />
      </React.Fragment>
    );
  };

export {FilterMoney , sample_money}