import jwt, { JwtPayload, SignOptions } from 'jsonwebtoken';


const generateToken = (
    jwtPayload: string | object | Buffer,
    secret: jwt.Secret | jwt.PrivateKey,
    expiresIn: number | any
): string => {
    const options: SignOptions = { expiresIn };
    return jwt.sign(jwtPayload, secret, options);
};

const verifyToken = (token: string, secret: string) => {
    return jwt.verify(token, secret) as JwtPayload;
  };

export const tokenHelper = {
    generateToken,
    verifyToken
}