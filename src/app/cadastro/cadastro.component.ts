import { Component, OnInit } from '@angular/core';
import { PersonService } from '../services/person.service';
import { Person } from '../models/person';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.sass']
})
export class CadastroComponent implements OnInit {
  
  person = {} as Person;
  persons: Person[] | undefined;

  constructor(private personService: PersonService) {}
  
  ngOnInit() {
    this.getPersons();
  }

  // defini se um carro será criado ou atualizado
  savePerson(form: NgForm) {
    if (this.person.id !== undefined) {
      this.personService.updatePerson(this.person).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.personService.savePerson(this.person).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }

  // Chama o serviço para obtém todos os carros
  getPersons() {
    this.personService.getPersons().subscribe((persons: Person[]) => {
      this.persons = persons;
    });
  }

  // deleta um carro
  deletePerson(person: Person) {
    this.personService.deletePerson(person).subscribe(() => {
      this.getPersons();
    });
  }

  // copia o carro para ser editado.
  editPerson(person: Person) {
    this.person = { ...person };
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getPersons();
    form.resetForm();
    this.person = {} as Person;
  }

  handleSuccess() {
    alert("Cadastrado com sucesso!");
  }

}

