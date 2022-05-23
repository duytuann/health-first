import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

/**
 * Setup and return all middlewares needed for the development
 */
const getDevMiddlewares = () => {
    if (process.env.REACT_APP_ENABLE_REDUX_LOG === `true`) {
        const { createLogger } = require(`redux-logger`);
        const logger = createLogger();
        return [logger];
    }

    return [];
};

/**
 * Setup middlewares
 *
 * This must be run after the [redux#applyMiddleware] function
 */
export const setupMiddleware = () => {
    sagaMiddleware.run(rootSaga);
};

const middlewares = [sagaMiddleware, ...getDevMiddlewares()];

export default middlewares;
