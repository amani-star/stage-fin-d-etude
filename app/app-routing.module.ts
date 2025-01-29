import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ContactComponent} from "./contact/contact.component";

import {DashboardComponent} from "./dashboard/dashboard.component";
import {TypeComponent} from "./dashboard/type/type.component";
import {AjoutetypeComponent} from "./dashboard/type/ajoutetype/ajoutetype.component";
import {ModifiertypeComponent} from "./dashboard/type/ajoutetype/modifiertype/modifiertype.component";
import {ListeBienComponent} from "./Bien/liste-bien/liste-bien.component";
import {HomeadminComponent} from "./dashboardAdmin/homeadmin/homeadmin.component";
import {TypeImmComponent} from "./dashboardAdmin/type-imm/type-imm.component";
import {ModifierTypeComponent} from "./dashboardAdmin/type-imm/modifier-type/modifier-type.component";
import {AjoutenewtypeComponent} from "./dashboardAdmin/type-imm/ajoutenewtype/ajoutenewtype.component";
import {RechercheclassiqueComponent} from "./dashboardAdmin/recherche/rechercheclassique/rechercheclassique.component";
import {RechercherclassiqueComponent} from "./rechercher/rechercherclassique/rechercherclassique.component";
import {DetailstypeComponent} from "./dashboardAdmin/recherche/rechercheclassique/detailstype/detailstype.component";
import {FondImmobilierComponent} from "./dashboardAdmin/fond-immobilier/fond-immobilier.component";
import {SimplefloueComponent} from "./dashboardAdmin/recherche/simplefloue/simplefloue.component";
import {
  AjoutenewfondimmobilierComponent
} from "./dashboardAdmin/fond-immobilier/ajoutenewfondimmobilier/ajoutenewfondimmobilier.component";
import {RechercherclassComponent} from "./rechercher/rechercherclassique/rechercherclass/rechercherclass.component";
import {ComplexefloueComponent} from "./dashboardAdmin/recherche/complexefloue/complexefloue.component";
import {
  ModifierfondimmobilierComponent
} from "./dashboardAdmin/fond-immobilier/modifierfondimmobilier/modifierfondimmobilier.component";
import {DetailsimpleComponent} from "./dashboardAdmin/recherche/simplefloue/detailsimple/detailsimple.component";
import {ContacttComponent} from "./dashboardAdmin/contactt/contactt.component";
import {EditComponent} from "./__modals/edit/edit.component";
import {GereutilisateurComponent} from "./dashboardAdmin/gereutilisateur/gereutilisateur.component";
import {FondImmobilie} from "./model/fond-immobilie";
import {FondimmobilierrComponent} from "./fondimmobilierr/fondimmobilierr.component";
import {AjoutefondComponent} from "./fondimmobilierr/ajoutefond/ajoutefond.component";
import {ModiffondComponent} from "./fondimmobilierr/modiffond/modiffond.component";
import {VisiteuraccComponent} from "./visiteuracc/visiteuracc.component";
import {RechercherflouesimpleComponent} from "./rechercher/rechercherflouesimple/rechercherflouesimple.component";
import {
  RecherechefloueSimComponent
} from "./rechercher/rechercherflouesimple/recherechefloue-sim/recherechefloue-sim.component";
import {PatientComponent} from "./patient/patient.component";
import {
  DetailcomplexeComponent
} from "./dashboardAdmin/recherche/complexefloue/detailcomplexe/detailcomplexe.component";
import {
  RechercheclassiquevisiteurComponent
} from "./recherchevisiteur/rechercheclassiquevisiteur/rechercheclassiquevisiteur.component";
import {
  RechercheclassvisiteurComponent
} from "./recherchevisiteur/rechercheclassiquevisiteur/rechercheclassvisiteur/rechercheclassvisiteur.component";
import {RechercheflouesimpleComponent} from "./recherchevisiteur/rechercheflouesimple/rechercheflouesimple.component";
import {
  RechercheflouesimplevisiteurComponent
} from "./recherchevisiteur/rechercheflouesimple/rechercheflouesimplevisiteur/rechercheflouesimplevisiteur.component";
import {RecherchercomplexeComponent} from "./rechercher/recherchercomplexe/recherchercomplexe.component";
import {RechcomplexeComponent} from "./rechercher/recherchercomplexe/rechcomplexe/rechcomplexe.component";
import {
  RecercheclassiquepatientComponent
} from "./recherchepatient/recercheclassiquepatient/recercheclassiquepatient.component";
import {
  RechercheclasspatientComponent
} from "./recherchepatient/recercheclassiquepatient/rechercheclasspatient/rechercheclasspatient.component";
import {
  RechercherflouesimplepatientComponent
} from "./recherchepatient/rechercherflouesimplepatient/rechercherflouesimplepatient.component";
import {
  RecherchersimplepatientComponent
} from "./recherchepatient/rechercherflouesimplepatient/recherchersimplepatient/recherchersimplepatient.component";
import {LoginComponent} from "./__modals/login/login.component";
import {DetailfondComponent} from "./detailfond/detailfond.component";
import {
  RecherchecomplexevisiteurComponent
} from "./recherchevisiteur/recherchecomplexevisiteur/recherchecomplexevisiteur.component";
import {
  RechecomplexevisiteurComponent
} from "./recherchevisiteur/recherchecomplexevisiteur/rechecomplexevisiteur/rechecomplexevisiteur.component";
import {
  RecherchecomplexepatientComponent
} from "./recherchepatient/recherchecomplexepatient/recherchecomplexepatient.component";
import {
  RechcomplexepatientComponent
} from "./recherchepatient/recherchecomplexepatient/rechcomplexepatient/rechcomplexepatient.component";
import {EnvoyermailComponent} from "./dashboardAdmin/contactt/envoyermail/envoyermail.component";
import {EnvoyermaaaiiiilllComponent} from "./contact/envoyermaaaiiiilll/envoyermaaaiiiilll.component";

const routes: Routes = [
  {path:"proprietaire",component: HomeComponent
  },
  {path:"contact",component:ContactComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"typeee",component:TypeComponent},
  {path:"edit",component:EditComponent},
  {path:"ajoutetype",component:AjoutetypeComponent},
  {path:"modifiertype/:documentId",component:ModifiertypeComponent},
  {path:"bien",component:ListeBienComponent},
  {path:"dashboardAdmin",component:HomeadminComponent, children:[
      {path:"type",component:TypeImmComponent},
      {path:"modifier-type/:documentId",component:ModifierTypeComponent},
      {path:"ajouternewtype",component:AjoutenewtypeComponent},
      {path:"rechercheclassique",component:RechercheclassiqueComponent},
      {path:"fondImmobilier",component:FondImmobilierComponent},
      {path:"simplefloue",component:SimplefloueComponent},
      {path:"ajoutenewfondimmobilier",component:AjoutenewfondimmobilierComponent},
      {path:"modifierfondimmobilier/:fondId",component:ModifierfondimmobilierComponent},
      {path:"complexefloue",component:ComplexefloueComponent},
      {path:"contactt",component:ContacttComponent},
      {path:"gereutilisateur",component:GereutilisateurComponent},
      {path:"detailcomplexe/:id",component:DetailcomplexeComponent},
      {path:"envoyermail",component:EnvoyermailComponent}


    ]},
  {path:"rechercherclassique",component:RechercherclassiqueComponent},
  {path:'detailstype/:id',component:DetailstypeComponent},
  {path:'rechercherclass/:id',component:RechercherclassComponent},
  {path:'rechercherclass/:selectlogement/:selectedOption/:prixmax/:prixmin/:agemax/:agemin/:distancemax/:distancemin',component:RechercherclassComponent},
  {path:'detailsimple/:id',component:DetailsimpleComponent},
  {path:"fondimmobilierr",component:FondimmobilierrComponent},
  {path:"ajoutefond",component:AjoutefondComponent},
  {path:"modiffond/:fondId",component:ModiffondComponent},
  {path:"",component:VisiteuraccComponent},
  {path:"rechercherflouesimple",component:RechercherflouesimpleComponent},
  {path:'recherechefloueSim/:selectlogement/:selectedOption/:prix/:distance/:age',component:RecherechefloueSimComponent},
  {path:"patient",component:PatientComponent},
  {path:"rechercheclassiquevisiteur",component:RechercheclassiquevisiteurComponent},
  {path:"rechercheclassvisiteur/:selectlogement/:selectedOption/:prixmax/:prixmin/:agemax/:agemin/:distancemax/:distancemin",component:RechercheclassvisiteurComponent},
  {path:"rechercheflouesimplee",component:RechercheflouesimpleComponent},
  {path:"rechercheflouesimplevisiteur/:selectlogement/:selectedOption/:prix/:distance/:age",component:RechercheflouesimplevisiteurComponent}
 , {path:"recherchercomplexe",component:RecherchercomplexeComponent},
  {path:"rechcomplexe/:selectlogement/:selectedOption/:prix/:distance/:age/:termelogique",component:RechcomplexeComponent},
  {path:"recercheclassiquepatient",component:RecercheclassiquepatientComponent},
  {path:"rechercheclasspatient/:selectlogement/:selectedOption/:prixmax/:prixmin/:agemax/:agemin/:distancemax/:distancemin",component:RechercheclasspatientComponent}
 , {path:"rechercherflouesimplepatient",component:RechercherflouesimplepatientComponent},
  {path:"recherchersimplepatient/:selectlogement/:selectedOption/:prix/:distance/:age",component:RecherchersimplepatientComponent},
  {path:"login",component:LoginComponent},
  {path:'detailfond/:id',component:DetailfondComponent},
  {path:"recherchecomplexevisiteur",component:RecherchecomplexevisiteurComponent},
  {path:"rechecomplexevisiteur/:selectlogement/:selectedOption/:prix/:distance/:age/:termelogique",component:RechecomplexevisiteurComponent},
  {path:"recherchecomplexepatient",component:RecherchecomplexepatientComponent},
  {path:"rechcomplexepatient/:selectlogement/:selectedOption/:prix/:distance/:age/:termelogique",component:RechcomplexepatientComponent}
,{path:"envoyermaaaiiiilll",component:EnvoyermaaaiiiilllComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
