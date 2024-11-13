---
next: false
prev: false
---

# Regex

Les expressions régulières (ou regex) sont des motifs utilisés pour faire correspondre, rechercher, extraire ou manipuler des chaînes de caractères. Elles sont puissantes pour traiter des textes complexes et se trouvent dans de nombreux langages de programmation tels que Python, JavaScript, Java, Perl, etc.

##  Concept de Base
Une regex est une séquence de caractères qui forme un modèle. Ce modèle peut être utilisé pour :

- Valider : Vérifier si une chaîne correspond à un motif particulier (ex. : est-ce une adresse e-mail ?).
- Chercher : Trouver toutes les occurrences d'un motif dans un texte.
- Extraire : Isoler certaines parties d'une chaîne qui correspondent à un motif.
- Remplacer : Modifier une chaîne en fonction des parties correspondantes à un motif.
<br>

## Syntaxe de Base des Regex

| Caractère        |      Description      |
| ------------- | :-----------: |
| .      | Correspond à n'importe quel caractère, sauf un saut de ligne |
| \d    |   Correspond à un chiffre ([0-9])    |
| \D |   Correspond à tout sauf un chiffre ([^0-9])    |
| \w |   Correspond à un caractère alphanumérique ([a-zA-Z0-9_])    |
| \W |   Correspond à tout sauf un caractère alphanumérique    |
| \s |   Correspond à un espace, tabulation ou saut de ligne   |
| \S |   Correspond à tout sauf un espace   |
| ^ |   Début d'une chaîne   |
| $ |   Fin d'une chaîne   |
| [...] |   Correspond à un ensemble de caractères   |
| [^...] |  Correspond à tout sauf l'ensemble de caractères spécifié   |
| ` | `   |
| (abc) | Groupe de capture pour isoler des parties de la chaîne  |

## Quantificateurs
Les quantificateurs permettent de spécifier le ***nombre de fois qu'un élément peut apparaître***.

| Quantificateur        |      Description      |
| ------------- | :-----------: |
| *     | 0 ou plusieurs fois |
| +     | 1 ou plusieurs fois |
| ?     | 0 ou 1 fois (facultatif) |
| n,    | Exactement n fois |
| n,    | Au moins n fois |

## Exemples de Regex
Validation d'une adresse e-mail :

```regex
[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}
```

::: tip <h4>Explication :</h4>
- `[a-zA-Z0-9._%+-]+` : Une ou plusieurs lettres, chiffres ou certains caractères spéciaux avant le @.
- `@[a-zA-Z0-9.-]+` : Le domaine doit contenir des lettres, des chiffres, des points ou des tirets.
- `\.[a-zA-Z]{2,}` : Un point suivi de deux lettres ou plus pour le domaine de premier niveau (.com, .fr, etc.).
:::

Trouver tous les numéros de téléphone au format "123-456-7890" :

```regex
\d{3}-\d{3}-\d{4}
```

::: tip <h4>Explication :</h4>
- `\d{3}` : Trois chiffres.
- `\d{3}` : Trois autres chiffres.
- `\d{4}` : Quatre chiffres.
:::

Valider un code postal français (5 chiffres) :

```regex
\d{5}
```

## Groupes de Capture
Les groupes de capture permettent de capturer des sous-parties d'une chaîne et de les réutiliser.

::: tip <h4>Exemple : Extraire le domaine d'une adresse e-mail</h4>
```regex
([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})
```
Si on applique cette regex à "nom@domaine.com", voici le résultat :
* Groupe 1 : `"nom"`
* Groupe 2 : `"domaine.com"`
:::

## Références aux groupes capturés
Après avoir capturé des groupes, on peut se référer à eux pour des opérations de remplacement.

Regex pour remplacer un numéro de téléphone :
```regex
(\d{3})-(\d{3})-(\d{4})
```
Et en remplaçant par :

```text
($1) $2-$3
```
Cela convertira le numéro "123-456-7890" en "(123) 456-7890".

## Classes de caractères
Les classes de caractères sont utilisées pour définir un ensemble de caractères que l’on souhaite correspondre.


| Classe        |      Description      |
| ------------- | :-----------: |
| [abc]    | Correspond à 'a', 'b', ou 'c' |
| [a-z]   | Correspond à n'importe quelle lettre minuscule |
| [A-Z]   | Correspond à n'importe quelle lettre majuscule |
| [0-9]   | Correspond à n'importe quel chiffre |
| [a-zA-Z0-9]   | Correspond à une lettre majuscule, minuscule ou un chiffre |
| [^abc]   | Correspond à tout sauf 'a', 'b', ou 'c' |

## Ancre de début et de fin
* `^` : Correspond au début d'une chaîne. Exemple : ^Bonjour correspond à une chaîne qui commence par "Bonjour".
* `$` : Correspond à la fin d'une chaîne. Exemple : monde$ correspond à une chaîne qui se termine par "monde".

::: info Exemple :
Correspondre à une chaîne qui commence par un mot et se termine par un point :
```regex
^\w+.*\.$
```
:::
## Modificateurs (flags)
Les modificateurs permettent de modifier le comportement d'une regex :

* `i` : Insensible à la casse (ex : Hello correspond à "hello", "HELLO", etc.).
* `g` : Recherche globale, permettant de trouver toutes les occurrences dans une chaîne.
* `m` : Mode multi-lignes, permettant de faire correspondre le début (^) ou la fin ($) de chaque ligne.

Exemple :
Pour une recherche insensible à la casse :
```regex
/bonjour/i
```

### Exemples d'utilisation dans le code (Python)
a) ***Correspondance simple :***
```python
import re

texte = "Bonjour, voici mon email : nom@domaine.com"
motif = r'\b\w+@\w+\.\w+\b'
email = re.search(motif, texte)

if email:
    print("Adresse e-mail trouvée :", email.group())
```

b) ***Remplacement de texte :***
```python
import re

texte = "Numéro de téléphone : 123-456-7890"
nouveau_texte = re.sub(r'(\d{3})-(\d{3})-(\d{4})', r'(\1) \2-\3', texte)
print(nouveau_texte)
```