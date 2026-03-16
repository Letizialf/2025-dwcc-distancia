# Proxecto Integrador 01–04 (Alumnado)

Completa o código das funcións e clases. Os tests están preparados para comprobar o correcto funcionamento. Traballa nos ficheiros de `src/` indicados en cada sección.

## Obxectivos
- Implementar clases e funcións de arrays
- Manexar almacenamento local
- Pasar todos os tests

## Ficheiros a completar
- `src/classes/Produto.js`
- `src/classes/ProdutoConDesconto.js`
- `src/classes/Inventario.js`
- `src/utils/arrays.js`
- `src/storage/localStorage.js`

## Executar tests
Instala dependencias e executa:

```bash
npm install
npm test
```


## Detalle das Operacións por Ficheiro

### 1. **`src/classes/Produto.js`** - Clase base de producto
**Funcións a implementar:**
- **`constructor(nome, prezo, stock)`**: Inicializar as tres propiedades como atributos da clase
  - `nome`: texto co nome do producto
  - `prezo`: número que representa o prezo
  - `stock`: número de unidades en inventario

- **`modificarStock(cantidade)`**: Actualizar o inventario
  - Debe **sumar** a cantidade ao `stock` actual (non restar)
  - A cantidade será pasada como número
  - Non devolve nada, só modifica a propiedade

**Esperado:** Os tests crean Productos e comprueban que teñen as propiedades asignadas correctamente.

**Guía paso a paso:**
1. Abre o ficheiro `src/classes/Produto.js`
2. No constructor, asigna os parámetros ás propiedades:
3. En `modificarStock()`, suma a cantidade ao stock:

**Como probar:**
```bash
npm test -- produto.test.js
```
Debe pasar os tests que verifican:
- A creación dun producto coas propiedades correctas
- Que `stock` é un número
- Que `modificarStock()` suma correctamente (ej: stock=2, suma 3 → stock=5)

---

### 2. **`src/classes/ProdutoConDesconto.js`** - Clase que herda de Produto
**Funcións a implementar:**
- **`static calcularPrezoConDesconto(prezo, desconto)`**: Método estático (sen instancia)
  - Calcula o prezo co desconto aplicado como **porcentaxe**
  - Exemplo: prezo=100, desconto=10 → resultado=90 (desconto do 10%)
  - Fórmula: `prezo - (prezo * desconto / 100)`
  - Debe convertir a números en caso de recibir strings
  
**Esperado:** Os tests pasan porcentaxes distintas e comprueban cálculos correctos (100 con 10% → 90, 80 con 25% → 60).

**Guía paso a paso:**
1. Abre o ficheiro `src/classes/ProdutoConDesconto.js`
2. Implementa o método estático:
   ```javascript
   static calcularPrezoConDesconto(prezo, desconto) {
        //TODO 
   }
   ```
3. Ten en conta:
   - É un método `static`, non require instancia
   - Converte os parámetros a números con `Number()`
   - Calcula a porcentaxe correctamente

**Como probar:**
```bash
npm test -- produto.test.js
```
Debe pasar os tests que comprueban:
- Desconto do 10% sobre 100 = 90
- Desconto do 25% sobre 80 = 60
- Conversión de strings a números


### 3. **`src/classes/Inventario.js`** - Xestión de productos
**Funcións a implementar:**
- **`constructor()`**: Xa está iniciado con `this.produtos = []` (array baleiro)

- **`engadirProduto(produto)`**: Engadir un Produto ao array
  - Recibe un obxecto Produto
  - Engádeo ao final do array (usar `push()`)

- **`limpar()`**: Baleirar o inventario
  - Borra todos os productos do array
  - Deixa `this.produtos = []` ou usar `length = 0`

- **`consultarStock(nome)`**: Buscar stock dun producto polo nome
  - Busca o producto con ese nome
  - Devolve o seu `stock` se existe
  - Devolve `null` se non existe

- **`resumo()`**: Devolver estatísticas do inventario
  - **`totalItems`**: Suma de todos os stocks
  - **`prezoMedio`**: Promedio dos prezos (suma de prezos / número de productos)
  - Devolve obxeto: `{ totalItems, prezoMedio }`

**Esperado:** 
- Engadir 2 productos (A: prezo=10, stock=2) e (B: prezo=20, stock=3) → totalItems=5, prezoMedio=15
- Limpar borra todos
- Consultar stock valida se existe o producto

**Guía paso a paso:**
1. Abre o ficheiro `src/classes/Inventario.js`
2. Implementa `engadirProduto()`:
3. Implementa `limpar()`:
4. Implementa `consultarStock()`:
5. Implementa `resumo()`:


**Como probar:**
```bash
npm test -- inventario.test.js
```
Debe pasar os tests que comprueban:
- Engadir productos e calcular resumo (totalItems=5, prezoMedio=15)
- Limpar deixa o array baleiro
- Consultar stock por nome devolve o valor correcto ou null

---

### 4. **`src/utils/arrays.js`** - Funcións de utilidad con arrays
**Funcións a implementar:**
- **`ordenarPorPrezoAsc(arr)`**: Ordenar productos por prezo (menor a maior)
  - **Non muta** o array orixinal (debe devolver un novo)
  - Ordena polos campos `prezo` en orde ascendente
  - Usar `sort()` nunha copia do array ou `[...arr].sort()`

- **`filtrarPorStockMin(arr, min)`**: Filtrar productos con stock mínimo
  - Devolve os productos onde `stock >= min`
  - Exemplo: min=3 → devolve productos con 3 ou máis unidades
  - Usar `filter()`

**Esperado:**
- Data: [{nome:'A', prezo:20, stock:1}, {nome:'B', prezo:10, stock:5}, {nome:'C', prezo:15, stock:3}]
- Ordenar por prezo: ['B' (prezo 10), 'C' (prezo 15), 'A' (prezo 20)]
- Filtrar min=3: ['B' (stock 5), 'C' (stock 3)]

**Guía paso a paso:**
1. Abre o ficheiro `src/utils/arrays.js`
2. Implementa `ordenarPorPrezoAsc()` e recorda que: 
   - `[...arr]` crea unha copia para non mutar o orixinal
   - `sort()` ordena por prezo de menor a maior
3. Implementa `filtrarPorStockMin()` e recorda que:
   - `filter()` devolve só os que cumplen a condición

**Como probar:**
```bash
npm test -- arrays.test.js
```
Debe pasar os tests que comprueban:
- Orde ascendente de prezos: B(10) → C(15) → A(20)
- Filtro de stock mínimo 3: B(stock 5) e C(stock 3)
- Non muta o array orixinal (B, C, A segue sendo B, C, A após ordenar)

---

### 5. **`src/storage/localStorage.js`** - Persistencia de datos
**Funcións a implementar:**
- **`cargarInventario()`**: Recuperar datos do navegador
  - Lee a clave `'proxecto-01-04-inventario'` do localStorage
  - Se existe, devolve o array de productos (parsear JSON)
  - Se non existe, devolve un array baleiro `[]`

- **`gardarInventario(produtos)`**: Gardar datos no navegador
  - Garda o array de productos como JSON na clave `'proxecto-01-04-inventario'`
  - Usa `JSON.stringify()` para serializar
  - Usa `localStorage.setItem(KEY, valor)`

**Esperado:** Os datos persisten entre recargas (en ambiente de navegador).

**Guía paso a paso:**
1. Abre o ficheiro `src/storage/localStorage.js`
2. Implementa `cargarInventario()` e recorda que: 
   - `localStorage.getItem(KEY)` obtén os datos serializados
   - `JSON.parse()` converte a texto a obxeto/array
   - Se non existe, devolve array baleiro
3. Implementa `gardarInventario()` e recorda que: 
   - `JSON.stringify()` converte o array a texto
   - `localStorage.setItem()` garda no navegador

**Como probar:**
```bash
npm test
```
Ou manualmente no navegador (abrir DevTools → Console):
```javascript
// Cargar
const inv = cargarInventario();
console.log(inv); // []

// Gardar
gardarInventario([{nome: 'Test', prezo: 10, stock: 5}]);

// Verificar
const inv2 = cargarInventario();
console.log(inv2); // [{nome: 'Test', prezo: 10, stock: 5}]
```

