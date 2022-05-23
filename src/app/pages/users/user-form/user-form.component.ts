import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userId: any= '';
  users: Array<User> = [];
  userForm:FormGroup

  constructor(private fb: FormBuilder, private userService: UserService, private actRoute: ActivatedRoute, private router: Router) {
    this.userForm = this.fb.group({

      id:0,
      nome: '',
      sobrenome: '',
      idade: 0,
      profissao: ''
    })
  }

  ngOnInit(): void {
    this.getUsers()

    this.actRoute.paramMap.subscribe(params => {
      this.userId = params.get('id');
      if (this.userId !== null) {
        this.userService.getUser(this.userId).subscribe(result => {
          this.userForm.patchValue({
            id: result[0].id,
            nome: result[0].nome,
            sobrenome: result[0].sobrenome,
            idade: result[0].idade,
            profissao: result[0].profissao
          })
        })
      }
    })
  }

  getUsers():void {
    this.userService.getUsers().subscribe(response =>{
      this.users = response
    })
  }

  createUser(){
    this.userForm.get('id')?.patchValue(this.users.length + 1)
    this.userService.postUser(this.userForm.value).subscribe(result =>{
      console.log(`Usuáro ${result.nome} ${result.sobrenome} foi cadastrado com sucesso!`);
    },(err) =>{

    }, () => {
      this.router.navigate(['/'])
    })
  }

  updateUser(){
    this.userService.updateUser(this.userId, this.userForm.value).subscribe(result =>{
      console.log('usuário atualizado', result);

    }, (err) =>{

    }, () => {
      this.router.navigate(['/'])
    })
  }

  actionButton(){
    if (this.userId !== null) {
      this.updateUser()
    } else {
      this.createUser()
    }
  }

}
