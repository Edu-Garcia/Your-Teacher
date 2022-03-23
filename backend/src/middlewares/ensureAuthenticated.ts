import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
  user: Object;
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
    const { user, sub } = verify(token, process.env.JWT_KEY) as IPayload;

    request.user_id = sub;
    request.user_data = user;

    return next()
  } catch (err) {
    return response.status(401).json({
      error: "Sem autorização"
    });
  }
}