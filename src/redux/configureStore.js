import { legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux';
import { Dishes } from './dishes';
import { Leaders } from './leaders';
import { Promotions } from './promotions';
import { Comments } from './comments';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            leaders: Leaders,
            promotions: Promotions,
            comments: Comments
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}