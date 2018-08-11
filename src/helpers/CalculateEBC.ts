import {IIngredientTypeFermentable} from "@/consts/Types";
import CalculateSRM from '@/helpers/CalculateSRM'

//European Brewing Convention (EBC) equals approximately 1.97 * SRM (Daniels). 
const CalculateEBC = (fermentablesArray:IIngredientTypeFermentable[], batchSize:number, useMetricUnits:boolean = false) => {
    return CalculateSRM(fermentablesArray, batchSize, useMetricUnits) * 1.97;
}