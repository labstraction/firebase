import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Firestore } from '@angular/fire/firestore';
import { initializeApp } from 'firebase/app';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  public students?: any[];

  constructor(private firestore: AngularFirestore, public auth: AngularFireAuth) {
    firestore.collection<any>('students').valueChanges().subscribe({
      next:(studs) => this.students = studs,
      error:(err) => console.log(err)
      
    });
  }


  aggiungiStudente(){
    const studentsCollection = this.firestore.collection<any>('students');
    studentsCollection.add({ name: 'clarabella', country: 'spain' });
  }

  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.auth.signOut();
  }
  
}
