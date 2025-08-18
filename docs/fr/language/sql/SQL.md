---
next: 
    text: 'deuxième cours SQL'
    link: 'fr/language/sql/sqlv2'
prev: 
    text: 'Thème Enfant - Wordpress'
    link: 'fr/language/PHP/Wordpress/ChildTheme'
---

# Cours SQL

SQL a été développé dans les années 1970 par IBM pour gérer des bases de données relationnelles, basé sur les travaux d'Edgar F. Codd. Les chercheurs Donald Chamberlin et Raymond Boyce ont initialement nommé ce langage SEQUEL (puis SQL). En 1986, SQL est devenu un standard international avec l'ANSI, puis l'ISO. Depuis, il est le langage principal pour interroger et manipuler des bases de données, utilisé par des systèmes comme MySQL, PostgreSQL et Oracle.

## Terminologie
| Vocabulaire   |      Définition      |
| ------------- | :-----------: |
| Table      | Une collection de données organisée en lignes et colonnes |
| Colonne   |    Un champ unique dans une table qui contient le même type de données    |
| Ligne |   Un enregistrement unique (un tuple) dans une table, une collection de données spécifiques dans chaque colonne   |
| Clé primaire `(PRIMARY KEY)`      | Un identifiant unique pour chaque ligne d'une table. |
| Clé étrangère `(FOREIGN KEY)`     | Une colonne qui référence la clé primaire d'une autre table pour créer des relations entre les tables. |

## Avantages et Limites du SQL
::: warning <h4 style="margin:0px" >Avantages ✅</h4>
- **Standardisé** : Compatible entre divers SGBD
- **Flexibles** : Capable de gérer tout type de données
- **Performant** : Optimisable pour traiter de grosses volumétries en temps réel
- **Universel** : Utilisé dans tous les domaines
:::

> [!IMPORTANT] <h4 style="margin:0px" >Limites ❌</h4>
> - **Apprentissage complexe** : Beaucoup de notion à apprendre
> - **Optimisation nécessaire** : Nécessité lorsque les volumes deviennent importants
> - **Relationnel uniquement** : non adapté aux BDD NOSQL

## Type de requêtes SQL
SQL comprend plusieurs catégories de commandes, chacune servant un objectif 
spécifique pour manipuler ou gérer les données et la structure de la base de données. Les deux types les plus importants sont :

> ### Requêtes de Manipulation de Données (DML - Data Manipulation Language)
Les commandes DML permettent `d'intéragir avec les données déjà présentes dans la base`. Plusieurs commandes sont à disposition :

- `SELECT`: Utilisée pour lire et récupérer des données dans la BDD.
Exemple :
```SQL
SELECT nom, age FROM clients WHERE pays = 'France';
```
- `INSERT INTO`: Permet d'ajouter de noubelles données dans une table.
Exemple :
```SQL
INSERT INTO clients (nom, age, pays) VALUES ('Alice Dupont', 30, 'France');
```
- `UPDATE`: Utilisée pour modifier des données existantes dans une table.
Exemple :
```SQL
UPDATE clients SET age = 31 WHERE nom = 'Alice Dupont';
```
- `DELETE`: Permet de supprimer des lignes spécifiques d'une table.
Exemple :
```SQL
DELETE FROM clients WHERE nom = 'Alice Dupont';
```

> ### Requêtes de Définition des Données (DDL - Data Definition Language)
Les commandes DDL servent à créer et modifier la structure de la base de données elle-même, dont les tables, les vues et d'autres objets

- `CREATE`: Utilisée pour créer une nouvelle table, bdd, index ou autre objet dans la base.
Exemple:
```SQL
CREATE TABLE clients (
    client_id INT PRIMARY KEY,
    nom VARCHAR(100),
    age INT,
    pays VARCHAR(50)
);
```
- `ALTER`: Permet de modifier la structure d'un objet existant, comme ajouter ou supprimer une colonne dans une table, changer le type de données d'une colonne ou renommer un objet.
Exemple pour ajouter une colonne :
```SQL
ALTER TABLE clients ADD email VARCHAR(100);
```
Exemple pour supprimer une colonne :
```SQL
ALTER TABLE clients DROP COLUMN age;
```
- `DROP`: Utilisée pour supprimer un obket de la base de données. La suppression est définitive et toutes les données contenues dans l'objet seront perdues.
```SQL
DROP TABLE clients;
```

> ### Requêtes de Droits d'accès aux données (DCL: Data Control Language)
Les commandes DCL sont utilisées pour gérer les droits d'accès et permissions sur les objets de la base de données
- `GRANT`: Accorde des permissions spécifiques à un utilisateur ou à un groupe d'utilisateurs. On peut accorder l'accès à des actions comme `SELECT`, `INSERT`, `UPDATE`, `DELETE`, etc., sur un objet particulier.
Exemple: 
```SQL
GRANT SELECT, INSERT ON Clients TO utilisateur1;
```
*Ici, l'utilisateur reçoit les permissions de lecture (`SELECT`) et d'insertion (`INSERT`) sur la table CLIENTS*
- `REVOKE`: Révoque les permissions précédemment accordées à un utilisateur ou à un groupe. Cela permet de retirer l'accès à certaines opérations.
Exemple: 
```SQL
REVOKE INSERT ON clients FROM utilisateur1;
```
*L'utilisateur perd la permission d'insertion (`INSERT`) sur la table clients*

> ### Requêtes de transations dans une base de données (TCL: Transaction Control Language)
<br>

::: info C'est quoi une transaction ? 🤔
Une transaction en base de données est un ensemble d'opérations SQL (comme `INSERT`, `UPDATE`, `DELETE`) exécutées ensemble pour accomplir une tâche spécifique. Elle est traitée par unité : soit les opérations réussissent, soit elles échouent toutes.
:::

::: details **<u>COMMIT</u>** {open}
Valide les modifications apportées par une transaction dans la base de données de manière permanente. Une fois COMMIT exécuté, les changements sont enregistrés et ne peuvent plus être annulés par un ROLLBACK.
```sql
BEGIN TRANSACTION;
UPDATE comptes SET solde = solde - 100 WHERE id_compte = 1;
UPDATE comptes SET solde = solde + 100 WHERE id_compte = 2;
COMMIT;
```
:::
::: details **<u>ROLLBACK</u>** {open}
Annule toutes les modifications effectuées par une transaction en cours si elle n'a pas encore été validée avec COMMIT. Cela permet de revenir à l'état initial en cas d'erreur.
```sql
BEGIN TRANSACTION;
UPDATE comptes SET solde = solde - 100 WHERE id_compte = 1;
UPDATE comptes SET solde = solde + 100 WHERE id_compte = 2;
ROLLBACK;
```
:::
::: details **<u>SAVEPOINT</u>** {open}
Crée un point de sauvegarde intermédiaire dans une transaction, permettant d'annuler seulement une partie des modifications effectuées depuis ce point, sans annuler toute la transaction.
```sql
BEGIN TRANSACTION;
UPDATE comptes SET solde = solde - 100 WHERE id_compte = 1;
SAVEPOINT step1;
UPDATE comptes SET solde = solde + 100 WHERE id_compte = 2;
ROLLBACK TO step1;  -- Revenir à l'état au moment du savepoint
COMMIT;
```
:::

## Relations entre Tables (Jointures)
Les jointures permettent de récupérer des données de plusieurs tables liées entre elles.

### Jointure Interne (`INNER JOIN`)
INNER JOIN est un type de jointure qui permet de récupérer uniquement les enregistrements qui ont une correspondance dans les deux tables concernées par la jointure.
Supposons que nous ayons une table commandes :
```sql
CREATE TABLE commandes (
    commande_id INT PRIMARY KEY,
    client_id INT,
    produit VARCHAR(50),
    montant DECIMAL(10, 2),
    FOREIGN KEY (client_id) REFERENCES clients(client_id)
);
```
Pour récupérer les commandes avec les noms des clients :
```sql
SELECT clients.nom, commandes.produit, commandes.montant
FROM clients
INNER JOIN commandes ON clients.client_id = commandes.client_id;
```
### Jointure Gauche (`LEFT JOIN`)
Le LEFT JOIN est un type de jointure en SQL qui permet de récupérer tous les enregistrements de la table de gauche (dans la requête) et les enregistrements correspondants de la table de droite si une correspondance existe. Si aucune correspondance n'est trouvée dans la table de droite, les colonnes de cette table seront remplies par des valeurs NULL.
Supposons que nous ayons une table commandes :
```sql
CREATE TABLE commandes (
    commande_id INT PRIMARY KEY,
    client_id INT,
    produit VARCHAR(50),
    montant DECIMAL(10, 2),
    FOREIGN KEY (client_id) REFERENCES clients(client_id)
);
```
Dans cet exemple, clients est la table de gauche et commandes est la table de droite. Si nous utilisons un LEFT JOIN, nous obtiendrons toutes les lignes de clients, même celles qui n'ont pas de correspondance dans commandes.

Requête :
```sql
SELECT clients.nom, commandes.produit, commandes.montant
FROM clients
LEFT JOIN commandes ON clients.client_id = commandes.client_id;
```