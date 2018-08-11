import {IIngredientTypeHops} from "@/consts/IngredientTypes";

const CalculateIBU = (hopsArray:IIngredientTypeHops[], useFormulaNumber:number = 0, batchSize:number, wortOG:number, useMetricUnits?:boolean) => {
  switch (useFormulaNumber) {
    case 0: //Glenn Tinseth
      return hopsArray.map(hops => ibuFormulaTinseth(hops.weight, hops.aa, hops.boilTime, batchSize, wortOG, useMetricUnits)).reduce((acc,cur) => acc + cur);
    case 0: //Rager
      return hopsArray.map(hops => ibuFormulaRager(hops.weight, hops.aa, hops.boilTime)).reduce((acc,cur) => acc + cur);
    case 0: //Garetz
      return hopsArray.map(hops => ibuFormulaGaretz(hops.weight, hops.aa, hops.boilTime)).reduce((acc,cur) => acc + cur);
    default:
      return hopsArray.map(hops => ibuFormulaTinseth(hops.weight, hops.aa, hops.boilTime, batchSize, wortOG, useMetricUnits)).reduce((acc,cur) => acc + cur);
  };
};

const ibuFormulaRager = (weight:number = 0, aa:number, boilTime:number = 0) => {
  //TODO add support for this method...
  /**
   * http://realbeer.com/hops/FAQ.html
   */
  return 0;
};

const ibuFormulaGaretz = (weight:number = 0, aa:number, boilTime:number = 0) => {
  //TODO add support for this method...
  /**
   * http://realbeer.com/hops/FAQ.html
   */
  return 0
};

//TODO Check if BU is equal to AA rating...
const ibuFormulaTinseth = (weight:number = 0, aa:number, boilTime:number = 0, batchSize:number, wortOG:number, useMetricUnits:boolean = false) => {
  let uf = useMetricUnits ? 1000 : 7490; //factor units(metric' or 'US') (global)
  let aaPerMgL = (aa * weight * uf) / batchSize // mg/l of added alpha acids
  let bf = 1.65 * Math.pow(0.000125, wortOG) //Bigness Factor (TODO if wortOG starts with 1 it needs to be removed)

  let btf = (1 - Math.exp(-0.04 * boilTime))/ 4.15 //Boil Time Factor
  let aau = bf * bf //decimal alpha acid utilization

  return aaPerMgL * aau;
};

export default CalculateIBU