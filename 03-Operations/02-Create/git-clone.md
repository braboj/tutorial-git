## git clone
Copies an existing repository on the local machine. The cloning process 
supports several protocols such as Git, HTTP and HTTPS.

#### Copy repository as a bare repository

    git clone --bare <https://github.com/user/project.git>
    cd project.git
    dir

#### Copy repository and create project files
    git clone <https://github.com/user/project.git>
    cd project
    dir