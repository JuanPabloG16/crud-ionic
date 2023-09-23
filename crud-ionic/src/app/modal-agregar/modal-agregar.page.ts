import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { Users } from '../models/People.model';
import { ResponseUsers } from '../models/Response.model';
import { peopleService } from '../service/people.service';

@Component({
  selector: 'app-modal-agregar',
  templateUrl: './modal-agregar.page.html',
  styleUrls: ['./modal-agregar.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  providers:[peopleService]
})
export class ModalAgregarPage implements OnInit {

  //variables
  name:string="";
  rol:string="";
  user:string="";
  pass:string="";


  constructor(private modalController:ModalController,private peopleService: peopleService) { }

  ngOnInit() {
  }

  //crear usuario
  createUser(){
    const user: Users = {
      id: 5, 
      names: this.name,
      username: this.user,
      password: this.pass,
      rol: this.rol
    };

    this.peopleService.insertUser(user).subscribe(
      (response: ResponseUsers) => {
        console.log('Usuario insertado con éxito', response);
      }
    );
    this.volver();
  }

  volver(){
    this.modalController.dismiss();
  }

}
