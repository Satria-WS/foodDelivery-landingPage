
import { motion, AnimatePresence } from "framer-motion";

interface ResponsiveMenuProps {
  open: boolean;
}

const ResponsiveMenu = ({ open }: ResponsiveMenuProps) => {
  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 w-full h-full bg-black/60 z-10"
          >
            <div>test</div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default ResponsiveMenu;
