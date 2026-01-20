
let requestCounts = {};
const LIMIT = 15;
const WINDOW_TIME = 60 * 1000;

const rateLimiter = (req, res, next) => {
    const ip = req.ip;
    const currentTime = Date.now();

    if (!requestCounts[ip]) {
        requestCounts[ip] = { count: 1, startTime: currentTime };
        return next();
    }
    const elapsedTime = currentTime - requestCounts[ip].startTime;

    if (elapsedTime < WINDOW_TIME) {
        if (requestCounts[ip].count >= LIMIT) {
            return res.status(429).json({
                error: "Too many requests, please try again later"
            });
        }
        requestCounts[ip].count++;
        next();
    } else {
        requestCounts[ip] = { count: 1, startTime: currentTime };
        next()
    }
};

export default rateLimiter;