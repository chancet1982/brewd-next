import {IIngredientTypeHops} from "@/consts/Types";
//TODO currently wrong as it uses a single HOPS and not an array of hops. we need to fix that.
const CalculateIBU = (weight:number, hopsAARating:number, boilTime:number, useFormulaNumber:number = 0, batchSize:number, wortOG:number, useMetricUnits?:boolean) => {
  switch (useFormulaNumber) {
    case 0: //Glenn Tinseth
      return ibuFormulaTinseth(weight, hopsAARating, boilTime, batchSize, wortOG, useMetricUnits);
    case 0: //Rager
      return ibuFormulaRager(weight, hopsAARating, boilTime);
    case 0: //Garetz
      return ibuFormulaGaretz(weight, hopsAARating, boilTime);
    default:
      return ibuFormulaTinseth(weight, hopsAARating, boilTime, batchSize, wortOG, useMetricUnits)
  };
};

const ibuFormulaRager = (weight:number, hopsAARating:number, boilTime:number) => {
  //TODO add support for this method...
  /**
   * http://realbeer.com/hops/FAQ.html
   */
  return null;
};

const ibuFormulaGaretz = (weight:number, hopsAARating:number, boilTime:number) => {
  //TODO add support for this method...
  /**
   * http://realbeer.com/hops/FAQ.html
   */
  return null
};

//TODO Check if BU is equal to AA rating...
const ibuFormulaTinseth = (weight:number, hopsAARating:number, boilTime:number, batchSize:number, wortOG:number, useMetricUnits:boolean = false) => {
  let uf = useMetricUnits ? 1000 : 7490; //factor units(metric' or 'US') (global)
  let aaPerMgL = (hopsAARating * weight * uf) / batchSize // mg/l of added alpha acids
  let bf = 1.65 * Math.pow(0.000125, wortOG) //Bigness Factor (TODO if wortOG starts with 1 it needs to be removed)

  let btf = (1 - Math.exp(-0.04 * boilTime))/ 4.15 //Boil Time Factor
  let aau = bf * bf //decimal alpha acid utilization

  return aaPerMgL * aau;
};

export default CalculateIBU