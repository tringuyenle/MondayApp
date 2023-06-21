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


// const status: Status = {
//     id: 1,
//     name: "Hoàn thành",
//     color: "#00ff00"
// };
