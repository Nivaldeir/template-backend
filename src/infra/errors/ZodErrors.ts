import { ZodError as ZodValidationError, ZodIssue } from "zod";

export class ZodValidationErrorHandler {
  static formatZodError(error: ZodValidationError): {
    message: string;
    errors: Array<{
      field: string;
      message: string;
    }>;
  } {
    const errors = error.issues.map((issue: ZodIssue) => ({
      field: issue.path.join('.'),
      message: issue.message,
    }));

    return {
      message: "Dados inválidos fornecidos",
      errors
    };
  }

  static handleZodError(error: ZodValidationError) {
    const formattedError = this.formatZodError(error);
    return {
      statusCode: 400,
      body: formattedError
    };
  }
}