type SizeProperties = {
    width: number,
    height: number,
}

type SpeedType = {
    id: number;
    label: string;
    value: number;
}

type SizeType = {
    id: number;
    label: string;
    value: SizeProperties;
}

type configType = {
    sizeOptions: SizeType[],
    speedOptions: SpeedType[],
    content: string[],
}

export type { SpeedType, SizeType, configType } ;