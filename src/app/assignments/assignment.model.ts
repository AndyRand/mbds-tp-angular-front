export class Assignment {
  _id?:string;
  id:number;
  nom:string;
  auteur:Eleve;
  prof:Prof;
  note:number;
  remarques:string;
  dateDeRendu:Date;
  rendu:boolean;
}

export class Eleve {
  nom: string;
  prenom: string;
  image: string;
}

export class Prof {
  nom: string;
  prenom: string;
  image: string;
  matiere:Matiere;
}

export class Matiere {
  nom: string;
  image: string;
}
