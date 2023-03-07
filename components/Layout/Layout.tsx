import Footer from "./Footer";
import MainNavigation from "./MainNavigation";
import { Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"] });

type Props = { children: React.ReactNode };

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className={jost.className}>
        <MainNavigation />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
