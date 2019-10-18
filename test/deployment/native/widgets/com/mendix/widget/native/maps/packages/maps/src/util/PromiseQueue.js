class PromiseQueue {
    constructor() {
        this.queue = [];
        this.running = false;
    }
    add(getPromise) {
        return new Promise((resolve, reject) => {
            this.queue.push({
                getPromise,
                resolve,
                reject
            });
            this.next();
        });
    }
    next() {
        if (this.running || this.queue.length === 0) {
            return;
        }
        this.running = true;
        const item = this.queue.shift();
        item.getPromise()
            .then(result => {
            item.resolve(result);
            this.running = false;
            this.next();
        })
            .catch(reason => {
            item.reject(reason);
            this.running = false;
            this.next();
        });
    }
}

export { PromiseQueue };
