import InstagramIcon from "@/components/shared/icons/InstagramIcon";
import TiktokIcon from "@/components/shared/icons/TiktokIcon";

type IRoute = {
  label: string;
  route: string;
  icon?: any;
};

export type IRoutes = Array<IRoute>;

export const routes: IRoutes = [
  {
    label: "Instagram",
    route: "/instagram",
    icon: InstagramIcon,
  },
  {
    label: "Tiktok",
    route: "/tiktok",
    icon: TiktokIcon,
  },
];
