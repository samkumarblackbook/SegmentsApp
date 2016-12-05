// import { Component, Renderer, ViewChild } from '@angular/core';
// import { Location } from '@angular/common';
// import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
// import { FileUploader } from 'ng2-file-upload';
// import { EventsService, UserService } from '../services';
// import { ValidationService,ErrorMsgComponent } from '../forms';
// import { IUser, User, IUserPermissions } from '../interfaces';
// import { Response } from '@angular/http';
// import { Router, ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';
//
// @Component({
//   selector: 'user-profile',
//   template: require('./user-profile.view.pug')
// })
//
// export class UserProfileComponent {
//   public URL: string = 'http://localhost:3002/api/user/';
//   public c: FileUploader = new FileUploader({url: this.URL + this.userId + '/image'});
//   public myForm: FormGroup;
//   public user: IUser = new User();
//   public userId: number;
//
//   public isValid: boolean = false;
//   public isNewUser:boolean = true;
//   public isReadOnly:boolean = true;
//   public canEdit: boolean = false;
//   public ownProfile: boolean = false;
//   public canEditPassword: boolean = false;
//   public canEditRole: boolean = false;
//   private permissions:IUserPermissions;
//
//   public errorMsg:string = '';
//   private password: string = '';
//   private passwordConfirm: string = '';
//   public routeInfo: ActivatedRouteSnapshot;
//   public userForm:any;
//
//   constructor(
//     public event: EventsService,
//     private userService: UserService,
//     public route: ActivatedRoute,
//     private router: Router,
//     private formBuilder: FormBuilder,
//     private validationService:ValidationService
//   ){
//     this.routeInfo = this.route.snapshot;
//
//     this.userForm = this.formBuilder.group({
//       'firstName': ['' , Validators.required],
//       'lastName': ['', [Validators.required]],
//       'username': ['', [Validators.required,validationService.emailValidator]],
//       'phoneNumber': ['', [validationService.phoneValidator]],
//       'previousPassword': [''],
//       'password': ['',[validationService.passwordValidator]],
//       'passwordConfirm': [''],
//       'active':[''],
//       'avatarUrl': ['']
//       },
//       {validator: validationService.matchingPasswords('password', 'passwordConfirm')}
//     );
//
//
//
//     if(this.routeInfo.data['user']){
//       this.user = <IUser>this.routeInfo.data['user'];
//       this.userForm.patchValue(this.user)
//     }
//     else {
//       this.userForm.patchValue(this.user);
//     }
//
//     this.assignPermissions();
//
//     this.c.onCompleteItem = (item: any, response: any, headers: any) => {
//       this.userForm.patchValue({'avatarUrl': response['data']});
//
//     }
//   }
//
//
//   goBack = () => {
//     this.isReadOnly = true;
//     this.userForm.disable();
//   }
//
//   resetForm = () => {
//     this.user = new User();
//     this.userForm.reset();
//   }
//
//   assignPermissions = () => {
//
//     if(this.routeInfo.data['user']){
//       this.isNewUser = false;
//       this.userForm.disable();
//     }
//
//     else {
//       this.isReadOnly = false;
//       this.userForm.enable();
//     }
//
//     this.permissions = this.userService.getPermissions('users');
//     if(!this.isNewUser){
//       let id = parseInt(this.routeInfo.params['id']);
//       if(id == this.userService.getUser().id){
//         this.ownProfile = true;
//       }
//     }
//     else {
//
//     }
//
//     this.canEdit = this.permissions.canEditOthersProfiles || this.ownProfile ? true : false;
//     this.canEditPassword = this.permissions.canResetOthersPasswords;
//     this.canEditRole =  this.permissions.canAssignRoles;
//
//     if(this.canEdit && this.routeInfo.queryParams['edit']){
//       this.userForm.enable();
//       this.isReadOnly = false;
//     }
//   }
//
//   editUser = () => {
//     this.isReadOnly = false;
//     this.userForm.enable();
//   }
//
//
//   saveForm = () => {
//     if(this.userForm.valid){
//       this.userService.addUser(this.userForm.value)
//       .then((response: Response) => {
//         var newuserid = response.json().id;
//         this.router.navigate(['/user',newuserid])
//       }).catch((response: Response) => {
//         this.errorMsg = response.json();
//       })
//     }else{
//       this.errorMsg = 'You must complete all required fields';
//     }
//   }
//
//   updatePhoneValue(value: string){
//     let phone = this.userForm.controls['phoneNumber'].value
//     this.userForm.patchValue({ 'phoneNumber': this.applyPhoneFilter(phone)})
//   }
//
//   applyPhoneFilter(value):string{
//     if(value){
//       var sanitizedString = value.trim().split(' ').join('').split('-').join('').split('(').join('').split(')').join('');
//       if(sanitizedString.length == 10){
//         return sanitizedString.slice(0,3) + '-' + sanitizedString.slice(3,6) + '-' + sanitizedString.slice(6,10);
//       }else{
//         return sanitizedString;
//       }
//     }
//   }
// }
