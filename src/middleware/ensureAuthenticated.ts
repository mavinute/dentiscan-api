import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

interface TokenPayload {
    sub: string;
}

export function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Token não fornecido." });
  }

  const [, token] = authHeader.split(" ");

  if (!token) {
    return res.status(401).json({ error: "Token mal formatado." });
  }

  if (!process.env.JWT_SECRET) {
    return res.status(500).json({ error: "JWT não configurado." });
  }

  try {
    const { sub } = verify(token, process.env.JWT_SECRET) as TokenPayload;

    req.userId = sub;
    return next();

  } catch {
    return res.status(401).json({ error: "Token inválido ou expirado." });
  }
}