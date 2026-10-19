import { Toaster as Sonner } from "sonner";

const Toaster = (props) => {
  return <Sonner theme="dark" position="bottom-right" {...props} />;
};

export { Toaster };
