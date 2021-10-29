/**Interface that takes in the api response to then parse budget data from it*/
export interface apiResponse{
    results: string;
    message: string;
    data: [];
}

/** Interface to both add and receive budgets from API */
export interface Budget{
        budgetCodeId?: number,
        fiscalYear: number,
        budgetCode: string,
        budgetTitle: string;
}