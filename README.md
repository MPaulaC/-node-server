¿Qué sucedió al usar async y await?
Usar async/await permitió que el flujo de ejecución del programa esperara de forma síncrona a que las promesas se resolvieran antes de continuar con la siguiente acción. Esto hace que el código sea más fácil de leer y entender, ya que parece estar en un estilo más secuencial, a pesar de que se basa en operaciones asíncronas.

¿Qué sucedió al usar el método then()?
Al usar el método then(), estás trabajando con la forma tradicional de manejar promesas, encadenando las funciones de resolución y rechazo. Esto puede llevar a un código más anidado y menos intuitivo en comparación con async/await.

¿Qué diferencias encontraste entre async, await y el método then()?
Las diferencias principales son:

async/await: Proporciona una sintaxis más clara y fácil de entender para trabajar con promesas, permitiendo que el código asincrónico se vea más similar a código sincrónico. Las funciones async devuelven automáticamente promesas, y await pausa la ejecución hasta que la promesa se resuelva o rechace.

then(): Es el método más tradicional para manejar promesas. Se utiliza para encadenar operaciones en promesas, lo que puede resultar en un código más anidado y menos legible en comparación con async/await
