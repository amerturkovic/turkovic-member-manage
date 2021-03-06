
export interface IMember {
    id: string;
    date: any;
    name: string;
    friends: string;
    age: number;
    weight: number;
}
export interface DeleteMemberDialogData {
    member: IMember;
}
export interface ChartDataModel {
    name: string;
    numFriends: number;
  }

