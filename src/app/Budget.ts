export interface apiResponse{
    results: string;
    message: string;
    data: [];
}

export interface Budget{
        budgetCodeId: number,
        fiscalYear: number,
        budgetCode: string,
        budgetTitle: string;
}