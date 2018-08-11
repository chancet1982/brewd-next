import {getVolInGals, getWeightInLBS} from "@/helpers/UnitsConvertor";
import {IIngredientTypeFermentable} from "@/consts/IngredientTypes";
import { access } from 'fs';

//Morey's Formula to calculate: SRM = 1.4922 * (MCU ^ 0.6859). 
const CalculateSRM = (fermentablesArray:IIngredientTypeFermentable[], batchSize:number, useMetricUnits:boolean = false) => {
    return 1.4922 * Math.pow(CalculateMCU(fermentablesArray, batchSize, useMetricUnits), 0.6859)
}

const CalculateMCU = (fermentablesArray:IIngredientTypeFermentable[], batchSize:number, useMetricUnits:boolean = false)=> {
    return getTMCU(fermentablesArray, useMetricUnits)/getVolInGals(useMetricUnits, batchSize) ;
}

const getTMCU = (fermentablesArray:IIngredientTypeFermentable[], useMetricUnits:boolean) => {
    return fermentablesArray.map(fermentable => fermentable.color * getWeightInLBS(useMetricUnits , fermentable.weight)).reduce((acc, cur) => acc +cur);
}

export default CalculateSRM