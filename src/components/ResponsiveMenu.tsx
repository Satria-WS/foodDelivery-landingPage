import { motion, AnimatePresence } from "framer-motion";
import { NavbarMenu } from "../data/navbarMenu";

interface ResponsiveMenuProps {
  open: boolean;
}

const ResponsiveMenu = ({ open }: ResponsiveMenuProps) => {
  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
            className="border md:hidden absolute top-20 left-0 w-full h-auto z-10"
          >
            <div className="text-xl font-semibold uppercase bg-secondary text-white py-10 m-6 rounded-3xl">
              <ul className="flex flex-col items-center space-y-8">
                {NavbarMenu.map((item, index) => (
                  <li className="hover:font-bold " key={index}>{item.title}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default ResponsiveMenu;
