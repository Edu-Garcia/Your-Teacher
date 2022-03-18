import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
  sub: string
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).json({
      error: "Sem autorização"
    })
  }

  const [, token] = authToken.split(" ");

  try {
    const { sub } = verify(token, "5dd7aae0dbc48d434b17fca1433b4283") as IPayload;
    request.user_id = sub;

    return next()
  } catch (err) {
    return response.status(401).json({
      error: "Sem autorização"
    });
  }
}