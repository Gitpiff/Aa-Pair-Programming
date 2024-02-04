import { useSelector } from 'react-redux';
import ProduceDetails from './ProduceDetails';
import './ProduceList.css';

function ProduceList() {
  //state refers to the ENTIRE redux state, we need to specify state.produce
  const produce = useSelector(state => state.produce);

  //Grab all of the values of the produce object
  const produceArr = Object.values(produce);

  return (
    <>
      <h2>All produce</h2>
      {!produceArr.length && <span>No produce available right now.</span>}
      <ul className="produce-list">
        {produceArr.map((produce) => (
          <ProduceDetails key={produce.id} produce={produce} />
        ))}
      </ul>
    </>
  );
}

export default ProduceList;
