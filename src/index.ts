import createDebug from 'debug';
import ExpressServer from './server/infrastructure/express.server';

const debug = createDebug('HAvenida');

const boostrap = async () => {
    // User -> Model, Repo, Controller
    // Hotel -> Model, Repo, Controller
    // Router
    //const server = new ExpressServer([//Routers]);
    //server.start(5500);
};
