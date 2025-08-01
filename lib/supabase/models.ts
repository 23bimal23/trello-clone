export interface Board {
    id: string;
    title: string;
    description: string | null;
    color: string;
    user_id: string;
    created_at: string;
    updated_at: string;
}
export interface Column {
    id: string;
    title: string;
    sort_order: number;
    board_id: string;
    created_at: string;

}
export interface Task {
    id: string;
    column_id: string;
    title: string;
    description: string | null;
    due_date: string | null;
    assignee: string | null;
    priority: 'low' | 'medium' | 'high';
    sort_order: number;
    created_at: string;
    updated_at: string;
}