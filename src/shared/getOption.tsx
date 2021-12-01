import { Option } from "../Components/CardForm/selectFieldsOptions";

export const getOption = (
  optionsArr: Array<Option>,
  value: string
): Option | undefined => optionsArr.find((i) => i.value === value);
