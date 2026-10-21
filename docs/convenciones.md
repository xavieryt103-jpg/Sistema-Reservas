## Estrategia de ramas (Gitflow simplificado)
- main: version estable. Solo recibe releases por Pull Request.
- develop: version integrada. Solo recibe cambios por Pull Request aprobado.
- feature/nombre: funcionalidad nueva, sale de develop.
- docs/nombre: documentacion, sale de develop.
- test/nombre: pruebas, sale de develop.
- release/x.y: preparacion de una version, sale de develop y va a main.

## Responsables
- Xavier: lider del proyecto y version final.
- Anthony: integrador y reviewer.
- Caleb: modulo de clientes.
- Israel: modulo de servicios.
- Carlos: modulo de reservas.

## Reglas de revision
- Todo cambio entra por Pull Request.
- Cada Pull Request necesita 1 aprobacion de otro integrante.
- El Pull Request debe incluir "Closes #N" de su issue.

## Commits
- feat: funcionalidad nueva
- fix: correccion
- docs: documentacion
- test: pruebas
- chore: configuracion
- release: preparacion de version

## Versiones
- X.0.0: cambio grande
- x.Y.0: funcionalidad nueva
- x.y.Z: correccion
