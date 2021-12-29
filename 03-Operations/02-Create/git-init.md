## git init
Creates a new repository in a given project folder. 

#### Create a bare repository
    git init --bare <project>.git
    cd project.git

#### Create a non-bare repository
    git init <project>
    cd project
    cd .git

#### Create a shared repository
    git init <project> --shared=all