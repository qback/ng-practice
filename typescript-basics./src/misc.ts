//generics and type parameters
export function identity<T>(arg: T): T {
  return arg;
}


export function userAlert(): void {
  alert('hello');
}

export function infiniteFn(): never {
  throw new Error('error');
}