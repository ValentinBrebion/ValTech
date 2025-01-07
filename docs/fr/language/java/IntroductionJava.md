---
next: false
prev: 
    text: 'Introduction à TypeScript'
    link: 'fr/language/TypeScript/IntroTypeScript'
---

# Introduction Java
Java est un langage de programmation orienté objet largement utilisé pour développer des applications web, mobiles et embarquées. Créé par Sun Microsystems (maintenant propriété d'Oracle), Java est connu pour sa portabilité, sa robustesse et sa sécurité. Ce cours vous guidera à travers les concepts fondamentaux de Java, vous permettant de comprendre et de maîtriser ce langage puissant.

## Histoire de Java
Java a été développé par James Gosling et son équipe chez Sun Microsystems en 1995. Initialement conçu pour les appareils électroniques grand public, Java a rapidement évolué pour devenir un langage de programmation généraliste. Sa popularité a explosé avec l'essor d'Internet, où il est devenu un choix privilégié pour le développement d'applications web.

## Caractéristiques de Java
***<u>Portabilité</u>***<br>
>L'un des principaux avantages de Java est sa portabilité. Le code Java est compilé en bytecode, qui peut être exécuté sur n'importe quelle machine disposant de la Java Virtual Machine (JVM). Cela signifie que vous pouvez écrire du code une fois et l'exécuter partout.

***<u>Orienté Objet</u>***<br>
>Java est un langage orienté objet, ce qui signifie qu'il utilise des concepts tels que les classes, les objets, l'héritage, le polymorphisme et l'encapsulation. Ces concepts permettent de structurer le code de manière modulaire et réutilisable.

***<u>Sécurité</u>***<br>
>Java offre plusieurs mécanismes de sécurité, notamment le gestionnaire de sécurité, les politiques de sécurité et les classes de sécurité. Ces mécanismes aident à protéger les applications contre les accès non autorisés et les attaques.

***<u>Robustesse</u>***<br>
>Java est conçu pour être robuste, avec une gestion stricte des exceptions et des vérifications de types. Cela aide à prévenir les erreurs courantes et à améliorer la fiabilité des applications.

***<u>Multithreading</u>***<br>
>Java prend en charge le multithreading, permettant l'exécution simultanée de plusieurs threads. Cela est particulièrement utile pour les applications nécessitant des performances élevées et une réactivité accrue.

## Installation de Java
Pour commencer à développer en Java, vous devez installer le Java Development Kit (JDK). Voici les étapes pour installer le JDK sur différents systèmes d'exploitation :

::: code-group

```Windows
Téléchargez le JDK depuis le site officiel d'Oracle ou d'OpenJDK.
Exécutez l'installateur et suivez les instructions à l'écran.
Ajoutez le répertoire bin du JDK à la variable d'environnement PATH.
```

```macOS
Téléchargez le JDK depuis le site officiel d'Oracle ou d'OpenJDK.
Ouvrez le fichier .dmg et suivez les instructions d'installation.
Ajoutez le répertoire bin du JDK à la variable d'environnement PATH.
```
```Linux
Utilisez le gestionnaire de paquets de votre distribution pour installer le JDK. Par exemple, sur Ubuntu, vous pouvez utiliser la commande suivante :

sudo apt-get install openjdk-11-jdk
Ajoutez le répertoire bin du JDK à la variable d'environnement PATH.
```
:::

## Premier Programme en Java
Voici un exemple simple de programme Java qui affiche "Hello, World!" à l'écran :


```java 
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```
Pour compiler et exécuter ce programme, suivez ces étapes :

:::tip Etape 
- Enregistrez le code dans un fichier nommé HelloWorld.java.
>Ouvrez un terminal et naviguez jusqu'au répertoire contenant le fichier.
Compilez le programme avec la commande suivante :

- javac HelloWorld.java
>Exécutez le programme compilé avec la commande suivante :

- java HelloWorld
>Vous devriez voir le message "Hello, World!" s'afficher à l'écran.
:::
## Conclusion
Ce cours d'introduction à Java vous a présenté les bases du langage, ses caractéristiques principales et comment installer le JDK. Dans les prochaines sections, nous explorerons en détail les concepts de programmation orientée objet, les structures de contrôle, les collections, et bien plus encore. Restez à l'écoute pour approfondir vos connaissances en Java !