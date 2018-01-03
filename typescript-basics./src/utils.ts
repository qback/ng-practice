export type ValidSymbol = '#' | '$';

export interface OptionsConfig {
  symbol: ValidSymbol,
  length: number
}

// function overload
// функция может принимать параметром один объект и двумя параметрами символ и число
export function generateRandomId(symbol: ValidSymbol, length: number): string
export function generateRandomId(options: OptionsConfig): string
export function generateRandomId(optionsOrSymbol: ValidSymbol | OptionsConfig): string {
  if (typeof optionsOrSymbol === 'string') {
    return optionsOrSymbol + Math.random().toString(36).substr(2, length)
  }
  return (
    optionsOrSymbol.symbol + Math.random().toString(36).substr(2, optionsOrSymbol.length)
  );
}