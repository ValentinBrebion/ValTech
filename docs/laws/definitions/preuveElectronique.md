---
next: 
    text: 'Introduction au design'
    link: 'design/introductionDesign'
prev: 
    text: 'Workflow'
    link: 'devOps/workFlow/WorkFlow'
---

# La preuve éléctronique

## I- Définition de la preuve

::: tip *Extrait de l'article 1316 du code civil :*
‹‹ La preuve littérale, ou preuve par écrit, résulte d'une suite de lettres, de caractères, de chiffres ou de touts autres signes ou symboles dotés d'une signification intelligible, ***quels que soient leur support*** et leurs modalité de transmission. ››
:::

Cette définition large nous permet d'adapter le droit à l'utilisation des  nouvelles technologies de l'information.

## Définition de la preuve éléctronique
Ensemble de données collectées lorsqu'un document a été signé électroniquement et dont l'intégrité est garantie.

### A- La force probante  de la preuve éléctronique
L'écrit éléctronique est accepté comme preuve légale ***au même titre que l'écrit papier***, ce qui lui confère sa :

::: info Force probante <a href="https://www.droit.fr/definition/2081-force-probante/" target="_blank"><Badge type="warning" text="plus d'information" /></a>
‹‹ Valeur juridique donnée à un mode de preuve  même si le juge reste libre de forger son intime conviction, avec l'obligation de motiver sa décision. ››
:::

### B- Les conditions de recevabilité de la preuve éléctronique

::: tip *Article 1316-1 du code civil :* <a href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000000399095#:~:text=modalités%20de%20transmission.-,«%20Art.,à%20en%20garantir%20l%27intégrité." target="_blank"><Badge type="warning" text="plus d'information" /></a>
‹‹ L'écrit sous forme éléctronique est admis en preuve au même titre que l'écrit papier sous réserve que puisse être dûment identifiée la personne dont il émane et qu'il soit établi et conservé dans des conditions de nature à garantir l'intégrité ››
:::

Le code civil nous permet clairement de définir la preuve éléctronique cependant, il est important de noter que la preuve éléctronique est dite recevable uniquement sous 2 conditions :
<br/> <br/>
>- L'authentification de la personne : 
*l'authentificaiton de la personne à l'origine de la preuve doit être rendue possible. Cela équivaut à l'identification certaine de la preuve.*

>- L'intégrité de la preuve : 
*L'intégrité de la preuve doit être garantie. Il ne doit pas y avoir d'altération subie depuis sa création.*

## II- La licéité et la fiabilité de la méthode de production

### A- L'intégrité des informations
> *L'intégrité est l'état de quelque chose qui a conservé sans altération ses qualités, son état d'origine. Cette intégrité est garantie grâce à la technique du hachage.*

#### Principe du hachage
> Le hachage permet d'associer le message à une empreinte unique calculable et vérifiable, composée d'une série de chiffres, de lettres, précédé du nom de l'algorythme. L'empreinte représente ici l'identifiant unique du document généré à un moment précis.

### B- L'authentification de l'auteur
> *L'authentification certaine de la personne se réalise par la technique du chiffrement.*

#### Principe du chiffrement
> Le chiffrement permet de garantir que seul l'émetteur et le destinataire légitime d'un message en connaissent le contenu. Sans clé, les messages sont inaccessibles et illisible par un individu ou même une machine.

#### Types de chiffrement

| chiffrement symétrique | chiffrement asymétrique |
| -------------          | :-----------: | 
| Le chiffrage et le déchiffrage d'un contenu se fait avec la même clef, soit la ***clé secrète***     | Le chiffrage et le déchiffrage utilise deux clés de chiffrement soit une clé publique et une clé privée. La clé publique permet de crypter ou de chiffrer les données. La clé privée sert à déchiffrer ou décrypter des données reçues par le destinataire. |

## III- Les moyens de la preuve électronique

### A- La signature électronique
::: tip *Extrait de l'article 1367 du code civil :* <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032042456" target="_blank"><Badge type="warning" text="plus d'information" /></a>
‹‹ La signature identifie celui qui l'appose et manifeste le consentement des parties aux obligations qui découlent de l'acte. Lorsqu'elle est électronique, elle consiste en l'usage d'un procédé fiable d'identification garantissant son lien avec l'acte avec l'acte auquel elle s'attache. ››
:::

2 conditions doivent être vérifiées pour qu'une signature électronique soit recevable :

>- Le signataire doit être identifié
>- L'écrit doit être indissociable de la signature

<br/>

Seulement, 2 problèmes juridiques se posent pour qu'une signature soit réel: 

::: code-group

```L'identification de la personne
La problématique est de pouvoir vérifier l'identité de l'auteur de 
la signature. Pour palier ce problème la, l'auteur doit se munir d'un 
certificat de signature éléctronique. Il est délivré après la vérification
de l'identité de la personne par L'ACC (Autorité de Certification de 
Confiance).
```

```L'intégrité des informations
La garantie de l'intégrité de la preuve électronique est assurée par 
l'utilisation d'un algorythme permettant de vérifier, à l'arrivée du
message signé électroniquement, que celui-ci n'a pas été modifié. On
peut notamment chiffré ces données avec MD5 ou SHA.
```
:::
### B- L'horodatage électronique
>L'horodatage électronique est un mécanisme qui permet de garantir l'intégrité d'une série de données. C'est à dire qu'il permet de démontrer que ces données ont existé à un certain moment et qu'elles n'ont pas été altérées depuis lors.

:::tip Définition selon le réglement européen
‹‹ Les données sous forme électronique qui associent d'autres données sous forme électronique à un instant particulier, établissent la preuve que ces dernières données existaient à cet instant. ››
:::