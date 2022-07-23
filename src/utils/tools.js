import { debounce, throttle } from "lodash-es";


export const sleep = (delay = 2000) =>
    new Promise((resp) => setTimeout(() => resp(), delay));

export const _debounceFn = (fn, wait = 300, max = 3000) => debounce(
    fn,
    wait,
    {
        leading: true,
        maxWait: max,
        trailing: false,
    }
)
export const _throttleFn =  (fn, wait = 300) => throttle(
    fn,
    wait,
    {
        leading: true,
        trailing: true,
    }
)
