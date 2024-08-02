import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  openSidebar: boolean = true;
  matchDetails:any;
  isOn:boolean=true;
  today = new Date();
  constructor() { }


  menuSidebar = [
    {
      link_name: 'England - FA Cup',
      link: null,
      sub_menu: [
        {
          link_name: 'Conventry city V Sheffield Wednesday',
          link: '',
          matchData:[
            {
              radar:9.01,
              falcon:6.60,
              sinLimit:1000,
              sinRisk:921,
              falconOriginalValue: 6.60,
            },
            {
              radar: 2.70,
              falcon: 2.50,
              sinLimit: 1200,
              sinRisk: 950,
              falconOriginalValue: 2.50,
            },
            {
              radar: 2.80,
              falcon: 2.55,
              sinLimit: 1100,
              sinRisk: 930,
              falconOriginalValue: 2.55,
            },
            {
              radar: 2.75,
              falcon: 2.65,
              sinLimit: 1050,
              sinRisk: 920,
              falconOriginalValue: 2.65,
            },
            {
              radar: 2.65,
              falcon: 2.70,
              sinLimit: 1150,
              sinRisk: 910,
              falconOriginalValue: 2.70,
            },
            {
              radar: 2.85,
              falcon: 2.60,
              sinLimit: 1250,
              sinRisk: 940,
              falconOriginalValue: 2.60,
            },
            {
              radar: 2.90,
              falcon: 2.75,
              sinLimit: 1300,
              sinRisk: 960,
              falconOriginalValue: 2.75,
            }
           
          ]
        },
        {
          link_name: 'Polymouth V Leeds United',
          link: '',
          matchData:[
            {
              radar:20,
              falcon:3.33,
              sinLimit:10000,
              sinRisk:15000,
              falconOriginalValue: 3.33,
            }
           
          ]
        },
      ],
    },
    {
      link_name: 'Bahrain Premier League',
      link: null,
      sub_menu: [
        {
          link_name: 'Al Ahil SC Manama V AL Hala',
          link: '',
          matchData:[
            {
              radar:2.60,
              falcon:2.60,
              sinLimit:1000,
              sinRisk:921,
              falconOriginalValue: 2.60,
            },
            {
              radar: 20,
              falcon: 3.33,
              sinLimit: 10000,
              sinRisk: 15000,
              falconOriginalValue: 3.33,
            },
            {
              radar: 21.5,
              falcon: 3.45,
              sinLimit: 10200,
              sinRisk: 15200,
              falconOriginalValue: 3.45,
            },
            {
              radar: 19.8,
              falcon: 3.30,
              sinLimit: 9800,
              sinRisk: 14800,
              falconOriginalValue: 3.30,
            },
            {
              radar: 22.1,
              falcon: 3.50,
              sinLimit: 10400,
              sinRisk: 15400,
              falconOriginalValue: 3.50,
            },
            {
              radar: 20.2,
              falcon: 3.37,
              sinLimit: 10100,
              sinRisk: 15100,
              falconOriginalValue: 3.37,
            },
            {
              radar: 21.0,
              falcon: 3.40,
              sinLimit: 10300,
              sinRisk: 15300,
              falconOriginalValue: 3.40,
            },
            {
              radar: 20.8,
              falcon: 3.36,
              sinLimit: 10050,
              sinRisk: 15050,
              falconOriginalValue: 3.36,
            }
           
          ]
        },
        {
          link_name: 'Al-Najma Manama V  AL Hddi',
          link: '',
          matchData:[
            {
              radar:8.60,
              falcon:9.60,
              sinLimit:8000,
              sinRisk:2,
              falconOriginalValue: 9.60,
            },
            {
              radar: 8.60,
              falcon: 9.60,
              sinLimit: 8000,
              sinRisk: 2,
              falconOriginalValue: 9.60,
            },
            {
              radar: 8.75,
              falcon: 9.70,
              sinLimit: 8200,
              sinRisk: 3,
              falconOriginalValue: 9.70,
            },
            {
              radar: 8.50,
              falcon: 9.55,
              sinLimit: 7800,
              sinRisk: 1,
              falconOriginalValue: 9.55,
            },
            {
              radar: 8.80,
              falcon: 9.65,
              sinLimit: 8100,
              sinRisk: 2.5,
              falconOriginalValue: 9.65,
            },
            {
              radar: 8.65,
              falcon: 9.60,
              sinLimit: 7900,
              sinRisk: 2.2,
              falconOriginalValue: 9.60,
            }
           
          ]
        },
      
      ],
    },

    {
      link_name: 'American Premier League',
      link: null,
      sub_menu: [
        {
          link_name: 'Coming soon',
          link: '',
        },
        {
          link_name: 'Coming soon',
          link: '',
        },
        {
          link_name: 'Coming soon',
          link: '',
        },
      ],
    },

    {
      link_name: 'Indian Premier League',
      link: null,
      sub_menu: [
        {
          link_name: 'Coming soon',
          link: '',
        },
        {
          link_name: 'Coming soon',
          link: '',
        },
        {
          link_name: 'Coming soon',
          link: '',
        },
      ],
    },

    {
      link_name: 'Korean League',
      link: null,
      sub_menu: [
        {
          link_name: 'Coming soon',
          link: '',
        },
        {
          link_name: 'Coming soon',
          link: '',
        },
        {
          link_name: 'Coming soon',
          link: '',
        },
      ],
    },
    

  ];
  ngOnInit(): void {
  }
  showSubmenu(itemEl: HTMLElement) {
    itemEl.classList.toggle('showMenu');
  }
  fetchMatchDetail(data:any){
    this.matchDetails = data;
  }

  isBettingOn(){
    this.isOn = !this.isOn;
  }
}
