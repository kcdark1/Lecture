// Quita tildes y pasa a mayúsculas para comparar respuestas
// sin que las tildes o mayúsculas causen errores.
export function normalizar(texto = '') {
  return texto
    .toString()
    .trim()
    .toUpperCase()
    .normalize('NFD')
    .replace(/[\u0300\u0301\u0302\u0308]/g, '') // quita tildes y diéresis (conserva la Ñ)
    .normalize('NFC')
}

export function sonIguales(a, b) {
  return normalizar(a) === normalizar(b)
}
