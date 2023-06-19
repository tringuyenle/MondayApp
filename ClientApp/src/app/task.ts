export interface Task {
    id: string;
    name: string;
    person: string;
    child_task: string[];
    create_by: string;
    create_date: string;
    status: string;

}
