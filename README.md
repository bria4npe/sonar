# Sonar Next.js Demo

Aplicación mínima en Next.js para probar el análisis estático de Sonar. Incluye
errores lógicos intencionados en `lib/demo.ts`; son ejemplos educativos, no
patrones recomendados para una aplicación real.

## Requisitos

- Node.js 20.9 o superior
- npm
- Una cuenta de SonarCloud y el repositorio conectado a GitHub para el análisis automático

## Ejecutar la app

```bash
npm install
npm run dev
```

Abre <http://localhost:3000>.

## Analizar con SonarCloud en GitHub Actions

El workflow `.github/workflows/sonarcloud.yml` analiza el proyecto en cada push
a cualquier rama, en pull requests y cuando se ejecuta manualmente desde la
pestaña **Actions**. En los pushes, SonarCloud publica el análisis en la rama
correspondiente de GitHub; el nombre de rama lo detecta automáticamente desde
GitHub Actions. No necesitas instalar Node.js ni `node_modules` en tu PC para
ese análisis.

En la configuración del repositorio de GitHub, agrega:

- Un **Actions secret** llamado `SONAR_TOKEN`, con un token de SonarCloud que
  tenga permiso para analizar el proyecto.
- Un **Actions variable** llamado `SONAR_ORGANIZATION`, con la clave de tu
  organización en SonarCloud.
- Opcionalmente, una **Actions variable** `SONAR_HOST_URL` si tu organización
  usa una región distinta de `https://sonarcloud.io`.

Configúralos en **Settings > Secrets and variables > Actions**. El
`sonar.projectKey` ya está definido en `sonar-project.properties`; si creaste
otro proyecto en SonarCloud, reemplázalo por la clave que te proporciona
SonarCloud.

## Casos sembrados

`lib/sonar-bugs.ts` contiene quince ejemplos adicionales para el análisis:

- Ramas que devuelven el mismo resultado y una condición contradictoria.
- Variable local sin usar y asignación sobrescrita.
- Bucle infinito, ternario booleano redundante y ternario anidado.
- Literales repetidos, función vacía y condición duplicada.
- Rango imposible, condición siempre verdadera y resultado calculado pero ignorado.

`lib/demo.ts` conserva otros ejemplos, como la condición VIP duplicada y el
acceso al primer elemento sin comprobar si la lista está vacía. Son defectos
intencionados; no llames a `runInfiniteLoop`, porque no termina. La cantidad y
clasificación de hallazgos dependerán de las reglas activas en SonarCloud.

La detección exacta depende de la edición y las reglas activadas en Sonar.
