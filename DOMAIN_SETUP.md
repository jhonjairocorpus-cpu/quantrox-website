# Configuracion del dominio

Dominio principal:

```text
quantroxsystems.cloud
```

El sitio esta publicado en GitHub Pages desde:

```text
https://jhonjairocorpus-cpu.github.io/quantrox-website/
```

## Registros DNS para usar GitHub Pages

En el panel DNS del dominio, cambia el dominio raiz `quantroxsystems.cloud` para que apunte a GitHub Pages con estos registros `A`:

```text
@    A    185.199.108.153
@    A    185.199.109.153
@    A    185.199.110.153
@    A    185.199.111.153
```

Para `www.quantroxsystems.cloud`, usa:

```text
www    CNAME    jhonjairocorpus-cpu.github.io
```

El registro actual apunta a:

```text
quantroxsystems.cloud    A    145.79.4.70
www.quantroxsystems.cloud CNAME quantroxsystems.cloud
```

Ese registro `A` actual debe reemplazarse si queremos que GitHub Pages sirva la web.

## Despues de cambiar DNS

1. Esperar propagacion DNS.
2. Entrar a GitHub > repositorio `quantrox-website` > Settings > Pages.
3. En Custom domain escribir:

```text
quantroxsystems.cloud
```

4. Guardar.
5. Cuando GitHub valide el dominio, activar `Enforce HTTPS`.

## Recomendacion para la suite

La Suite Empresarial puede mantenerse enlazada desde la web principal o conectarse luego a:

```text
app.quantroxsystems.cloud
```

Para eso se necesitaria crear un registro:

```text
app    CNAME    jhonjairocorpus-cpu.github.io
```

y configurar ese subdominio en el repositorio `suite-empresarial`.
