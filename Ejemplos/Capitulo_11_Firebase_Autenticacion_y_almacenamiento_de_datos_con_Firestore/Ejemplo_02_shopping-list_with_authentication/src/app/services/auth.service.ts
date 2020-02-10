import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth
  ) { }

  login(
    email: string,
    password: string
  ): Promise<firebase.auth.UserCredential> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  getCurrentUser(): Observable<User> {
    return this.afAuth.authState;
  }

  logout(): Promise<void> {
    return this.afAuth.auth.signOut();
  }

  createUser(
    email: string,
    password: string
  ): Promise<firebase.auth.UserCredential> {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  resetPassword(email: string): Promise<void> {
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }
}
