/** @format */

import BarChart from './Activities/BarChart';
import {barchartData} from './Activities/barchartData';

function CustomerActivities() {
  return (
    <div className="customer-activities">
      <BarChart data={barchartData} />
    </div>
  );
}

export default CustomerActivities;
