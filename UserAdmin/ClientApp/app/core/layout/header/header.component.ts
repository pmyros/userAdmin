import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '../../../services/translate/translate.service';
import { Router } from '@angular/router';
import { SignalRService } from '../../../services/signal-r.service';
 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  @Output() public sidenavToggle = new EventEmitter();
 
  constructor(private translate: TranslateService, private router: Router, public _signalRServices : SignalRService) {

  }
 
  ngOnInit() {
    console.log(sessionStorage.getItem('LANG'));
    this._signalRServices.startMessageConnection();
    this._signalRServices.startListeningMessages();
  }
 
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  
  setLang(lang: string) {
    this.translate.use(lang);
    this.router.navigate(['/home']);
  }
 
}