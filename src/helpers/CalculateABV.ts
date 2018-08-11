import {IIngredientTypeFermentable} from "@/consts/Types";
import CalculateOG from "@/helpers/CalculateOG";
import CalculateFG from "@/helpers/CalculateFG";

const CalculateABV = (fermentablesArray:IIngredientTypeFermentable[], batchSize:number, useMetricUnits:boolean = true, isUsingExtract = false, brewhouseEfficiency = 0.72) => {
    const OG = CalculateOG(fermentablesArray, batchSize, useMetricUnits, isUsingExtract, brewhouseEfficiency);
    const FG = CalculateFG(OG);

    return (OG-FG)*131
}

export default CalculateABV