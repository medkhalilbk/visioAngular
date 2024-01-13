import { GetMeetsService } from './../services/get-meets.service'; 
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-make-meet',
  templateUrl: './make-meet.component.html',
  styleUrls: ['./make-meet.component.css']
})
export class MakeMeetComponent {

 @ViewChild('participantsInput') participantsInput: any;
 emailPattern: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  participant = ""
  formSubmitted = false
  participants: string[] = [];
  errorMsg = false;
  removeParticipant(p: string) {
  this.participants = this.participants.filter(el => el !== p)
}
addParticipant() { 
  if (!this.emailPattern.test(this.meetingForm.value.participant)) {
    this.participantsInput.nativeElement.value = '';
    return window.alert('Email non valide!')
  }
  this.participantsInput.nativeElement.value = '';
  this.participants.push(this.meetingForm.value.participant)
}
 meetingForm!: FormGroup; 
  constructor(private fb: FormBuilder, private makeService:GetMeetsService, private router:Router) { }

  ngOnInit() {
    this.meetingForm = this.fb.group({
      projectName: ['', Validators.required],
      projectDate: ['', Validators.required],
      projectTime: ['', Validators.required],
      participant: ['', Validators.required],
      projectDescription: ['']
    });
  }

  ajouterReunion() {  
    if (this.meetingForm.value.projectName == "" || this.meetingForm.value.projectDescription == "" || this.meetingForm.value.projectDate == "" || this.meetingForm.value.projectTime == "" || this.participants.length == 0) {
      this.errorMsg = true 
      return 
    }
    this.errorMsg = false 
    let objToPost = {
    title:this.meetingForm.value.projectName,
    description:this.meetingForm.value.projectDescription,
    date:this.meetingForm.value.projectDate,
    hour:this.meetingForm.value.projectTime,
    usersAllowed:this.participants
    }
      this.makeService.createMeet(objToPost).subscribe(
      (response) => {
        console.log('Meeting created successfully:', response);
          this.formSubmitted = true
          this.router.navigate(['/dashboard'])
      },
      (error) => {
        console.error('Error creating meeting:', error);
        this.formSubmitted = false 
      }
    );
  }
}