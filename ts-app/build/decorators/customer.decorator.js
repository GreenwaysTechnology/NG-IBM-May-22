export function Config(customerinfo) {
    return function (target) {
        Object.defineProperty(target.prototype, "ctrlinfo", { value: customerinfo });
    };
}
