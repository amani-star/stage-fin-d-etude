import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TypeComponent } from './dashboard/type/type.component';
import {HttpClientModule } from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { AjoutetypeComponent } from './dashboard/type/ajoutetype/ajoutetype.component';
import { ModifiertypeComponent } from './dashboard/type/ajoutetype/modifiertype/modifiertype.component';
import { ListeBienComponent } from './Bien/liste-bien/liste-bien.component';
import { NavComponent } from './dashboardAdmin/nav/nav.component';
import { FooteradminComponent } from './dashboardAdmin/footeradmin/footeradmin.component';
import { HeaderadminComponent } from './dashboardAdmin/headeradmin/headeradmin.component';
import { HomeadminComponent } from './dashboardAdmin/homeadmin/homeadmin.component';
import { TypeImmComponent } from './dashboardAdmin/type-imm/type-imm.component';
import {DataTablesModule} from "angular-datatables";
import { FilterPipe } from './pipes/filter.pipe';
import { RegisterComponent } from './__modals/register/register.component';
import { EditComponent } from './__modals/edit/edit.component';
import { LoginComponent } from './__modals/login/login.component';

import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModifierTypeComponent } from './dashboardAdmin/type-imm/modifier-type/modifier-type.component';
import { AjoutenewtypeComponent } from './dashboardAdmin/type-imm/ajoutenewtype/ajoutenewtype.component';
import { RechercheclassiqueComponent } from './dashboardAdmin/recherche/rechercheclassique/rechercheclassique.component';
import { RechercherclassiqueComponent } from './rechercher/rechercherclassique/rechercherclassique.component';
import { DetailstypeComponent } from './dashboardAdmin/recherche/rechercheclassique/detailstype/detailstype.component';
import { FondImmobilierComponent } from './dashboardAdmin/fond-immobilier/fond-immobilier.component';
import { SimplefloueComponent } from './dashboardAdmin/recherche/simplefloue/simplefloue.component';
import { AjoutenewfondimmobilierComponent } from './dashboardAdmin/fond-immobilier/ajoutenewfondimmobilier/ajoutenewfondimmobilier.component';
import { RechercherclassComponent } from './rechercher/rechercherclassique/rechercherclass/rechercherclass.component';
import { ComplexefloueComponent } from './dashboardAdmin/recherche/complexefloue/complexefloue.component';
import { DetailsimpleComponent } from './dashboardAdmin/recherche/simplefloue/detailsimple/detailsimple.component';
import { ModifierfondimmobilierComponent } from './dashboardAdmin/fond-immobilier/modifierfondimmobilier/modifierfondimmobilier.component';
import { ContacttComponent } from './dashboardAdmin/contactt/contactt.component';
import { GereutilisateurComponent } from './dashboardAdmin/gereutilisateur/gereutilisateur.component';
import { FondimmobilierrComponent } from './fondimmobilierr/fondimmobilierr.component';
import { AjoutefondComponent } from './fondimmobilierr/ajoutefond/ajoutefond.component';
import { ModiffondComponent } from './fondimmobilierr/modiffond/modiffond.component';
import { VisiteuraccComponent } from './visiteuracc/visiteuracc.component';
import { RechercherflouesimpleComponent } from './rechercher/rechercherflouesimple/rechercherflouesimple.component';
import { RecherechefloueSimComponent } from './rechercher/rechercherflouesimple/recherechefloue-sim/recherechefloue-sim.component';
import { PatientComponent } from './patient/patient.component';
import { DetailcomplexeComponent } from './dashboardAdmin/recherche/complexefloue/detailcomplexe/detailcomplexe.component';
import { RechercheclassiquevisiteurComponent } from './recherchevisiteur/rechercheclassiquevisiteur/rechercheclassiquevisiteur.component';
import { RechercheclassvisiteurComponent } from './recherchevisiteur/rechercheclassiquevisiteur/rechercheclassvisiteur/rechercheclassvisiteur.component';
import { RechercheflouesimpleComponent } from './recherchevisiteur/rechercheflouesimple/rechercheflouesimple.component';
import { RechercheflouesimplevisiteurComponent } from './recherchevisiteur/rechercheflouesimple/rechercheflouesimplevisiteur/rechercheflouesimplevisiteur.component';
import { RecherchercomplexeComponent } from './rechercher/recherchercomplexe/recherchercomplexe.component';
import { RechcomplexeComponent } from './rechercher/recherchercomplexe/rechcomplexe/rechcomplexe.component';
import { RecercheclassiquepatientComponent } from './recherchepatient/recercheclassiquepatient/recercheclassiquepatient.component';
import { RechercheclasspatientComponent } from './recherchepatient/recercheclassiquepatient/rechercheclasspatient/rechercheclasspatient.component';
import { RechercherflouesimplepatientComponent } from './recherchepatient/rechercherflouesimplepatient/rechercherflouesimplepatient.component';
import { RecherchersimplepatientComponent } from './recherchepatient/rechercherflouesimplepatient/recherchersimplepatient/recherchersimplepatient.component';
import { DetailfondComponent } from './detailfond/detailfond.component';
import { RecherchecomplexevisiteurComponent } from './recherchevisiteur/recherchecomplexevisiteur/recherchecomplexevisiteur.component';
import { RechecomplexevisiteurComponent } from './recherchevisiteur/recherchecomplexevisiteur/rechecomplexevisiteur/rechecomplexevisiteur.component';
import { RecherchecomplexepatientComponent } from './recherchepatient/recherchecomplexepatient/recherchecomplexepatient.component';
import { RechcomplexepatientComponent } from './recherchepatient/recherchecomplexepatient/rechcomplexepatient/rechcomplexepatient.component';
import { EnvoyermailComponent } from './dashboardAdmin/contactt/envoyermail/envoyermail.component';
import { EnvoyermaaaiiiilllComponent } from './contact/envoyermaaaiiiilll/envoyermaaaiiiilll.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    DashboardComponent,
    TypeComponent,
    AjoutetypeComponent,
    ModifiertypeComponent,
    ListeBienComponent,
    NavComponent,
    FooteradminComponent,
    HeaderadminComponent,
    HomeadminComponent,
    TypeImmComponent,
    FilterPipe,
    RegisterComponent,
    EditComponent,
    LoginComponent,
    ModifierTypeComponent,
    AjoutenewtypeComponent,
    RechercheclassiqueComponent,
    RechercherclassiqueComponent,
    DetailstypeComponent,
    FondImmobilierComponent,
    SimplefloueComponent,
    AjoutenewfondimmobilierComponent,
    RechercherclassComponent,
    ComplexefloueComponent,
    DetailsimpleComponent,
    ModifierfondimmobilierComponent,
    ContacttComponent,
    GereutilisateurComponent,
    FondimmobilierrComponent,
    AjoutefondComponent,
    ModiffondComponent,
    VisiteuraccComponent,
    RechercherflouesimpleComponent,
    RecherechefloueSimComponent,
    PatientComponent,
    DetailcomplexeComponent,
    RechercheclassiquevisiteurComponent,
    RechercheclassvisiteurComponent,
    RechercheflouesimpleComponent,
    RechercheflouesimplevisiteurComponent,
    RecherchercomplexeComponent,
    RechcomplexeComponent,
    RecercheclassiquepatientComponent,
    RechercheclasspatientComponent,
    RechercherflouesimplepatientComponent,
    RecherchersimplepatientComponent,
    DetailfondComponent,
    RecherchecomplexevisiteurComponent,
    RechecomplexevisiteurComponent,
    RecherchecomplexepatientComponent,
    RechcomplexepatientComponent,
    EnvoyermailComponent,
    EnvoyermaaaiiiilllComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
