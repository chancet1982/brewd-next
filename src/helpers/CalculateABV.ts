import {IIngredientTypeFermentable} from "@/consts/IngredientTypes";
import CalculateOG from "@/helpers/CalculateOG";
import CalculateFG from "@/helpers/CalculateFG";

const CalculateABV = (fermentablesArray:IIngredientTypeFermentable[], batchSize:number, useMetricUnits:boolean = true, isUsingExtract:boolean = false, brewhouseEfficiency:number = 0.72) => {
    const OG = CalculateOG(fermentablesArray, batchSize, useMetricUnits, isUsingExtract, brewhouseEfficiency);
    const FG = CalculateFG(OG);

    return (OG-FG) * 131
}

export default CalculateABV