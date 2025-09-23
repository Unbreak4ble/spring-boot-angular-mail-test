
export const throttle = (func:any, limit:any) => {
    let inThrottle:any;
    return (...args:any) => {
      if (!inThrottle) {
        func(...args)
        inThrottle = setTimeout(() => inThrottle = false, limit)
      }
    }
  }