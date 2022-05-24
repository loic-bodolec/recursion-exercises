# Exercices sur la récursivité

Une fonction récursive, c'est une fonction qui s'appelle elle-même. La récursivité est une technique algorithmique, qui se prête particulièrement bien à la résolution de certains problèmes (par ex. parcours d'arbres).

> Pour tester les exemples : cloner ce repo, `cd recursion-exercises` puis lancer `yarn` pour installer les dépendances.

D'abord, un exemple : une fonction qui calcule la somme des nombres de `0` à `n`. On va d'abord l'écrire de façon classique :

```typescript
function sumNumbers(n: number) {
  let result = 0;
  for (let i = 0; i <= n; i++) {
    result += i;
  }
  return result;
}

console.log(sumNumbers(5)); // -> 15
console.log(sumNumbers(7)); // -> 28
```

> Pour tester cet exemple : `npx ts-node example/sumNumbers.ts`

Le même exemple en récursif :

```typescript
function sumNumbersRecursive(n: number) {
  // Condition d'arrêt : fondamental pour une fonction récursive,
  // sinon elle continue à s'appeler à l'infini
  if (n === 0) {
    return n;
  }
  return n + sumNumbersRecursive(n - 1);
}

console.log(sumNumbersRecursive(5)); // -> 15
console.log(sumNumbersRecursive(7)); // -> 28
```