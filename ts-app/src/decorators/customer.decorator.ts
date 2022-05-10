

export function Config(customerinfo:any) {
    return function (target: any) {
        Object.defineProperty(target.prototype, "ctrlinfo", { value: customerinfo })
    }
}