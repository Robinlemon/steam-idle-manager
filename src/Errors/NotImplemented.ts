export default class NotImplemented extends Error {
    constructor(...args: any[]) {
        super(...args);
        this.name = 'Not Implemented';
        Error.captureStackTrace(this, NotImplemented);
    }
}
