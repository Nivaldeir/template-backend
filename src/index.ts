import "reflect-metadata";
import "./shared/modules";
import { App } from "./infra/app";
import ExpressAdapter from "./infra/http/express/expressAdapter";

const server = new ExpressAdapter();
const app = new App(server);
app.start();