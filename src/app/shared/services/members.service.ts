import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { IMember } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
// Web API url
private memberUrl = 'api/members';

constructor( private http: HttpClient) { }

getMembers() {
  return this.http
    .get<IMember[]>(this.memberUrl)
    .pipe(map(data => data), catchError(this.handleError));
}

getMember(id: string): Observable<IMember> {
  return this.getMembers().pipe(
    map(members => members.find(member => member.id === id))
  );
}
save(member: IMember) {
  return this.post(member);
}

update(member: IMember) {
  return this.put(member);
}

delete(member: IMember) {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  const url = `${this.memberUrl}/${member.id}`;
  return this.http.delete<IMember>(url).pipe(catchError(this.handleError));
}

// Add new Member
private post(member: IMember) {
  const headers = new Headers({
    'Content-Type': 'application/json'
  });
  return this.http
    .post<IMember>(this.memberUrl, member)
    .pipe(catchError(this.handleError));
}

// Update existing Hero
private put(member: IMember) {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  const url = `${this.memberUrl}/${member.id}`;
  return this.http.put<IMember>(url, member).pipe(catchError(this.handleError));
}

private handleError(res: HttpErrorResponse | any) {
  console.error(res.error || res.body.error);
  return observableThrowError(res.error || 'Server error');
}

}
