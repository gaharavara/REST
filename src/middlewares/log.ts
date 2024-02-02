import { Request, Response, NextFunction } from "express";

export const logger = (req: Request, res: Response, next: NextFunction) => {
    // GET ::ffff:127.0.0.1/health
    // ::ffff: is a prefix which is used to convert and ipv4 address to ipv6 address
    // and is a valid ip address
    console.log(`${req.timestamp}${req.method} ${req.ip}${req.originalUrl}`);
    next();
}
