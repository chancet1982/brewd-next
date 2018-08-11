import { L_GAL, KG_LBS } from "@/consts/Units";
import {IIngredientTypeFermentable} from "@/consts/Types";

const calculateOG = (fermentablesArray:IIngredientTypeFermentable[], batchSize:number, useMetricUnits:boolean = true, isUsingExtract = false, brewhouseEfficiency = 0.72) => {
    //const tpp = 0; //Total Potential Points
    const bhe = isUsingExtract ? 1 : brewhouseEfficiency; //Brewhouse Efficiency
    const volGal = useMetricUnits ? batchSize * L_GAL : batchSize;
    //const tpp = 0;
    return getTPP(fermentablesArray, useMetricUnits); * bhe / volGal ;
};

const getTPP = (fermentablesArray:IIngredientTypeFermentable[], useMetricUnits:boolean) => {
    return fermentablesArray.reduce((tpp, currentFermentable) => {
        const weightInLBS = useMetricUnits ? currentFermentable.weight * KG_LBS : currentFermentable.weight;        
        const pp = (((currentFermentable.sg * 1000) - 1000) * weightInLBS);
        return tpp + pp;
    })
}

export default calculateOG