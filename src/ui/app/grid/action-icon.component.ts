import { Component, Renderer } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-ng2';
import { Router } from '@angular/router';
import { UserService, EventsService } from '../../services';
import { IUserPermissions } from '../../interfaces';

@Component({
  selector: 'action-icon',
  template: require('./action-icon.view.pug')
})

export class ActionIconComponent implements AgRendererComponent{
  private user: any;
  private userid: number;
  private dropIsOpen: boolean = false;
  private parentEl: any;
  private canEdit: boolean;
  private canDelete: boolean;
  private permissions:IUserPermissions;


  constructor(
    public renderer: Renderer,
    public router: Router,
    public userService: UserService,
    public event: EventsService
  ){
    this.event.on('event:closeDrop', (args) => {
      if(args.target !== this.parentEl){
        this.dropIsOpen = false;
      }
    })

    this.assignPermissions();
  }

  agInit(params: any):void{
    this.user = params.node.data;
    this.userid = this.user.id;
  }

  assignPermissions(){
    this.permissions = this.userService.getPermissions('users');
    this.canEdit = this.permissions.canEditOthersProfiles;
  }

  deleteUser(){
    // user service to delete user by id
    if(confirm("Are you sure you want to delete this user?")){
      this.userService.deleteUser(this.userid).then((res) => {
        this.updateGrid({deleted: true});
      })
    }
  }

  viewUser(){
    this.router.navigate(['/user', this.userid])
  }

  editUser(){
    this.router.navigate(['/user', this.userid],{queryParams: {edit:true}});
  }

  toggleActivateUser(){
    this.user.active = !this.user.active;
    // this.userService.updateUser(this.user).then((res) => {
    //   this.updateGrid();
    // });
  }

  updateGrid(args?: any){
    if(args){
      this.event.broadcast('event:refreshGrid',args);
    }else{
      this.event.broadcast('event:refreshGrid',{});
    }
  }

  openDropDown(target: any){
    this.parentEl = target;
    this.dropIsOpen = !this.dropIsOpen;
  }

}
