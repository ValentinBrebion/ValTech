---
next: 
    text: 'TypeScript - Intro'
    link: 'fr/language/TypeScript/IntroTypeScript'
prev: 
    text: 'premier cours sql'
    link: 'fr/language/sql/SQL'
---
# Deuxième cours SQL

## Indexation et Optimisation des Requêtes

Définition :
L’indexation est une technique qui permet d’accélérer l’accès aux données dans une table en créant une structure de données supplémentaire. L’optimisation des requêtes consiste à écrire des requêtes SQL efficaces pour réduire le temps de traitement.

Explication :

Les index permettent de retrouver rapidement les lignes correspondant à une condition.

Un mauvais index ou une absence d’index peut rendre les requêtes très lentes.

L’optimisation passe par : utilisation des index, réduction des jointures inutiles, et analyse du plan d’exécution.

Exemple SQL :
```sql
-- Création d'un index sur la colonne 'nom'
CREATE INDEX idx_nom ON Employes(nom);

-- Vérifier le plan d'exécution d'une requête
EXPLAIN SELECT * FROM Employes WHERE salaire > 3000;
```

## Fonctions SQL

Définition :
Les fonctions SQL sont des outils qui permettent de manipuler ou d’agréger des données.

Explication :

Fonctions d’agrégation : calculs sur plusieurs lignes (SUM, AVG, COUNT).

Fonctions scalaires : calcul sur une valeur (UPPER, ROUND).

Fonctions analytiques : calculs avancés sur un ensemble de lignes, sans les résumer (ROW_NUMBER, RANK).

Exemple SQL :

-- Moyenne des salaires
```sql
SELECT AVG(salaire) AS salaire_moyen FROM Employes;
```
-- Conversion en majuscules et arrondi
```sql
SELECT UPPER(nom), ROUND(salaire, 2) FROM Employes;
```
-- Classement des employés par salaire
```sql
SELECT nom, salaire,
       RANK() OVER (ORDER BY salaire DESC) AS rang
FROM Employes;
```

## Sous-Requêtes et Requêtes Imbriquées

Définition :
Une sous-requête est une requête SQL placée à l’intérieur d’une autre requête. Une requête imbriquée est une requête qui dépend d’une autre pour être exécutée.

Explication :

Les sous-requêtes simples retournent une valeur unique ou un ensemble de valeurs.

Les sous-requêtes corrélées dépendent de chaque ligne de la requête externe.

Les requêtes imbriquées peuvent remplacer certaines jointures pour simplifier la lecture.

Exemple SQL :

-- Sous-requête simple
```sql
SELECT nom FROM Employes
WHERE salaire > (SELECT AVG(salaire) FROM Employes);
```
-- Sous-requête corrélée
```sql
SELECT e1.nom FROM Employes e1
WHERE salaire > (SELECT AVG(salaire) 
                 FROM Employes e2 
                 WHERE e1.dept_id = e2.dept_id);
```
## Vues et Procédures Stockées

Définition :

Vue : table virtuelle basée sur le résultat d’une requête.

Procédure stockée : ensemble de requêtes SQL stockées pour être réutilisées.

Explication :

Les vues simplifient les requêtes fréquentes et permettent de sécuriser l’accès aux données.

Les procédures stockées centralisent la logique, réduisent les erreurs et améliorent les performances.

Exemple SQL :

-- Vue
```sql
CREATE VIEW vue_employes AS
SELECT nom, salaire FROM Employes WHERE salaire > 3000;
```
-- Procédure stockée
```sql
CREATE PROCEDURE AugmenterSalaire(@id INT, @taux FLOAT)
AS
UPDATE Employes
SET salaire = salaire * (1+@taux)
WHERE id = @id;
```
## Triggers

Définition :
Un trigger est un déclencheur automatique qui s’exécute lors d’une opération (INSERT, UPDATE, DELETE) sur une table.

Explication :

Utilisé pour automatiser des actions, comme la journalisation ou la validation de données.

Permet de renforcer l’intégrité des données.

Exemple SQL :
```sql
CREATE TRIGGER LogSuppression
AFTER DELETE ON Employes
FOR EACH ROW
INSERT INTO Employes_Supprimes VALUES (OLD.id, OLD.nom, NOW());
```

## Gestion des Transactions Avancées

Définition :
Une transaction est un ensemble d’opérations SQL qui doivent être exécutées ensemble pour garantir l’intégrité des données.

Explication :

ACID : Atomicité, Cohérence, Isolation, Durabilité.

Niveaux d’isolation pour contrôler la lecture concurrente.

Possibilité de COMMIT (valider) ou ROLLBACK (annuler).

Exemple SQL :
```sql
BEGIN TRANSACTION;

UPDATE Comptes SET solde = solde - 100 WHERE id = 1;
UPDATE Comptes SET solde = solde + 100 WHERE id = 2;

COMMIT; -- valider
-- ROLLBACK; -- annuler si erreur
```

## Sécurité des Bases de Données

Définition :
Ensemble de pratiques visant à protéger les données contre les accès non autorisés et les pertes.

Explication :

Gestion des utilisateurs et des privilèges (GRANT, REVOKE).

Chiffrement des données sensibles.

Audit et prévention des injections SQL.

Exemple SQL :
```sql
GRANT SELECT, INSERT ON Employes TO user_app;
REVOKE DELETE ON Employes FROM user_app;
```

## Normalisation et Dénormalisation

Définition :

Normalisation : organiser les données pour éliminer la redondance et les anomalies.

Dénormalisation : introduire des redondances pour améliorer la performance.

Explication :

Normalisation : 1NF → 2NF → 3NF → BCNF.

Dénormalisation : tables combinées pour éviter les jointures fréquentes.

Exemple :

-- Normalisation : table Clients séparée
```sql
Clients(id, nom, adresse)
Commandes(id, client_id, date_commande)
```
-- Dénormalisation : inclure nom_client directement dans Commandes
```sql
Commandes(id, client_id, nom_client, date_commande)
```

## Gestion des Données Temporelles

Définition :
Les données temporelles incluent les dates et heures pour suivre les événements dans le temps.

Explication :

Permet de suivre l’historique des enregistrements.

Utilisation de types DATE, TIMESTAMP et fonctions comme NOW(), DATEDIFF().

Exemple SQL :
```sql
INSERT INTO Employes (nom, salaire, date_embauche)
VALUES ('Alice', 3500, CURRENT_DATE);
```

## Intégration avec d’Autres Technologies

Définition :
Connexion des bases de données avec des systèmes externes ou applications.

Explication :

ETL : extraire, transformer, charger des données.

JDBC/ODBC : connexion aux applications.

Big Data : Hadoop, Spark.

API REST : exposer les données.

## Gestion des Erreurs et des Exceptions

Définition :
Mécanisme pour gérer les erreurs lors de l’exécution de requêtes SQL.

Explication :

Permet de capturer et traiter les erreurs pour éviter les interruptions.

TRY...CATCH (SQL Server), EXCEPTION (PL/SQL).

Exemple SQL :
```sql
BEGIN
    INSERT INTO Employes VALUES (1, 'Jean', 3000);
EXCEPTION
    WHEN DUP_VAL_ON_INDEX THEN
        DBMS_OUTPUT.PUT_LINE('Erreur : clé déjà existante.');
END;
```

## Études de Cas et Projets Pratiques

Exemples :

Gestion d’entreprise : employés, services, projets.

E-commerce : produits, commandes, clients.

Système bancaire : comptes, transactions, sécurité.

## Bases de Données NoSQL vs SQL

Définition :

SQL : relationnel, schéma fixe, transactions ACID.

NoSQL : flexible, données massives, schéma variable.

Explication :

SQL → cohérence et intégrité, adapté aux banques et ERP.

NoSQL → scalabilité et performance, adapté aux réseaux sociaux et IoT.