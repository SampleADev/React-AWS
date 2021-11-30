import {
  faArrowDown,
  faArrowUp,
  faArrowsAltH,
  faBug,
  faCrown,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

interface Option {
  value: string;
  label: string;
  color?: string;
  icon?: IconDefinition;
}

const priorities: Array<Option> = [
  { value: "low", label: "Low", color: "#2e7d32", icon: faArrowDown },
  { value: "medium", label: "Medium", color: "#ed6c02", icon: faArrowsAltH },
  { value: "hight", label: "Hight", color: "#d32f2f", icon: faArrowUp },
];

const users: Array<Option> = [
  { value: "user1", label: "User 1" },
  { value: "user2", label: "User 2" },
  { value: "user3", label: "User 3" },
];

const taskTypes: Array<Option> = [
  { value: "feature", label: "Feature", color: "#2e7d32", icon: faCrown },
  { value: "bug", label: "Bug", color: "#d32f2f", icon: faBug },
];

export const Options = {
  priorities,
  users,
  taskTypes,
};
