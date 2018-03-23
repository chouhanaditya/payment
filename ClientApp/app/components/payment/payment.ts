
export class payment {

        down_payment: number = 839.5;
        total_estimated_cost: number = 3294.5;
        future_installments: number = 274.50;

        payment_options: string[] = ['25% down + 9 monthly installments', '10% down + 12 monthly installments',
        '20% down + 10 monthly installments', '50% down + 6 monthly installments', '75% down + 4 monthly installments' ];

        limit_options: string[] = ['$100,000/ $500,000/ $100,000', '$100,000/ $500,000/ $100,000','$100,000/ $500,000/ $100,000',
        '$100,000/ $500,000/ $100,000','$100,000/ $500,000/ $100,000'];

        included_owners: number[] = [0];
        excluded_owners : number[] =[0];

        business_info: string = 'EIN';

        add_included_owner(){
            var last = this.included_owners[this.included_owners.length - 1]     
            this.included_owners.push(last+1);  
            // componentHandler.upgradeDom();
        }
        add_excluded_owner(){
            var last = this.excluded_owners[this.excluded_owners.length - 1]     
            this.excluded_owners.push(last+1);
        }
        remove_included_owner(index: number) {
            this.included_owners.splice(index,1);
        }
        remove_excluded_owner(index: number) {
            this.excluded_owners.splice(index,1);
 }
}

