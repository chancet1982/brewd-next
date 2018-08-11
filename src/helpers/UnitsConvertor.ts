import { L_GAL, GAL_L, KG_LBS, LBS_KG } from "@/consts/Units";

export const getKG = (weightInLBS:number) => {
    return weightInLBS * LBS_KG
}

export const getLBS = (weightInKG:number) => {
    return weightInKG * KG_LBS
}

export const getL = (volInGal:number) => {
    return volInGal * GAL_L
}

export const getGAL = (volInL:number) => {
    return volInL * L_GAL
}

export const getVolInGals = function(useMetricUnits:boolean, batchSize:number = 0) {
    return useMetricUnits ? getGAL(batchSize) : batchSize;
};

export const getWeightInLBS = function(useMetricUnits:boolean, weight:number = 0) {
    return useMetricUnits ? getLBS(weight) : weight;
};