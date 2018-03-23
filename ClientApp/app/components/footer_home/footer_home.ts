import { footerLinkService } from "../../services/footerLinkService";
import { footerLink } from "../../models/footerLinkModel";
import { Aurelia, inject } from 'aurelia-framework';

@inject(footerLinkService)
export class footer_home {

    private footerLinksProductList: footerLink[];
    private footerLinksInformationList: footerLink[];
    private footerLinksLegalList: footerLink[];
    private footerLinksHelpList: footerLink[];
    objfooterLinkService: footerLinkService;

    constructor(objfooterLinkService: footerLinkService){
        
        this.objfooterLinkService=  objfooterLinkService;

        this.footerLinksProductList = this.objfooterLinkService.getFooterLinksProductList();
        this.footerLinksInformationList  = this.objfooterLinkService.getfooterLinksInformationList();
        this.footerLinksLegalList = this.objfooterLinkService.getfooterLinksLegalList();
        this.footerLinksHelpList = this.objfooterLinkService.getfooterLinksHelpList();
    }
   
}
