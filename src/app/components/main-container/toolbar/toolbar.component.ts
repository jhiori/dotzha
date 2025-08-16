import { Component, EventEmitter, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
// import { paramGlobales } from '../../../../config/parametros.constantes';
import { CompanyInfo } from '../../../config/global.params';

@Component({
  selector: 'app-toolbar',
  imports: [MatToolbarModule,MatButtonModule,MatIconModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {

  private titleApp: string = CompanyInfo.NAME_CO;
  private toggleDrawer: boolean = false;

  @Output()
  private notify: EventEmitter<boolean> = new EventEmitter<boolean>();

  get getTitleApp(){
    return this.titleApp;
  }

  fn_OpenClose_Drawer(){
    this.toggleDrawer = !this.toggleDrawer;
    this.notify.emit(this.toggleDrawer);
  }

}
