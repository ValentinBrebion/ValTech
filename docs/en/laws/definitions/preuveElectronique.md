---
next: false
prev: false
---

# Electronic Evidence

## I- Definition of Evidence

::: tip *Extract from Article 1316 of the Civil Code:*
"Written evidence, or proof in writing, results from a sequence of letters, characters, numbers, or any other signs or symbols with an intelligible meaning, ***regardless of their medium*** and their method of transmission."
:::

This broad definition allows us to adapt the law to the use of new information technologies.

## Definition of Electronic Evidence
A set of data collected when a document has been electronically signed and whose integrity is guaranteed.

### A- The Probative Force of Electronic Evidence
Electronic writing is accepted as legal evidence ***on the same basis as paper writing***, which gives it its:

::: info Probative Force <a href="https://www.droit.fr/definition/2081-force-probante/" target="_blank"><Badge type="warning" text="more information" /></a>
"Legal value given to a mode of proof even if the judge remains free to form their intimate conviction, with the obligation to justify their decision."
:::

### B- Conditions for Admissibility of Electronic Evidence

::: tip *Article 1316-1 of the Civil Code:* <a href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000000399095#:~:text=modalités%20de%20transmission.-,«%20Art.,à%20en%20garantir%20l%27intégrité." target="_blank"><Badge type="warning" text="more information" /></a>
"Electronic writing is admitted as evidence on the same basis as paper writing, provided that the person from whom it emanates can be duly identified and that it is established and preserved in conditions that ensure its integrity."
:::

The Civil Code clearly allows us to define electronic evidence; however, it's important to note that electronic evidence is considered admissible only under 2 conditions:
<br/> <br/>
>- Authentication of the person:
*authentication of the person who created the evidence must be possible. This is equivalent to certain identification of the evidence.*

>- Integrity of the evidence:
*The integrity of the evidence must be guaranteed. There must be no alteration since its creation.*

## II- Legality and Reliability of the Production Method

### A- Information Integrity
> *Integrity is the state of something that has preserved its qualities and original state without alteration. This integrity is guaranteed through the hashing technique.*

#### Hashing Principle
> Hashing allows associating the message with a unique, calculable, and verifiable fingerprint, composed of a series of numbers and letters, preceded by the algorithm name. The fingerprint here represents the unique identifier of the document generated at a specific moment.

### B- Author Authentication
> *Certain authentication of the person is achieved through encryption technique.*

#### Encryption Principle
> Encryption ensures that only the legitimate sender and recipient of a message know its content. Without a key, messages are inaccessible and unreadable by an individual or even a machine.

#### Types of Encryption

| Symmetric Encryption | Asymmetric Encryption |
| -------------       | :-----------: |
| Content encryption and decryption are done with the same key, the ***secret key*** | Encryption and decryption use two encryption keys: a public key and a private key. The public key is used to encrypt or encode data. The private key is used to decrypt or decode data received by the recipient. |

## III- Means of Electronic Evidence

### A- Electronic Signature
::: tip *Extract from Article 1367 of the Civil Code:* <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000032042456" target="_blank"><Badge type="warning" text="more information" /></a>
"The signature identifies the person who affixes it and manifests the parties' consent to the obligations arising from the act. When electronic, it consists of using a reliable identification process guaranteeing its link with the act to which it is attached."
:::

2 conditions must be verified for an electronic signature to be admissible:

>- The signatory must be identified
>- The writing must be inseparable from the signature

<br/>

However, 2 legal problems arise for a signature to be real:

::: code-group

```Person Identification
The challenge is to be able to verify the identity of the signature's 
author. To address this issue, the author must obtain an electronic 
signature certificate. It is issued after verification of the person's 
identity by the TCA (Trusted Certification Authority).
```

```Information Integrity
The guarantee of electronic evidence integrity is ensured by using an 
algorithm to verify, upon receipt of the electronically signed message, 
that it has not been modified. This data can be encrypted using MD5 
or SHA.
```
:::

### B- Electronic Timestamping
>Electronic timestamping is a mechanism that guarantees the integrity of a series of data. That is, it demonstrates that this data existed at a certain time and has not been altered since then.

:::tip Definition according to European regulation
"Electronic data that associates other electronic data with a particular moment in time, establishing proof that the latter data existed at that time."
::: 