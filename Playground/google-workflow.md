Trunk-based development

- Monotlithic codebase model
- Central repository
- Trunk based development
- Single consistent view of the codebase
- Avoids complexity of merging branches
- Release branches
- Bug fixes developed on mainline
- Both new and old code paths commonly exist simultaneously controlled through the use of
  conditional flags.

Google workflow

- Automated testing and recovery
- Review code before commit
- The Google codebase is laid out in a tree structure. 
- Each and every directory has a set of owners who control whether a change to files in their 
  directory will be accepted. Owners are
- Code reviewers comment on aspects of code quality
- Code quality: design, functionality, complexity, testing, naming, comment quality, and code style
- Static analysis system  
- Code-cleanup on regular basis