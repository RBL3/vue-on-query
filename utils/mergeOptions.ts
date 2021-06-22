import * as utils from './index'

export function mergeObj(defaultOpt: any, newOpt: any): any {
    if (utils.isEmptyObject(newOpt)) {
        return defaultOpt
    }
    const opt = { ...defaultOpt }
    Object.keys(newOpt).forEach(key => {
        if (utils.isObject(newOpt[key])) {
            opt[key] = mergeObj(opt[key], newOpt[key])
        } else {
            opt[key] = newOpt[key]
        }
    })
    return opt
}