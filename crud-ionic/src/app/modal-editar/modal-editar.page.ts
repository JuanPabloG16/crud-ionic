import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { peopleService } from '../service/people.service';
import { Users } from '../models/People.model';
import { HttpClientModule } from '@angular/common/http';




@Component({
  selector: 'app-modal-editar',
  templateUrl: './modal-editar.page.html',
  styleUrls: ['./modal-editar.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,HttpClientModule],
  providers: [peopleService]
})
export class ModalEditarPage implements OnInit {
  
  @Input() user: Users = {id: 0, names: '', username: '', password: '', rol: ''};

  constructor(private modalController:ModalController,private peopleService: peopleService) { }

  ngOnInit() {
  }

  volver(){
    this.modalController.dismiss();
  }

  async updateUser() {
    try {
      await this.peopleService.updateUser(this.user).toPromise();
      this.modalController.dismiss(this.user);
    } catch (error) {
      console.error(error);
    }
  }
}
