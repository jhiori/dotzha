import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

export function LoadSvgIcons  ( matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer ) : void {  
    // matIconRegistry.addSvgIcon('dotzha-name',
    //   // this.domSanitizer.bypassSecurityTrustResourceUrl('/building-maintenance/DG_lg_wp.svg')); 
    // domSanitizer.bypassSecurityTrustResourceUrl('/building-maintenance/DG_wp.svg')); 

  matIconRegistry.addSvgIcon('dotzha-name',
    domSanitizer.bypassSecurityTrustResourceUrl('/building-maintenance/DG_wp.svg')); 
  
  matIconRegistry.addSvgIcon('dotzha-logo-name',
    domSanitizer.bypassSecurityTrustResourceUrl('/building-maintenance/DG_lg_wp.svg')); 


     // Example: Registering multiple icons from a list
      // const iconsToRegister = [
      //   { name: 'dotzha-name', path: '/building-maintenance/DG_wp.svg' },
      //   { name: 'dotzha-logo-name', path: '/building-maintenance/DG_lg_wp.svg' },
      // ];

      // iconsToRegister.forEach(icon => {
      //   iconRegistry.addSvgIcon(
      //     icon.name,
      //     sanitizer.bypassSecurityTrustResourceUrl(icon.path)
      //   );
      // });
}
