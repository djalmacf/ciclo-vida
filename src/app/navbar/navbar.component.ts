import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit, OnDestroy {

    ngOnInit(): void {
      console.log('Esse componente inicia.')
    }

    ngOnDestroy(): void {
      console.log('Este é destruído!')
    }

}
