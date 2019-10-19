import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  constructor(public auth: AuthService) { }

  user: User;

  ngOnInit() {
    this.auth.userProfile$.subscribe(data => {
      this.user = new User(data.given_name, data.family_name, data.picture);
    }
    );
  }

}
