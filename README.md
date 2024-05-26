# Algoritmos de Recomendación

Este proyecto web está desarrollado con [Next.js](https://nextjs.org/), utilizando [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) para la inicialización. La aplicación implementa varios algoritmos de recomendación para proporcionar sugerencias personalizadas a los usuarios.

## Getting Started

Para iniciar el servidor de desarrollo, ejecuta:

```bash
#Instalar paquetes
npm install

#Correr
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
### Recomendación basada en contenido
- **Descripción**: Recomienda elementos similares a los que un usuario ha mostrado interés previamente, basándose en las características y descripciones de los elementos.
- **Características**: Utiliza atributos como etiquetas, categorías o descripciones para encontrar similitudes. No requiere datos sobre otros usuarios.
- **Caso de uso**: Plataformas con atributos definidos como películas, música, productos en línea o artículos de noticias.

### Recomendación colaborativa
- **Descripción**: Recomienda elementos basándose en las valoraciones y preferencias de usuarios con gustos similares.
- **Características**: Utiliza el comportamiento pasado de los usuarios. No requiere información detallada sobre los elementos.
- **Caso de uso**: Plataformas donde los usuarios pueden calificar o interactuar con elementos, como libros, películas, música o productos en línea.

### Algoritmos de aprendizaje automático y descubrimiento de patrones
- **Descripción**: Utilizan técnicas avanzadas de aprendizaje automático para analizar grandes cantidades de datos y encontrar patrones ocultos.
- **Características**: Emplean técnicas como filtrado colaborativo, procesamiento del lenguaje natural y análisis de sentimientos.
- **Caso de uso**: Plataformas que manejan grandes volúmenes de datos y buscan recomendaciones altamente personalizadas, como servicios de streaming.

### Algoritmo de recomendación basado en popularidad
- **Descripción**: Recomienda los elementos más populares o más vendidos sin considerar las preferencias individuales de los usuarios.
- **Características**: Basado en la popularidad general de los elementos. Útil para nuevos usuarios.
- **Caso de uso**: Tiendas en línea, redes sociales o listas de reproducción de música.

### Algoritmo de recomendación basado en reglas de asociación
- **Descripción**: Busca patrones de co-ocurrencia entre elementos para recomendar elementos relacionados.
- **Características**: Utiliza reglas que describen relaciones entre elementos, como "Si A entonces B".
- **Caso de uso**: Plataformas de comercio electrónico para sugerir productos complementarios o relacionados.

### Algoritmo de recomendación basado en modelo
- **Descripción**: Utiliza modelos matemáticos para predecir las preferencias de los usuarios.
- **Características**: Usa información detallada sobre el usuario, como historial de interacciones, preferencias y características demográficas.
- **Caso de uso**: Plataformas que buscan personalizar las recomendaciones, como servicios de streaming, comercio electrónico o redes sociales.

### Algoritmo de recomendación híbrido
- **Descripción**: Combina uno o más de los métodos anteriores para obtener mejores resultados.
- **Características**: Combina enfoques como recomendación basada en contenido, colaborativa, modelos predictivos y basados en reglas.
- **Caso de uso**: Plataformas que buscan maximizar la calidad y la diversidad de las recomendaciones, como servicios de entretenimiento o comercio electrónico.

## Base de datos URI
neo4j+s://44ff8a96.databases.neo4j.io


## Pseudocódigo del algoritmo de clasificación

```python
// Pseudocódigo del algoritmo de clasificación para inserción en base de datos
Inicio del programa

// Definición de funciones
Función calcularCalorías(género, peso, altura, edad):
  Si género es Hombre:
    Calories = 66.5 + (13.75 × peso en kg) + (5.003 × altura en cm) - (6.75 × edad)
  Sino:
    Calories = 655.1 + (9.563 × peso en kg) + (1.850 × altura en cm) - (4.676 × edad)
  Devolver Calories

Función calcularCaloríasDiarias(calorías, nivelActividad):
  Si nivelActividad es "Sedentario":
    Calorías diarias necesarias = calorías × 1.2
  Sino si nivelActividad es "Ejercicio ligero":
    Calorías diarias necesarias = calorías × 1.375
  Sino si nivelActividad es "Ejercicio moderado":
    Calorías diarias necesarias = calorías × 1.55
  Sino si nivelActividad es "Ejercicio fuerte":
    Calorías diarias necesarias = calorías × 1.725
  Devolver Calorías diarias necesarias

Función filtrarProductos(objetivo, productos, fraccionCalorica, caloríasDiarias):
  Para cada producto en productos:
    CaloríasProducto = producto.calorías
    FracciónProducto = CaloríasProducto / caloríasDiarias
    Si FracciónProducto está entre fraccionCalorica / 3 y fraccionCalorica / 8:
      Mostrar producto


// Tomar datos de la persona
Obtener:
  nombre
  género
  edad
  peso
  altura
  objetivo
  nivelActividad

// Calcular la cantidad de ingesta diaria de calorías
caloríasBase = calcularCalorías(género, peso, altura, edad)
caloríasDiarias = calcularCaloríasDiarias(caloríasBase, nivelActividad)

// Filtrar productos según objetivo y datos de cada producto
productos = baseDeDatosProductos
fraccionCalorica = [1/3, 1/8] // Fracción seleccionada por el usuario
filtrarProductos(objetivo, productos, fraccionCalorica, caloríasDiarias)

Fin del programa
```
## Comentarios de Usuarios

- **Usuario 1**: "La aplicación me ayudó a encontrar productos ideales para mi dieta. ¡Excelente! ![Usuario](imagenes/i1.jpeg)
- **Usuario 2**: "Las recomendaciones son muy precisas y me han servido mucho en mi rutina diaria."![Usuario](imagenes/i2.jpeg)
- **Usuario 3**: "Me encanta cómo la aplicación personaliza las recomendaciones según mis objetivos."![Usuario](imagenes/i3.jpeg)
- **Usuario 4**: "Excelente herramienta para descubrir nuevos productos que se ajustan perfectamente a mis necesidades dietéticas."![Usuario](imagenes/i4.jpeg)
- **Usuario 5**: "Las sugerencias son tan acertadas que me hacen sentir que la aplicación realmente me conoce."![Usuario](imagenes/i5.jpeg)

## Learn More

Para aprender más sobre Next.js, consulta los siguientes recursos:

- [Next.js Documentation](https://nextjs.org/docs) - Aprende sobre las características y API de Next.js.
- [Learn Next.js](https://nextjs.org/learn) - Un tutorial interactivo de Next.js.

Puedes revisar [el repositorio de GitHub de Next.js](https://github.com/vercel/next.js/) - ¡Tus comentarios y contribuciones son bienvenidos!

## Referencias

- Lopez, J., & Lopez, J. (2024, March 23). Algoritmos de Recomendación: Funcionamiento y Aplicaciones. CulturaAI. [culturaai.com](https://culturaai.com/algoritmos-de-recomendacion-funcionamiento/)
- Mayela, A. (2021, November 16). Hablemos de los algoritmos de recomendación. Hazlo Digital. [hazlodigital.com](https://www.hazlodigital.com/blog/tecnologia/hablemos-de-los-algoritmos-de-recomendacion/)
- Na, & Na. (2020, March 3). Sistemas de Recomendación | Aprende Machine Learning. Aprende Machine Learning. [aprendemachinelearning.com](https://www.aprendemachinelearning.com/sistemas-de-recomendacion/)
- AjAtNfpvCbvDQwPxcOAv. (2019, November 19). Consejos para elegir el algoritmo de recomendación adecuado - Making Science. Making Science. [makingscience.es](https://www.makingscience.es/blog/consejos-para-elegir-el-algoritmo-de-recomendacion-adecuado/)

