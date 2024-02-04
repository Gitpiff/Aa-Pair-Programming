import produceData from '../mockData/produce.json';

const POPULATE = 'produce/POPULATE';


export const populateProduce = () => {
    return {
      type: POPULATE,
      produce: produceData
    };
};

// By convention, all reducer functions should have this basic structure. The reducer should return the old state or a new state depending on the type of the action that gets dispatched. The state does not have to be an object. It could be an array, a boolean, etc.
export default function produceReducer(state = {}, action) {
    switch (action.type) {
      case POPULATE: {
        console.log(action)
        //To "normalize" data we create an object instead of an array -more efficient-
        const newState = {};
        action.produce.forEach(produce => {
          newState[produce.id] = produce;
        });
        return newState;
      }
      default:
        return state;
    }
}