export interface Task {
    id: string;
    name: string;
    person: string;
    child_task: Task[];
    create_by: string;
    create_date: string;
    status: string;
    selected: boolean;
}

