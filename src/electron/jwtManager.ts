import jwt from 'jsonwebtoken';

export type JwtPayloadType = {
  iat: number;
  exp: number;
  roles: string[];
  username: string;
}


export const decodeJwt = (token: string) => {
  return jwt.decode(token, { complete: true });
}

export const getTokenBody = (token: string) => {
  return decodeJwt(token);
}

export const getTokenPaylaod = (token: string) => {
  const body = getTokenBody(token);
  if (!body) return null;
  return body.payload as JwtPayloadType;
}

export const tokenHasExpired = (token: string) => {
  const payload = getTokenPaylaod(token);
  if (!payload) return undefined;
  const currentTimestamp = Date.now();
  const exp = payload.exp;
  return exp < currentTimestamp;
}