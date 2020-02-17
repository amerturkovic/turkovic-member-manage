import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IMember } from '../../../shared/interfaces';
import { MembersService } from '../../../shared/services/members.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-member-add',
  templateUrl: './member-add.component.html',
  styleUrls: ['./member-add.component.scss']
})
export class MemberAddComponent implements OnInit, OnDestroy {
  
  memberForm: FormGroup;
  error: string;
  saveSub: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private membersService: MembersService,
    private router: Router
    ) { }

  ngOnInit() {
    /* Initiate the form */
    this.memberForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.maxLength(60)])],
      friends: ['', Validators.compose([Validators.required, Validators.maxLength(255)])],
      age: [null, Validators.compose([Validators.required, Validators.maxLength(3)])],
      weight: [null, Validators.maxLength(3)]
    });
  }
  /**
   * Set all getters for all available form controls
   * @returns single form control 
   */
  get name() {
    return this.memberForm.get('name');
  }
  get friends() {
    return this.memberForm.get('friends');
  }
  get age() {
    return this.memberForm.get('age');
  }
  get weight() {
    return this.memberForm.get('weight');
  }
  /**
   * Save a member to members.service
   * Navigate to member detail component on succes
   * @returns IMember json | error
   */
  saveMember(){
    // Just in case clear the error
    this.error = '';

    // Added date prop to be able to sort the array by date(descending)
    const member: IMember  = {
      id: this.getUUID(),
      date: new Date(),
      name : this.name.value,
      friends : this.friends.value,
      age : this.age.value,
      weight : this.weight.value
    };

    // Initiate save member subscription
    this.saveSub = this.membersService.save(member)
      .subscribe(newMember => {
        console.log('Member saved successfully:', newMember);
        this.goToMembersPage();
    }, error => {
      console.log('Member Save error:', error);
      this.error = 'Something went wrong, please try again later.';
    });
  }
  /**
   * Reset the form data
   */
  reset(){
    this.name.setValue('');
    this.friends.setValue('');
    this.age.setValue(null);
    this.weight.setValue(null);
    this.error = '';
  }

  /**
   * Create uniquue id for new member
   * @returns string
   */
  getUUID() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }

  /** 
   * Navigate to members list page on successfull member addition
   */
  goToMembersPage() {
    this.router.navigate(['/members']);
  }

  ngOnDestroy() {
    this.saveSub.unsubscribe();
  }

}
