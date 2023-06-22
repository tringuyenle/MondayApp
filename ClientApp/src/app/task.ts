export interface Task {
    id: string;
    name: string;
    parent_task: string;
    child_task: string[];
    create_by: string;
    create_date: string;
    status: string;
    selected: boolean;
}

