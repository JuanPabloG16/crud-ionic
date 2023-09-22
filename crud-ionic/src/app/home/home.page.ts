import { Component, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { peopleService } from '../service/people.service';
import { Users } from '../models/People.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ModalAgregarPage } from '../modal-agregar/modal-agregar.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [ IonicModule, HttpClientModule, FormsModule,CommonModule],
  providers:[peopleService]
})


export class HomePage implements OnInit {
  people: Users[] = [];


  constructor(private peopleService: peopleService,private modalController:ModalController) {}

  ngOnInit() {
    this.peopleService.getPeople().subscribe({
      next: (response) => {
        this.people = response;
      }
    });
    

  }

  // insertar usuario
  async insertPeople(){
    
    // ! Crea el modal
    const modal = await this.modalController.create({
      component:ModalAgregarPage,
      componentProps:{
      }
    });
    
    modal.onDidDismiss().then(() => {
      this.peopleService.getPeople().subscribe({
        next: (response) => {
          this.people = response;
        }
      });
    });

  await modal.present();
  }

}
