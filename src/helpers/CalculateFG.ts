import CalculateOG from "@/helpers/CalculateOG";

const CalculateFG = (OG:number, attenuation:number = .75) => {
    return OG * attenuation;
}

export default CalculateFG