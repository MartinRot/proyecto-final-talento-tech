/* 
Recibir un usuario y contraseña desde el body.
Validar si los datos son correctos.
Si son correctos, devolver un Bearer Token
Si son incorrectos, devolver un error 401 (no autorizado).
*/

// Función simple que verifica las credenciales
export const loginService = (username, password) => {
  if (username === 'admin' && password === '123456') {
    return { username };
  }
  return null;
};
