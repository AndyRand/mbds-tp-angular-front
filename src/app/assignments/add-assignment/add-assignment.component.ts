import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { Assignment } from '../assignment.model';


@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css'],
})
export class AddAssignmentComponent implements OnInit {
  // Pour les champs du formulaire
  nom = '';
  auteur = '';
  eleve ;
  eleves = [];
  profs = [];
  prof;
  dateDeRendu = null;
  rendu = false;

  constructor(private assignmentsService:AssignmentsService,
              private router:Router) {
                this.eleves = assignmentsService.eleves;
                this.profs = assignmentsService.profs;
              }

  ngOnInit(): void {}

  onSubmit(event) {
    //console.log(this.nom, this.auteur, this.prof, this.dateDeRendu, this.eleve);
    //if((!this.nom) || (!this.eleve) || (!this.prof) ||  (!this.dateDeRendu)) return;

    let nouvelAssignment = new Assignment();
    nouvelAssignment.nom = this.nom;
    nouvelAssignment.auteur = this.eleve;
    nouvelAssignment.prof = this.prof;
    nouvelAssignment.dateDeRendu = this.dateDeRendu;
    nouvelAssignment.rendu = false;
    console.log(nouvelAssignment);
    this.assignmentsService.addAssignment(nouvelAssignment)
      .subscribe(reponse => {
        console.log(reponse.message);

         // et on navigue vers la page d'accueil qui affiche la liste
         this.router.navigate(["/home"]);
      });
  }

}
