import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-mecanicien',
  imports: [CommonModule, FormsModule],
  templateUrl: './create-mecanicien.component.html',
  styleUrl: './create-mecanicien.component.css'
})
export class CreateMecanicienComponent implements OnInit {
  nom: string = '';
  prenom: string = '';
  numero: string = '';
  mail: string = '';
  role: string = 'mecanicien';
  mdp: string = '';
  constructor() { }

  ngOnInit(): void {
    // Initialization logic here
  }

  // Add methods and properties as needed for your component

}
