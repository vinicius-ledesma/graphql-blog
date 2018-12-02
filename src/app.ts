import * as express from 'express';
import * as expressHTTP from 'express-graphql';

import schema from './graphql/schema';

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.middleware();
  }

  private middleware(): void {

    this.express.use('/graphql', expressHTTP({
      schema: schema,
      graphiql: process.env.NODE_ENV.trim() === 'development'
    }));

  }

}

export default new App().express;
