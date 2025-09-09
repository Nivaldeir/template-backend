import { IHttpNextFunction, IHttpRequest, IHttpServerSetting } from "../../../../shared/types/http";
import { ZodError } from "zod";
import { ZodValidationErrorHandler } from "../../../errors/ZodErrors";

export class ErrorsHandler implements IHttpServerSetting {
  setConfig(app: any) {
    app.use((err: any, _: IHttpRequest, res: any, __: IHttpNextFunction) => {
      if (err instanceof ZodError) {
        const errorResponse = ZodValidationErrorHandler.handleZodError(err);
        res.status(errorResponse.statusCode).json(errorResponse.body);
      } else {
        return res.status(500).json(err);
      }
    });
  }
}