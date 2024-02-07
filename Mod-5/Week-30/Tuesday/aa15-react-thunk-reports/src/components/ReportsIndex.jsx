import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ReportIndexItem from './ReportIndexItem';
import { resetDatabase } from '../mocks/storage';
import { useEffect } from 'react';
import { getReports } from '../store/reports';
import dataVersionOne from '../mocks/data/reportSeedsV1.json'

const ReportsIndex = () => {
  const reports = useSelector(state => state.reports); // populate from Redux store
  const reportList = Object.values(reports)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getReports())
  }, [dispatch])

  /* **DO NOT CHANGE THE RETURN VALUE** */
  return (
    <section>
      <ul>
        {reportList?.map((report) => (
          <ReportIndexItem
            report={report}
            key={report.id}
          />
        ))}
      </ul>
      <Link
        className="back-button new"
        to="/reports/new"
      >
        New Report
      </Link>
      <button onClick={resetDatabase}>Reset the Database</button>
    </section>
  );
};

export default ReportsIndex;
