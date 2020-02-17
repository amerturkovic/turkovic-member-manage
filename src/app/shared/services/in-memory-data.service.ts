import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryMemberService implements InMemoryDbService {
    createDb() {
      const members = [
        { id: '111', name: 'Super Mario', friends: 'Emma, Olivia, Ava', age: 23, weight: 166 },
        { id: '112', name: 'John Doe', friends: 'Emma, logan, Mason, Lucas', age: 40, weight: 178 },
        { id: '113', name: 'Jane Doe', friends: 'William', age: 38, weight: 120 },
        { id: '114', name: 'Mr. Smith', friends: 'Daniel, Michael', age: 31, weight: 190 },
        { id: '115', name: 'James King', friends: 'Eva, John', age: 36, weight: 220 },
        { id: '116', name: 'William Some', friends: 'Emma, Carter', age: 18, weight: 155 },
        { id: '117', name: 'The Wade', friends: 'Joseph, David Ava', age: 27, weight: 102 },
        { id: '118', name: 'Benjamin Frank', friends: 'Sofia, Camila, Olivia, Ava', age: 61, weight: 172 },
        { id: '119', name: 'Mrs. Smith', friends: 'Carter, Michael, Ava', age: 29, weight: 130 }
      ];
      return { members };
    }
  }