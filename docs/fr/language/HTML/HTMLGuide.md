---
prev: 
    text: 'HTML Configuration'
    link: '/fr/language/HTML/HTMLConfiguration'
next:
    text: 'Introduction Git'
    link: '/fr/language/git/git'
---
# Guide HTML

Vous vous êtes surement demandé comment un site internet était fait ? Comment les informations que vous voyez à l'écran sont ajencées ? Laissez moi éclaircir tout ça.

Tout d'abord, lorsque vous consultez un site simple vous consultez en réalité ce qu'on appelle un fichier ```HTML```.

## C'est quoi un fichier HTML ?
### Comment le déclarer ?
Une fois que vous avez téléchargé un éditeur de code, vous allez créer un nouveau fichier. Pour dire à l'éditeur de code que vous allez créer un fichier HTML, vous allez nommer votre fichier comme vous le voulez et ajouter `.html` comme suit : 
```html
nomFichier.html
```
### Que faire après ?
C'est simple : tout 😉

Pour être plus précis, dans un fichier HTML vous pouvez ajouter du texte, des images, des vidéos, du son ect.. mais avant toutes choses, ce guide va détailler les bonnes conventions.

#### A- Les balises
>Si vous voulez développer des sites internet, il vous sera utile de connaître le B-A BA à savoir : `les balises`.

:::tip Définition
Les balises sont ***<u>les éléments de base du codage HTML</u>***. Elles sont utilisées pour mettre en forme un texte, structurer et hiérarchiser le contenu d'une page.
Elles indiquent également au navigateur comment afficher la page en question.
:::

#### B- Comment les déclarer ?
>Rien de plus simple,Tous les fichiers HTML commencent donc par la déclaration du doctype suivie par la balise ouvrante et ils se terminent tous par la balise fermante, Exemple:

```html
<p></p> <!--paragraphe-->
```
Bien sûr il en existe toute une panoplie comme :

| Types        |      Balises      |  
| ------------- | :-----------: |
| Paragraphes     | `<p></p>` |
| Images      |   `<img></img>`    |
| Vidéos | `<video></video>`   |

:::info tips
Bien entendu, je ne vais pas vous énoncer l'entièreté des balises HTML ici-même. Cependant, il existe un site qui le fait déjà et vous permet de retrouver des caractéristiques supplémentaires concernant l'ensemble des balises HTML qui existent. Je vous invite a aller consulter le site<br> [MDN web docs](https://developer.mozilla.org/fr/docs/Web/HTML)
:::

## Comment bien construire une page HTML ?
## Etape 1 : la structure

Lorsque vous avez créé votre page HTML, il y a une structure a respecter. Pour dire que vous allez utiliser le language HTML, vous allez
mettre ces lignes de code en premier :
```html
<!DOCTYPE html>
```
Cette ligne indique simplement au navigateur quel est le type de document auquel il doit s'attendre.

:::warning Culture
La déclaration du doctype `n'est pas sensible à la casse`. c'est à dire que vous pouvez l'écrire de plusieurs façons comme :<br> 
`<!DOCTYPE html>`<br> 
`<!DocType html>`<br> 
`<!Doctype html>`<br> 
`<!doctype html>`
:::

Ensuite vous allez mettre les balises HTML et son contenu comme suit :
```html
<!DOCTYPE html>
    <html>
        <head>
            <title>Title of the document</title>
        </head>
        <body>
            The content of the document......
        </body>
    </html>
```

### Balise head
C'est ici que vous allez déclarer ce qu'on appelle les méta descriptions, les liens de style, le titre du document ect...

### Balise body
C'est ici que vous allez structurer votre contenu en mettant des titres, des tableaux ect...