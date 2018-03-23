import { footerLink } from "../models/footerLinkModel";

export class footerLinkService{

    private footerLinksProductList: footerLink[];
    private footerLinksInformationList: footerLink[];
    private footerLinksLegalList: footerLink[];
    private footerLinksHelpList: footerLink[];


    constructor(){
        
       this.footerLinksProductList = [
            new footerLink('workers\' comp',''),
            new footerLink('general liability',''),
            new footerLink('propety and liability',''),
            new footerLink('commercial auto',''),
            new footerLink('umbrella',''),
            ];

        this.footerLinksInformationList = [
            new footerLink('resource center',''),
            new footerLink('loss control',''),
            new footerLink('balance sheets','')
            ];

        this.footerLinksLegalList = [
            new footerLink('privacy policy',''),
            new footerLink('terms and conditions',''),
            new footerLink('other disclosures','')
            ];

        this.footerLinksHelpList = [
            new footerLink('FAQ',''),
            new footerLink('make a claim','')
            ];       
    }

    getFooterLinksProductList() {
        return this.footerLinksProductList.slice();
        }
    
    getfooterLinksInformationList() {
        return this.footerLinksInformationList.slice();
        }

    getfooterLinksLegalList() {
        return this.footerLinksLegalList.slice();
        }

    getfooterLinksHelpList() {
        return this.footerLinksHelpList.slice();
        }


}