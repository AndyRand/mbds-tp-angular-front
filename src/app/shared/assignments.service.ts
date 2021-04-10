import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';
import { catchError, filter, map, tap } from 'rxjs/operators';
import { Assignment } from '../assignments/assignment.model';
import { LoggingService } from './logging.service';
import { assignmentsGeneres } from './data';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  assignments:Assignment[];
  profs = [{
    "nom": "Marie-thérèse",
    "prenom": "Bake",
    "matiere": {
      "nom": "Angular",
      "image": "https://robohash.org/voluptateetpraesentium.png?size=50x50&set=set1"
    },
    "image": "https://robohash.org/laboreodiomaiores.png?size=50x50&set=set1"
  }, {
    "nom": "Aloïs",
    "prenom": "Sybyl",
    "matiere": {
      "nom": "Grails",
      "image": "https://robohash.org/quidemdoloret.png?size=50x50&set=set1"
    },
    "image": "https://robohash.org/liberositplaceat.png?size=50x50&set=set1"
  }, {
    "nom": "Clémence",
    "prenom": "Alessandro",
    "matiere": {
      "nom": "SQL3",
      "image": "https://robohash.org/etoccaecatimolestias.png?size=50x50&set=set1"
    },
    "image": "https://robohash.org/reiciendisnequequisquam.png?size=50x50&set=set1"
  }, {
    "nom": "Célia",
    "prenom": "Leisha",
    "matiere": {
      "nom": "Tunning",
      "image": "https://robohash.org/nemoquidemexplicabo.png?size=50x50&set=set1"
    },
    "image": "https://robohash.org/beataeodittotam.png?size=50x50&set=set1"
  }];

  eleves = [{
    "nom": "Gaïa",
    "prenom": "Alyss",
    "image": "https://robohash.org/rerumiureab.png?size=50x50&set=set1"
  }, {
    "nom": "Maïwenn",
    "prenom": "Fulvia",
    "image": "https://robohash.org/repudiandaeautexercitationem.png?size=50x50&set=set1"
  }, {
    "nom": "Laïla",
    "prenom": "Rozamond",
    "image": "https://robohash.org/omnisnihildoloribus.png?size=50x50&set=set1"
  }, {
    "nom": "Athéna",
    "prenom": "Ertha",
    "image": "https://robohash.org/culpaenimtotam.png?size=50x50&set=set1"
  }, {
    "nom": "Néhémie",
    "prenom": "Syd",
    "image": "https://robohash.org/esteiusminima.png?size=50x50&set=set1"
  }, {
    "nom": "Geneviève",
    "prenom": "Lula",
    "image": "https://robohash.org/utautenim.png?size=50x50&set=set1"
  }, {
    "nom": "Yè",
    "prenom": "Maurita",
    "image": "https://robohash.org/quibusdamquisquamsed.png?size=50x50&set=set1"
  }, {
    "nom": "Lóng",
    "prenom": "Sabina",
    "image": "https://robohash.org/fugaprovidentnon.png?size=50x50&set=set1"
  }, {
    "nom": "Vérane",
    "prenom": "Winna",
    "image": "https://robohash.org/exercitationemcorruptisit.png?size=50x50&set=set1"
  }, {
    "nom": "Eloïse",
    "prenom": "Harlen",
    "image": "https://robohash.org/liberoinciduntpariatur.png?size=50x50&set=set1"
  }, {
    "nom": "Mégane",
    "prenom": "Lynn",
    "image": "https://robohash.org/consequaturminimaautem.png?size=50x50&set=set1"
  }, {
    "nom": "Sélène",
    "prenom": "Ingrid",
    "image": "https://robohash.org/voluptateetdeserunt.png?size=50x50&set=set1"
  }, {
    "nom": "Andréa",
    "prenom": "Gerda",
    "image": "https://robohash.org/doloremvoluptatemaut.png?size=50x50&set=set1"
  }, {
    "nom": "Táng",
    "prenom": "Clyve",
    "image": "https://robohash.org/repellendusomnisquisquam.png?size=50x50&set=set1"
  }, {
    "nom": "Régine",
    "prenom": "Michel",
    "image": "https://robohash.org/quiarchitectoaut.png?size=50x50&set=set1"
  }, {
    "nom": "Kévina",
    "prenom": "Chrysler",
    "image": "https://robohash.org/idsuntet.png?size=50x50&set=set1"
  }, {
    "nom": "Géraldine",
    "prenom": "Helena",
    "image": "https://robohash.org/voluptatehicsunt.png?size=50x50&set=set1"
  }, {
    "nom": "Noémie",
    "prenom": "Holly-anne",
    "image": "https://robohash.org/explicaboquodad.png?size=50x50&set=set1"
  }, {
    "nom": "Kù",
    "prenom": "Chickie",
    "image": "https://robohash.org/fugiatquoatque.png?size=50x50&set=set1"
  }, {
    "nom": "Marie-thérèse",
    "prenom": "Seward",
    "image": "https://robohash.org/solutalaborumquas.png?size=50x50&set=set1"
  }, {
    "nom": "Miléna",
    "prenom": "Wildon",
    "image": "https://robohash.org/harumbeataereiciendis.png?size=50x50&set=set1"
  }, {
    "nom": "Maïté",
    "prenom": "Clarey",
    "image": "https://robohash.org/eaofficiiset.png?size=50x50&set=set1"
  }, {
    "nom": "Léana",
    "prenom": "Laney",
    "image": "https://robohash.org/fugitdeseruntiusto.png?size=50x50&set=set1"
  }, {
    "nom": "Lyséa",
    "prenom": "Niels",
    "image": "https://robohash.org/inciduntaperiammagni.png?size=50x50&set=set1"
  }, {
    "nom": "Kuí",
    "prenom": "Barbara",
    "image": "https://robohash.org/animiexut.png?size=50x50&set=set1"
  }, {
    "nom": "Göran",
    "prenom": "Fremont",
    "image": "https://robohash.org/eligendimolestiasab.png?size=50x50&set=set1"
  }, {
    "nom": "Hélène",
    "prenom": "Mahalia",
    "image": "https://robohash.org/reiciendisaccusantiumrepudiandae.png?size=50x50&set=set1"
  }, {
    "nom": "Léa",
    "prenom": "Florance",
    "image": "https://robohash.org/recusandaeearumfacilis.png?size=50x50&set=set1"
  }, {
    "nom": "Noëlla",
    "prenom": "Noll",
    "image": "https://robohash.org/molestiaeetlaborum.png?size=50x50&set=set1"
  }, {
    "nom": "Gaïa",
    "prenom": "Benton",
    "image": "https://robohash.org/quissedquasi.png?size=50x50&set=set1"
  }, {
    "nom": "Maëlys",
    "prenom": "Bruis",
    "image": "https://robohash.org/etdoloremcorrupti.png?size=50x50&set=set1"
  }, {
    "nom": "Nadège",
    "prenom": "Allistir",
    "image": "https://robohash.org/earepellendusdoloremque.png?size=50x50&set=set1"
  }, {
    "nom": "Laïla",
    "prenom": "Beilul",
    "image": "https://robohash.org/consequaturadet.png?size=50x50&set=set1"
  }, {
    "nom": "Gérald",
    "prenom": "Timi",
    "image": "https://robohash.org/voluptatesutad.png?size=50x50&set=set1"
  }, {
    "nom": "Dà",
    "prenom": "Bailie",
    "image": "https://robohash.org/velitrepudiandaeofficiis.png?size=50x50&set=set1"
  }, {
    "nom": "Adèle",
    "prenom": "Carleton",
    "image": "https://robohash.org/aliasliberofacere.png?size=50x50&set=set1"
  }, {
    "nom": "Aloïs",
    "prenom": "Emeline",
    "image": "https://robohash.org/veniamvoluptatemperferendis.png?size=50x50&set=set1"
  }, {
    "nom": "Crééz",
    "prenom": "Shannen",
    "image": "https://robohash.org/culpaquiacorrupti.png?size=50x50&set=set1"
  }, {
    "nom": "Dafnée",
    "prenom": "Maurene",
    "image": "https://robohash.org/voluptatumquoea.png?size=50x50&set=set1"
  }, {
    "nom": "Esbjörn",
    "prenom": "Kellyann",
    "image": "https://robohash.org/culpaautvoluptas.png?size=50x50&set=set1"
  }, {
    "nom": "Bérengère",
    "prenom": "Chrysa",
    "image": "https://robohash.org/assumendaeiusexcepturi.png?size=50x50&set=set1"
  }, {
    "nom": "Märta",
    "prenom": "Algernon",
    "image": "https://robohash.org/temporevelitaut.png?size=50x50&set=set1"
  }, {
    "nom": "Bécassine",
    "prenom": "Jessie",
    "image": "https://robohash.org/vitaequidemquia.png?size=50x50&set=set1"
  }, {
    "nom": "Marie-ève",
    "prenom": "Alanna",
    "image": "https://robohash.org/inventorecumquedebitis.png?size=50x50&set=set1"
  }, {
    "nom": "Märta",
    "prenom": "Allissa",
    "image": "https://robohash.org/dictasequiveniam.png?size=50x50&set=set1"
  }, {
    "nom": "Bérangère",
    "prenom": "Torie",
    "image": "https://robohash.org/velitassumendaconsectetur.png?size=50x50&set=set1"
  }, {
    "nom": "Pål",
    "prenom": "Maddie",
    "image": "https://robohash.org/eaautdolores.png?size=50x50&set=set1"
  }, {
    "nom": "Irène",
    "prenom": "Mozelle",
    "image": "https://robohash.org/explicabosimiliquedebitis.png?size=50x50&set=set1"
  }, {
    "nom": "Marie-noël",
    "prenom": "Brandais",
    "image": "https://robohash.org/deseruntrationeaccusamus.png?size=50x50&set=set1"
  }, {
    "nom": "Marie-josée",
    "prenom": "Glynda",
    "image": "https://robohash.org/aperiamquismolestiae.png?size=50x50&set=set1"
  }, {
    "nom": "Gwenaëlle",
    "prenom": "Camile",
    "image": "https://robohash.org/assumendaquaeratet.png?size=50x50&set=set1"
  }, {
    "nom": "Liè",
    "prenom": "Anjela",
    "image": "https://robohash.org/doloremfugitarchitecto.png?size=50x50&set=set1"
  }, {
    "nom": "Laurène",
    "prenom": "Amberly",
    "image": "https://robohash.org/autquaedoloribus.png?size=50x50&set=set1"
  }, {
    "nom": "Estée",
    "prenom": "Maxie",
    "image": "https://robohash.org/quodexercitationemunde.png?size=50x50&set=set1"
  }, {
    "nom": "Méghane",
    "prenom": "Vivianna",
    "image": "https://robohash.org/atquesitut.png?size=50x50&set=set1"
  }, {
    "nom": "Méng",
    "prenom": "Lelah",
    "image": "https://robohash.org/itaqueisteea.png?size=50x50&set=set1"
  }, {
    "nom": "Publicité",
    "prenom": "Henrieta",
    "image": "https://robohash.org/etquiavelit.png?size=50x50&set=set1"
  }, {
    "nom": "Marylène",
    "prenom": "Sax",
    "image": "https://robohash.org/saepeealaborum.png?size=50x50&set=set1"
  }, {
    "nom": "Gaëlle",
    "prenom": "Timi",
    "image": "https://robohash.org/exercitationemeoslaborum.png?size=50x50&set=set1"
  }, {
    "nom": "Ráo",
    "prenom": "Pepi",
    "image": "https://robohash.org/deseruntsintrepellendus.png?size=50x50&set=set1"
  }];

  constructor(private loggingService:LoggingService, private http:HttpClient) { }

  //uri = "http://localhost:8010/api/assignments";
  uri = "http://localhost:8010/api/assignments"

  getAssignments():Observable<Assignment[]> {
    console.log("Dans le service de gestion des assignments...")
    //return of(this.assignments);
    return this.http.get<Assignment[]>(this.uri);
  }

  getAssignmentsPagine(page:number, limit:number):Observable<any> {
    return this.http.get<Assignment[]>(this.uri+"?page="+page + "&limit="+limit);
  }

  // Pour votre culture, on peut aussi utiliser httpClient avec une promesse
  // et then, async, await etc. Mais ce n'est pas la norme chez les developpeurs
  // Angular
  getAssignmentsAsPromise():Promise<Assignment[]> {
    console.log("Dans le service de gestion des assignments...")
    //return of(this.assignments);
    return this.http.get<Assignment[]>(this.uri).toPromise();
  }

  getAssignment(id:number):Observable<Assignment> {
    //let assignementCherche = this.assignments.find(a => a.id === id);

    //return of(assignementCherche);

    return this.http.get<Assignment>(this.uri + "/" + id)
    .pipe(
      // traitement 1
      map(a => {
        a.nom += " ";
        return a;
      }),
      tap(a => {
        console.log("TRACE DANS TAP : j'ai reçu " + a.nom);
      }),
      /*
      filter(a => {
        return (a.rendu)
      })
      */
      catchError(this.handleError<any>('### catchError: getAssignments by id avec id=' + id))
    );
  }

  private handleError<T>(operation: any, result?: T) {
    return (error: any): Observable<T> => {
      console.log(error); // pour afficher dans la console
      console.log(operation + ' a échoué ' + error.message);

      return of(result as T);
    };
  }

  generateId():number {
    return Math.round(Math.random()*100000);
  }

  addAssignment(assignment:Assignment):Observable<any> {
    console.log(assignment, this.uri);
    assignment.id = this.generateId();
    //this.loggingService.log(assignment.nom, " a été ajouté");

    /*this.assignments.push(assignment);


    return of("Service: assignment ajouté !");*/

    return this.http.post(this.uri, assignment);
  }

  updateAssignment(assignment:Assignment):Observable<any> {
    // besoin de ne rien faire puisque l'assignment passé en paramètre
    // est déjà un élément du tableau

    //let index = this.assignments.indexOf(assignment);

    //console.log("updateAssignment l'assignment passé en param est à la position " + index + " du tableau");
    this.loggingService.log(assignment.nom, " a été modifié");

    return this.http.put(this.uri, assignment);
  }

  deleteAssignment(assignment:Assignment):Observable<any> {
    /*
    let index = this.assignments.indexOf(assignment);

    this.assignments.splice(index, 1);
    */


    this.loggingService.log(assignment.nom, " a été supprimé");

    return this.http.delete(this.uri + "/" + assignment._id);

  }

  /*peuplerBD() {
    assignmentsGeneres.forEach(a => {
      let nouvelAssignment = new Assignment();
      nouvelAssignment.id = a.id;
      nouvelAssignment.nom = a.nom;      
      nouvelAssignment.auteur = a.auteur;
      nouvelAssignment.matiere = a.matiere;
      nouvelAssignment.note = a.note;
      nouvelAssignment.remarques = a.remarques;
      nouvelAssignment.dateDeRendu = new Date(a.dateDeRendu);      
      nouvelAssignment.rendu = a.rendu;

      this.addAssignment(nouvelAssignment)
      .subscribe(reponse => {
        console.log(reponse.message);
      })
    })
  }*/

  // autre version qui permet de récupérer un subscribe une fois que tous les inserts
  // ont été effectués
  peuplerBDAvecForkJoin(): Observable<any> {
    const appelsVersAddAssignment = [];     
    assignmentsGeneres.forEach((a) => {
      const nouvelAssignment = new Assignment();
      const randomIndex = Math.floor(Math.random()*this.eleves.length)
      const randomIndex1 = Math.floor(Math.random()*this.profs.length)
      nouvelAssignment.id = a.id;
      nouvelAssignment.nom = a.nom;
      nouvelAssignment.auteur = this.eleves[randomIndex];
      nouvelAssignment.prof = this.profs[randomIndex1];
      nouvelAssignment.note = a.note;
      nouvelAssignment.remarques = a.remarques;
      nouvelAssignment.dateDeRendu = new Date(a.dateDeRendu);
      nouvelAssignment.rendu = a.rendu;

      appelsVersAddAssignment.push(this.addAssignment(nouvelAssignment));
    });
    return forkJoin(appelsVersAddAssignment); // renvoie un seul Observable pour dire que c'est fini
  }
}
