
export interface IMember {
    id: string;
    name: string;
    friends: string;
    age: number;
    weight: number;
}
export interface DeleteMemberDialogData {
    member: IMember;
}

