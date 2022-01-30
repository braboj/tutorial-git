## Workflow
![Project workflow](Assets/images/project-workflow.png)

## Legend

```
<> : Replace
[] : Optional element
{} : Group
|  : OR
.. : Range
```


## Writing rules

1. Short over long
2. Simple over complex
3. Explicit over implicit 
4. Image over text
5. Avoid using personal pronouns (I, you, we)

## Formatting rules

1. Capitalize the subject line
2. Limit the subject size to 50 characters
3. Do not end the subject line with a period
4. Use imperative mood in the subject line
5. Use body to answer why and what

## Issues

```
(<project-tag>) - <subject>

[<body>]

[<footer>]
```

***If resolved, this issue will \<your issue subject\> in \<your project\>***

For example:

- If resolved, this issue will **add a new security component in budget app**
- If resolved, this issue will **improve the readability of the source code in budget app**
- If resolved, this issue will **remove deprecated methods in budget app**
- If resolved, this issue will **improve documentation in budget app**
- If resolved, this issue will **fix the bug #123 in budget app**


#### Examples

> ##### Simple issue
> ```
> (BUDGET-APP) - Add new security component
> ```
> ##### Extended issue
> ```
> (BUDGET-APP) - Improve security component
> 
> - Certificate handling implemented
> - Two-factor authentication implemented
> ```
> ##### Full issue
> ```
> (BUDGET-APP) - Improve security component
> 
> - Certificate handling implemented
> - Two-factor authentication implemented
> 
> Related to: #1, #2, #3
> See also: #4, #5, #6
> ```

## Commits

```
[(<scope>) -] <subject>

[<body>]

[<footer>]
```

***If applied, this commit will \<your subject line\> in \<your scope\>***

For example:

- If applied, this commit will **refactor subsystem X for readability**
- If applied, this commit will **update getting started documentation in doc**
- If applied, this commit will **remove deprecated methods in tcp-stack**
- If applied, this commit will **release version 1.0.0**
- If applied, this commit will **merge pull request #123 from user/branch**


#### Examples

> ##### Commit message
> ```
> Add contributing guidelines
> ```
> ##### Commit message with scope
> ```
> (Repo) - Add contributing guidelines
> ```
> ##### Commit message with scope and body
> ```
> (Repo) - Update contributing guidelines
> 
> - Commit syntax extended
> - Formal symbols legend added
> ```
> ##### Commit message with scope, body and footer
> ```
> (Repo) - Update contributing guidelines
> 
> - Commit syntax extended
> - Formal symbols legend added
>
> Resolves: #1, #2, #3
> See also: #4
> ```
