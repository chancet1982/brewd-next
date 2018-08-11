import { L_GAL, KG_LBS } from "@/consts/Units";
import {IIngredientTypeFermentable} from "@/consts/Types";
//Morey's Formula to calculate: SRM = 1.4922 * (MCU ^ 0.6859). 

const CalculateSRM = (fermentablesArray:IIngredientTypeFermentable[], batchSize:number, useMetricUnits:boolean = false) => {
    return 1.4922 * Math.pow(CalculateMCU(fermentablesArray, batchSize, useMetricUnits), 0.6859)
}

const CalculateMCU = (fermentablesArray:IIngredientTypeFermentable[], batchSize:number, useMetricUnits:boolean)=> {
    const batchSizeGAL = useMetricUnits ? batchSize * L_GAL : batchSize;
    return getTMCU(fermentablesArray, useMetricUnits)/batchSizeGAL;
}

const getTMCU = (fermentablesArray:IIngredientTypeFermentable[], useMetricUnits:boolean) => {
    let tmcu:number =+ fermentablesArray.forEach((currentFermentable:IIngredientTypeFermentable, ) => {
        const weightInLBS = useMetricUnits ? currentFermentable.weight * KG_LBS : currentFermentable.weight;        
        return (currentFermentable.color * weightInLBS);
    })

    return tmcu;
}

export default CalculateSRM