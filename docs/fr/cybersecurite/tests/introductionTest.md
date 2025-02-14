# Cours sur les Tests

## Introduction
Les tests sont une étape cruciale dans le développement de logiciels, de produits ou de systèmes, visant à garantir leur qualité, leur fiabilité et leur conformité aux exigences spécifiées. Ils permettent d'identifier les défauts, les erreurs ou les dysfonctionnements avant la mise en service ou la livraison finale.

## Types de Tests

### Tests Techniques
- **Objectif** : Vérifier les réalisations à différentes granularités et sur divers aspects techniques.
- **Exemples** :
  - **Tests Unitaires (TU)** : Vérifier que chaque unité ou composant individuel du code fonctionne correctement. Par exemple, tester une fonction qui calcule la somme de deux nombres pour s'assurer qu'elle retourne le bon résultat.
  - **Tests d'Intégration (TI)** : Tester l'interaction entre différents modules ou composants pour s'assurer qu'ils fonctionnent ensemble correctement. Par exemple, vérifier que le module de paiement fonctionne bien avec le module de gestion des stocks.
  - **Tests de Performance** : Mesurer la réactivité, la stabilité, et la scalabilité du système sous différentes charges de travail. Par exemple, tester comment un site web se comporte avec un grand nombre d'utilisateurs simultanés.
  - **Tests de Sécurité** : Identifier et corriger les vulnérabilités de sécurité dans le système. Par exemple, vérifier que les données sensibles sont correctement chiffrées.

### Tests Fonctionnels
- **Objectif** : Vérifier les aspects fonctionnels à une granularité plus élevée, notamment la conformité aux spécifications fonctionnelles.
- **Exemples** :
  - **Tests de Recette Fonctionnelle** : Vérifier que le système ou l'application répond aux exigences fonctionnelles telles que définies par la MOA. Par exemple, s'assurer qu'un utilisateur peut créer un compte et se connecter sans problème.
  - **Tests de Parcours Utilisateur** : Vérifier que les différents parcours utilisateurs sont logiques, sans erreur, et fluides. Par exemple, s'assurer qu'un utilisateur peut naviguer facilement de la page d'accueil à la page de paiement.

### Correction des Bugs
- **Objectif** : Identifier et corriger les anomalies détectées lors des tests.
- **Exemple** : Si un test révèle qu'un bouton ne fonctionne pas, le développeur doit identifier la cause du problème et le corriger.

### Autres Types de Tests
- **Tests de Non-Régression (TNR)** : S'assurer que les nouvelles modifications n'ont pas introduit de bugs dans les fonctionnalités existantes. Par exemple, après avoir ajouté une nouvelle fonctionnalité, vérifier que les anciennes fonctionnalités fonctionnent toujours correctement.
- **Tests de Compatibilité** : Vérifier que l'application fonctionne correctement sur différents navigateurs, systèmes d'exploitation, et configurations matérielles. Par exemple, tester un site web sur Chrome, Firefox, et Safari.
- **Tests de Conformité** : S'assurer que le système est conforme aux réglementations légales, aux normes de l'industrie, et aux politiques internes de l'entreprise. Par exemple, vérifier que le système respecte le RGPD pour la protection des données personnelles.
- **Tests Exploratoires** : Utiliser les fonctionnalités de l’application sans cadre afin de déceler des anomalies ou des problèmes en dehors des scénarios de test planifiés. Par exemple, naviguer librement sur une application pour découvrir des bugs non anticipés.
- **Tests de Formation/Documentaire** : Vérifier que la documentation utilisateur est claire et suffisante pour permettre une utilisation efficace du système. Par exemple, s'assurer que le manuel utilisateur est compréhensible et couvre toutes les fonctionnalités importantes.

En intégrant ces différents types de tests dans le processus de développement, les équipes peuvent améliorer la qualité globale de leurs produits et réduire les risques de défaillances après la mise en service.

## Asserts et tests
Quand on réalise des tests, il faut dissocier les tests et les asserts.

- Un test est une méthode exécutée à l'intérieur de la classe de Test
- Un assert est une méthode de la classe héritée et qui permet d'affirmer quelque chose. Chaque affirmation doit être vraie pour que le test soit bon.
- Le résultat peut être de la forme :

```
Tests: 5, Assertions: 8, Failures: 1.
```

Cela signifie que :

- 5 tests différents ont été exécutés à travers 5 méthodes qui commencent par le mot test.
- 8 asserts ont été réalisées
- 1 fonction est en erreur à cause d'1 assert (affirmation) fausse

Dans ce cas, le test a échoué.
