---
next: 
    text: 'Introduction to HTTP errors'
    link: 'cybersecurity/httperror'
prev: false
---

# OWASP Rules 2021 🛡️

## What is OWASP ❓
*OWASP (Open Web Application Security Project) is a global community dedicated to improving the security of web applications and software. Founded in 2001, OWASP provides resources, tools, and guidance to developers, security professionals, and organizations to help them understand and address application security challenges.*

<br/>

# The OWASP Top 10 2021 ❗

## 1️⃣- A01:2021 - Broken Access Control <a href="https://owasp.org/Top10/A01_2021-Broken_Access_Control/" target="_blank"><Badge type="tip" text="Documentation" /></a>

::: warning Header
Previously ranked 5th, access control involves verifying the rights a user may have in an application. If omitted, the consequences will not only impact the company leading to loss of user trust but will also lead to unauthorized **modification** or **destruction** of all data or execution of business functionality beyond the user's limits.
:::

## 1️⃣ - <u>Common Access Control Vulnerability Examples</u>

::: danger <u>Examples</u>
<li>
<b>Allowing viewing or editing someone else's account by providing their unique identifier (insecure direct object references).</b>
</li>
<br/>
<li>
<b>API access with missing access controls for POST, PUT, and DELETE.</b>
</li>
<br/>
<li>
<b>Force browsing to authenticated pages as an unauthenticated user or to privileged pages as a standard user.</b>
</li>
<br />
<li>
<b>Privilege escalation. Acting as a user without being logged in or acting as an admin when logged in as a user.</b>
</li>
<br/>
:::

## 1️⃣ <u>How to Secure Our Application Against Broken Access Control</u> ❓
::: info
*⚠️ Access control is only effective when implemented in ``server-side code or serverless APIs``, where the attacker ``cannot modify`` how access control is verified or the metadata associated with it.*
<br/>
:::
::: danger <u>Examples</u>
<li>
<b>Except for public resources, deny by default.</b>
</li>
<br/>
<li>
<b>Access control model must enforce record ownership rather than allowing the user to create, read, update, or delete any record.</b>
</li>
<br/>
<li>
<b>Log access control failures and alert administrators when appropriate (e.g., repeated failures).</b>
</li>
<br />
<li>
<b>Rate limit API and controller access to minimize the harm from automated attack tooling.</b>
</li>
<br/>
:::
::: details Additional Information
*If access control was implemented on the client side (in code running on the user's browser or device), an attacker ``could potentially modify the code or metadata associated with access control.`` This would allow them to bypass restrictions and access resources or functionality that are normally forbidden to them.*
:::
::: tip Summary
*⚠️ In summary, access control is more secure ``when implemented server-side or in serverless environments``, as this ``limits attackers' ability to manipulate or bypass access control checks.``*
<br/>
:::

## 2️⃣- A02:2021 - Cryptographic Failures <a href="https://owasp.org/Top10/A02_2021-Cryptographic_Failures/" target="_blank"><Badge type="tip" text="Documentation" /></a>

::: warning Header
Previously ranked 3rd and known as ``Sensitive Data Exposure``, it concerns failures related to cryptography implementation or its absence, which can lead to sensitive data exposure.
:::

*When storing data, you need to determine which data should have encrypted protection. Here are some example questions to ask to secure sensitive data:*

::: info
<li>
Is data transmitted in clear text? This includes protocols such as HTTP, SMTP, and FTP. External internet traffic is particularly dangerous. Check all internal traffic, for example between load balancers, web servers, or backend systems.
</li><br/>
<li>
Are the received server certificate and trust chain properly validated?
</li><br/>
<li>
Are deprecated hash functions such as MD5 or SHA1 used, or are non-cryptographic hash functions used where cryptographic hash functions are needed?
</li>
or
<li>
Are deprecated cryptographic padding methods like <b>PKCS 1 v1.5</b> being used?
</li>
:::

## 2️⃣ <u>How to Secure Our Application Against Cryptographic Failures</u>❓<a href="https://owasp.org/Top10/A02_2021-Cryptographic_Failures/#how-to-prevent" target="_blank"><Badge type="tip" text="Documentation" /></a>

::: danger
<li><b>Don't store sensitive data unnecessarily. Discard it or use PCI DSS compliant tokenization or even truncation.</b></li><br>
<li><b>Make sure to encrypt all sensitive data at rest.</b></li><br>
<li><b>To ensure the security of transmitted data, it's important to use secure protocols such as TLS with forward secrecy (FS) cipher suites. It's recommended to encrypt data primarily on the server side. Additionally, it's essential to use secure encryption parameters and enforce encryption by applying directives such as HTTP Strict Transport Security (HSTS)</b></li><br>
<li><b>Store passwords using strong adaptive and salted hashing functions with a work factor (delay factor), such as Argon2, scrypt, bcrypt, or PBKDF2.</b></li><br>
And many others...
:::

## 3️⃣- A03:2021 - Injection <a href="https://owasp.org/Top10/A03_2021-Injection/" target="_blank"><Badge type="tip" text="Documentation" /></a>

::: warning Header
Previously ranked 1st, injection is defined as the insertion of potentially dangerous external data into a data flow or SQL or NoSQL queries, which are the most common.
:::

#### When is an application vulnerable?

::: info
<li><b>User-supplied data is not validated, filtered, or sanitized by the application</b></li><br>
<li><b>Dynamic queries or non-parameterized calls without context-aware escaping are used in the interpreter.</b></li><br>
<li><b>Hostile data is used within Object-Relational Mapping (ORM) search parameters to extract additional sensitive records.</b></li><br>
<li><b>Hostile data is directly used or concatenated, such as in dynamic queries, commands, or stored procedures for SQL queries or OS commands.</b></li><br>
:::

### Basic Example of SQL Injection

```sql
SELECT * FROM client WHERE id='". $_GET["id"] ."';
```
In this example, there are 2 flaws. First, the parameter in the ``WHERE`` clause is in **GET** when all presumably sensitive information should be passed in **POST**!

::: danger
Secondly, and this is the number 1 enemy in queries, is **CONCATENATION** ⚠️⚠️. You must avoid concatenating data in SQL queries at all costs because an external attacker could execute this query:
:::

```txt
http://example.com/list?id='or '1'='1
```
And that's it! The attacker can obtain administrator privileges 😢😭. But don't panic, there are some solutions to limit injections.

## 3️⃣ <u>Security Solutions</u> <a href="https://owasp.org/Top10/A03_2021-Injection/#how-to-prevent" target="_blank"><Badge type="tip" text="Documentation" /></a>

::: danger
<li><b>The preferred option is to use a safe API that avoids using the interpreter entirely or provides a parameterized interface. Alternatively, you should consider migrating to use Object Relational Mapping Tools (ORMs).</b></li><br>
<li><b>For incoming data, use positive server-side input validation with normalization. However, this is not a complete defense as many applications require special characters in their input, such as text areas or APIs for mobile applications.</b></li><br>
<li><b>Use LIMIT and other SQL controls within queries to prevent mass disclosure of records in case of SQL injection.</b></li><br>
:::

## 4️⃣- A04:2021 - Insecure Design <a href="https://owasp.org/Top10/A04_2021-Insecure_Design/" target="_blank"><Badge type="tip" text="Documentation" /></a>

::: warning Header
Insecure design encompasses various design control deficiencies, distinct from insecure implementation. A secure design ``can have implementation flaws``, while an insecure design ``lacks specific security controls``. The lack of business risk profiling contributes to insecure design.
:::

## ⚠️ <u>3 categories not to be neglected</u>

### 1️⃣ - *Requirements and Resource Management* ☝️

::: details

::: tip
<b>Work with functional teams to gather and discuss business requirements for the application, including ``security aspects such as confidentiality, integrity, availability, and authenticity of data and business logic``. 
Consider your application's ``exposure level`` and decide if instance separation beyond access control is needed. 
Gather technical requirements, ``including functional and non-functional security requirements``. 
Establish and negotiate the budget for the entire process, from design to construction, testing, and operation, including security activities.</b>
:::

### 2️⃣ - *Secure Design* ✌️

::: details

::: tip
<b>Secure design involves a culture and methodology that ``constantly evaluates threats and ensures code is designed and tested robustly to prevent known attack methods``. It's essential to ``integrate threat modeling during refinement sessions`` (or similar activities) ``to detect changes in data flows and access controls``. In user stories, identify success and failure cases, ensure they are well understood and accepted by responsible and impacted parties. ``Analyze assumptions and conditions of success and failure cases``, verify their accuracy and relevance. Determine ways to validate these assumptions and put in place necessary conditions for appropriate behavior. ``Carefully document the results in the user story``. Learn from your mistakes, encourage and promote improvements. **Secure design is not just an add-on or tool you can integrate later into the software.**</b>
:::

### 3️⃣ - *Secure Development Lifecycle* 🤟

::: details

::: tip
<b>To achieve secure software, it's essential to ``follow a secure development lifecycle``, use a secure design method, have a robust infrastructure, a ``secure component library``, appropriate tools, and threat modeling. Involve security experts at all project stages, including software maintenance. Use the **OWASP Software Assurance Maturity Model (SAMM)** to effectively organize your secure development efforts.</b>
:::

## 4️⃣ <u>Security Solutions</u> <a href="https://owasp.org/Top10/A04_2021-Insecure_Design/#how-to-prevent" target="_blank"><Badge type="tip" text="Documentation" /></a>

::: danger
<li><b>Integrate security controls into user stories.</b></li><br>
<li><b>Write unit and integration tests to validate that all critical flows are resistant to the threat model. Compile use cases and misuse cases for each tier of your application.</b></li><br>
<li><b>Establish and use a library of secure design patterns or ready-to-use components.</b></li><br>
:::

## 5️⃣ A05:2021 - Security Misconfiguration <a href="https://owasp.org/Top10/A05_2021-Security_Misconfiguration/" target="_blank"><Badge type="tip" text="Documentation" /></a>

::: warning Header
<b>Previously ranked sixth, security misconfiguration on a server leads to security vulnerabilities easily exploitable by an attacker.</b>
:::

When is an application vulnerable? ⚠️

::: info
<li><b>Unnecessary features are enabled or installed (e.g., unnecessary ports, services, pages, accounts, or privileges).</b></li><br/>
<li><b>For updated or upgraded systems, the latest security features are disabled or not configured securely.</b></li><br/>
<li><b>The software version is outdated or vulnerable.</b></li><br/>
:::

## 5️⃣ <u>Security Solutions</u> <a href="https://owasp.org/Top10/A05_2021-Security_Misconfiguration/#how-to-prevent" target="_blank"><Badge type="tip" text="Documentation" /></a>

::: danger
<li><b>A minimal platform without unnecessary features, components, documentation, and samples. Remove or do not install unused features and frameworks.</b></li><br>
<li><b>A segmented application architecture that provides effective and secure separation between components or hosted environments, with segmentation, containerization, or Cloud security groups (ACLs).</b></li><br>
<li><b>An automated process to verify the effectiveness of configurations and settings in all environments.</b></li><br>
:::

## 6️⃣ A06:2021 - Vulnerable and Outdated Components <a href="https://owasp.org/Top10/A06_2021-Vulnerable_and_Outdated_Components/" target="_blank"><Badge type="tip" text="Documentation" /></a>

::: warning Header
<b>Previously ranked ninth, using vulnerable or outdated components would be like deliberately leaving your system's door open to attackers.</b>
:::

When is an application vulnerable? ⚠️

::: info
<li><b>If you do not know all the components you use (both client-side and server-side). This includes components you use directly or through nested dependencies.</b></li><br/>
<li><b>If the software is vulnerable, unsupported, or out of date. This includes the operating system, web/application server, database management system (DBMS), applications, APIs and other components, runtime environments, and libraries.</b></li><br/>
<li><b>If software developers do not test the compatibility of updated, upgraded, or patched libraries.</b></li><br/>
:::

## 6️⃣ <u>Security Solutions</u> <a href="https://owasp.org/Top10/A06_2021-Vulnerable_and_Outdated_Components/#how-to-prevent" target="_blank"><Badge type="tip" text="Documentation" /></a>

::: danger
<li><b>Remove unnecessary dependencies and unnecessary features, components, files, and documentation.</b></li><br>
<li><b>Only obtain components from official sources over secure links. Prefer signed packages to minimize the risk of including modified malicious components.</b></li><br>
<li><b>Continuously inventory versions of both client-side and server-side components (e.g., frameworks, libraries) and their dependencies using tools such as versions, OWASP Dependency Check, retire.js, etc. Continuously monitor sources such as Common Vulnerability and Exposures (CVE) and National Vulnerability Database (NVD) to track component vulnerabilities. Use software composition analysis tools to automate the process. Subscribe to email alerts for security vulnerabilities related to components you use.</b></li><br>
:::

## 7️⃣ A07:2021 - Identification and Authentication Failures <a href="https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/" target="_blank"><Badge type="tip" text="Documentation" /></a>

::: warning Header
<b>Previously ranked tenth, 
It is essential to confirm the user's identity, authentication, and session to protect against authentication-related attacks.</b>
:::

There may be authentication weaknesses if the application:

::: info
<li><b>Permits automated attacks such as credential stuffing, where the attacker has a list of valid usernames and passwords.</b></li><br/>
<li><b>Permits brute force or other automated attacks.</b></li><br/>
<li><b>Permits default, weak, or well-known passwords, such as "Password1" or "admin/admin".</b></li><br/>
<li><b>Uses weak or ineffective credential recovery and forgot-password processes, such as "knowledge-based answers," which cannot be made safe.</b></li><br/>
<li><b>Uses plain text, encrypted, or weakly hashed passwords (see A02:2021-Cryptographic Failures).</b></li><br/>
<li><b>Has missing or ineffective multi-factor authentication.</b></li><br/>
<li><b>Exposes Session IDs in the URL.</b></li><br/>
<li><b>Doesn't properly rotate Session IDs after successful login.</b></li><br/>
<li><b>Doesn't properly invalidate Session IDs. User sessions or authentication tokens (particularly single sign-on (SSO) tokens) aren't properly invalidated during logout or a period of inactivity.</b></li>
:::

## 7️⃣ <u>Security Solutions</u> <a href="https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/#how-to-prevent" target="_blank"><Badge type="tip" text="Documentation" /></a>

::: danger
<li><b>Where possible, implement multi-factor authentication to prevent automated credential stuffing, brute force, and stolen credential reuse attacks.</b></li><br>
<li><b>Do not ship or deploy with any default credentials, particularly for admin users.</b></li><br>
<li><b>Implement weak password checks, such as testing new or changed passwords against the top 10,000 worst passwords list.</b></li><br>
<li><b>Align password length, complexity, and rotation policies with modern, evidence-based password policies, such as NIST 800-63b's guidelines in section 5.1.1 for Memorized Secrets or other modern, evidence-based password policies.</b></li><br>
<li><b>Ensure registration, credential recovery, and API pathways are hardened against account enumeration attacks by using the same messages for all outcomes.</b></li><br>
<li><b>Limit or increasingly delay failed login attempts, but be careful not to create a denial of service scenario. Log all failures and alert administrators when credential stuffing, brute force, or other attacks are detected.</b></li><br>
<li><b>Use a server-side, secure, built-in session manager that generates a new random session ID with high entropy after login. Session IDs should not be in URLs, be securely stored, and invalidated after logout, idle, and absolute timeouts.</b></li>
:::

## 8️⃣ A08:2021 - Software and Data Integrity Failures <a href="https://owasp.org/Top10/A08_2021-Software_and_Data_Integrity_Failures/" target="_blank"><Badge type="tip" text="Documentation" /></a>

::: warning Header
<b>Software and data integrity failures relate to code and infrastructure that does not protect against integrity violations. An example of this is when an application relies on plugins, libraries, or modules from untrusted sources, repositories, and content delivery networks (CDNs).</b>
:::

When is an application vulnerable? ⚠️

::: info
<li><b>The application uses plugins, libraries, or modules from untrusted sources, repositories, or CDNs.</b></li><br/>
<li><b>The application uses auto-update functionality without sufficient integrity verification.</b></li><br/>
<li><b>The application uses or combines data from multiple sources, APIs, or databases without verifying integrity.</b></li><br/>
<li><b>The software relies on plugins, libraries, or modules from untrusted sources or repositories.</b></li><br/>
<li><b>The application has a continuous integration and continuous deployment (CI/CD) pipeline without verifying code integrity.</b></li>
:::

## 8️⃣ <u>Security Solutions</u> <a href="https://owasp.org/Top10/A08_2021-Software_and_Data_Integrity_Failures/#how-to-prevent" target="_blank"><Badge type="tip" text="Documentation" /></a>

::: danger
<li><b>Use digital signatures or similar mechanisms to verify the software or data is from the expected source and has not been altered.</b></li><br>
<li><b>Ensure libraries and dependencies are using trusted repositories. If you have a higher risk profile, consider hosting an internal known-good repository of vetted components.</b></li><br>
<li><b>Ensure that there is a review process for code and configuration changes to minimize the chance that malicious code or configuration could be introduced into your software pipeline.</b></li><br>
<li><b>Ensure that your CI/CD pipeline has proper segregation, configuration, and access control to ensure the integrity of the code flowing through the build and deploy processes.</b></li><br>
<li><b>Ensure that unsigned or unencrypted serialized data is not sent to untrusted clients without some form of integrity check or digital signature to detect tampering.</b></li>
:::

## 9️⃣ A09:2021 - Security Logging and Monitoring Failures <a href="https://owasp.org/Top10/A09_2021-Security_Logging_and_Monitoring_Failures/" target="_blank"><Badge type="tip" text="Documentation" /></a>

::: warning Header
<b>This category helps detect, escalate, and respond to active breaches. Without logging and monitoring, breaches cannot be detected. Insufficient logging, detection, monitoring, and active response occurs any time:</b>
:::

::: info
<li><b>Auditable events, such as logins, failed logins, and high-value transactions, are not logged.</b></li><br/>
<li><b>Warnings and errors generate no, inadequate, or unclear log messages.</b></li><br/>
<li><b>Logs of applications and APIs are not monitored for suspicious activity.</b></li><br/>
<li><b>Logs are only stored locally.</b></li><br/>
<li><b>Appropriate alerting thresholds and response escalation processes are not in place or effective.</b></li><br/>
<li><b>Penetration testing and scans by dynamic application security testing (DAST) tools do not trigger alerts.</b></li><br/>
<li><b>The application cannot detect, escalate, or alert for active attacks in real-time or near real-time.</b></li>
:::

## 9️⃣ <u>Security Solutions</u> <a href="https://owasp.org/Top10/A09_2021-Security_Logging_and_Monitoring_Failures/#how-to-prevent" target="_blank"><Badge type="tip" text="Documentation" /></a>

::: danger
<li><b>Ensure all login, access control, and server-side input validation failures are logged with sufficient user context to identify suspicious or malicious accounts.</b></li><br>
<li><b>Ensure that logs are generated in a format that log management solutions can easily consume.</b></li><br>
<li><b>Ensure log data is encoded correctly to prevent injections or attacks on the logging or monitoring systems.</b></li><br>
<li><b>Ensure high-value transactions have an audit trail with integrity controls to prevent tampering or deletion, such as append-only database tables or similar.</b></li><br>
<li><b>DevSecOps teams should establish effective monitoring and alerting such that suspicious activities are detected and responded to quickly.</b></li><br>
<li><b>Establish or adopt an incident response and recovery plan.</b></li>
:::

## 🔟 A10:2021 - Server-Side Request Forgery (SSRF) <a href="https://owasp.org/Top10/A10_2021-Server-Side_Request_Forgery_%28SSRF%29/" target="_blank"><Badge type="tip" text="Documentation" /></a>

::: warning Header
<b>SSRF flaws occur whenever a web application is fetching a remote resource without validating the user-supplied URL. It allows an attacker to coerce the application to send a crafted request to an unexpected destination, even when protected by a firewall, VPN, or another type of network access control list (ACL).</b>
:::

When is an application vulnerable? ⚠️

::: info
<li><b>The application fetches a remote resource without validating the user-supplied URL.</b></li><br/>
<li><b>The application makes HTTP requests to dynamic endpoints based on user input.</b></li><br/>
<li><b>The application accepts URLs or files from third-party cloud storage services.</b></li><br/>
<li><b>The application includes server-side code that can make requests to internal resources.</b></li>
:::

## 🔟 <u>Security Solutions</u> <a href="https://owasp.org/Top10/A10_2021-Server-Side_Request_Forgery_%28SSRF%29/#how-to-prevent" target="_blank"><Badge type="tip" text="Documentation" /></a>

::: danger
<li><b>Sanitize and validate all client-supplied input data.</b></li><br>
<li><b>Enforce the URL schema, port, and destination with a positive allow list.</b></li><br>
<li><b>Do not send raw responses to clients.</b></li><br>
<li><b>Disable HTTP redirections.</b></li><br>
<li><b>Be aware of the URL consistency to avoid attacks such as DNS rebinding and "time of check, time of use" (TOCTOU) race conditions.</b></li><br>
<li><b>Never send raw responses to clients.</b></li><br>
<li><b>Configure the firewall or security groups to block all non-essential traffic.</b></li>
:::

# Additional Resources 📚

For more detailed information about each of these security risks and how to prevent them, please visit the official OWASP website:
<a href="https://owasp.org/Top10/" target="_blank">OWASP Top 10</a>

Remember that security is an ongoing process, not a one-time implementation. Stay updated with the latest security threats and best practices to keep your applications secure.