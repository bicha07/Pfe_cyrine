import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importez FormsModule pour utiliser ngModel
import { RegistrationComponent } from './registration.component';
import { RegistrationService } from './registration.service';

const registrationRoutes: Routes = [
  { path: '', component: RegistrationComponent }
];

@NgModule({
  declarations: [
    RegistrationComponent // Déclarez votre composant ici
  ],
  imports: [
    CommonModule,
    FormsModule, // Ajoutez FormsModule ici
    RouterModule.forChild(registrationRoutes) // Utilisez forChild pour les routes de fonctionnalités
  ],
  providers: [
    RegistrationService // Fournissez votre service d'inscription si nécessaire
  ]
})
export class RegistrationModule { }
