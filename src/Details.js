import React from 'react';
import moment from 'moment';
const Details = ({ summary, isLoading, lastUpdated }) => {
  return (
    <div>
      <p>
        As of {moment(lastUpdated).format('dddd')} at {moment(lastUpdated).format('hh:mm a')}, more than{' '}
        {summary.total_vaccinations}
      </p>
    </div>
  );
};

export default Details;
