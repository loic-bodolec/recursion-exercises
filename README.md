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

Explications

```
sumNumbers(5) -> 15
sumNumbers(6) -> 21

21 = 6 + 5 + 4 + 3 + 2 + 1
         -----------------
                 |
                 v

                 sumNumbers(5)
```

Le résultat de `sumNumbers(6)` vaut 6 plus le résultat de `sumNumbers(5)`.

## Exercices

Sous le dossier `exercises`.

### Palindrôme

> Fonction qui renvoie `true` si le mot passé en argument est un palindrôme :

* éditer le fichier `exercises/palindrome.ts`
* pour tester : `yarn test exercises/palindrome.test.ts`


### Nombre minimum

> Fonction qui renvoie le nombre minimum dans un tableau :

* éditer le fichier `exercises/minNumber.ts`
* pour tester : `yarn test exercises/minNumber.test.ts`

Indices

```

minNumber([3, 2, 1]) --> 1
           v
           3  vs minNumber([2, 1])
                            v
                            2  vs minNumber([1])
```

Pour trouver le nombre minimum dans `[3, 2, 1]`, on va comparer le 1er nombre (`3`) au minimum renvoyé par `minNumber([2, 1])`.

### Factorielle

> La factorielle de n est une fonction qui renvoie le produit de tous les nombres de 1 à n. Elle est notée n!. Factorielle de 4 ou 4! vaut 4 * 3 * 2 * 1, soit 24.

* éditer le fichier `exercises/factorial.ts`
* pour tester : `yarn test exercises/factorial.test.ts`
