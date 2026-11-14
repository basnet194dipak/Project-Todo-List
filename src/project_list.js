class Project_list{
    constructor()
    {
        this.project_list = []
    }

    // add project to the list 
    add_project(project)
    {
        this.project_list.push(project)
    }

    // delete project from the list 

    delete_project(idx)
    {
        this.project_list.splice(idx, 1)
    }

}


export {Project_list}