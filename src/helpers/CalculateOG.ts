import {getVolInGals, getWeightInLBS} from "@/helpers/UnitsConvertor"
import {IIngredientTypeFermentable} from "@/consts/IngredientTypes";

const calculateOG = (fermentablesArray:IIngredientTypeFermentable[], batchSize:number, useMetricUnits:boolean = true, isUsingExtract:boolean = false, brewhouseEfficiency:number = 0.72) => {
    const bhe = isUsingExtract ? 1 : brewhouseEfficiency; //Brewhouse Efficiency
    return getTPP(fermentablesArray, useMetricUnits) * bhe / getVolInGals(useMetricUnits, batchSize) ;
};

//Total Potential Points
const getTPP = (fermentablesArray:IIngredientTypeFermentable[], useMetricUnits:boolean) => {
    return fermentablesArray.map(fermentable => ((fermentable.sg * 1000) - 1000) * getWeightInLBS(useMetricUnits, fermentable.weight)).reduce((acc, cur) => acc + cur);
};

export default calculateOG