import { Component, OnInit } from '@angular/core';
import { InstructorService } from './instructor.service';

interface Company {
  name: string,
  catchPhrase: string,
  bs: string
}
interface User {
  name: string,
  email: string,
  company: Company
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private instructorService: InstructorService) {

  }
  title = 'sebit-app';
  user: User = {
    name: '',
    email: '',
    company: {
      name: '',
      catchPhrase: '',
      bs: ''
    }
  };
  users = [];
  modes = [
    {
      state: "create",
      title: "Oluştur"
    },
    {
      state: "edit",
      title: "Ok"
    }
  ];
  companies = [
    {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
    },
    {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains"
    },
    {
      name: "Romaguera-Jacobson",
      catchPhrase: "Face to face bifurcated interface",
      bs: "e-enable strategic applications"
    },
    {
      name: "Robel-Corkery",
      catchPhrase: "Multi-tiered zero tolerance productivity",
      bs: "transition cutting-edge web services"
    },
    {
      name: "Keebler LLC",
      catchPhrase: "User-centric fault-tolerant solution",
      bs: "revolutionize end-to-end systems"
    },
    {
      name: "Considine-Lockman",
      catchPhrase: "Synchronised bottom-line interface",
      bs: "e-enable innovative applications"
    },
    {
      name: "Johns Group",
      catchPhrase: "Configurable multimedia task-force",
      bs: "generate enterprise e-tailers"
    },
    {
      name: "Abernathy Group",
      catchPhrase: "Implemented secondary concept",
      bs: "e-enable extensible e-tailers"
    },
    {
      name: "Yost and Sons",
      catchPhrase: "Switchable contextually-based project",
      bs: "aggregate real-time technologies"
    },
    {
      name: "Hoeger LLC",
      catchPhrase: "Centralized empowering task-force",
      bs: "target end-to-end models"
    }
  ];
  mode = null;

  ngOnInit() {
    this.mode = this.modes[0];
    this.companies.unshift({
      name: "Seçiniz..",
      catchPhrase: '',
      bs: ''
    });
    this.user.company = this.companies[0];
    this.instructorService.getInstructors().subscribe((response) => {
      this.users = response;
    })
  }

  userAction() {
    switch (this.mode.state) {
      case "create":
        this.users.push(Object.assign({}, this.user));
        break;
      case "edit":
        this.mode = this.modes[0];
        break;
    }
    this.resetModel();
  }

  resetModel (){
    this.user = JSON.parse(JSON.stringify(this.user))
    this.user.name = '';
    this.user.email = '';
    this.user.company = this.companies[0];
  }

  editItem(user: User) {
    this.user = user;
    this.user.company = this.companies.find(c => {
      return this.user.company.name === c.name
    });
    this.mode = this.modes[1];
  }

  removeItem(index: number) {
    this.users.splice(index, 1);
  }
}
