import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const styles = {
  borderRight: "1px solid #20202022",
  backgroundColor: "#36363655",
  backdropFilter: "blur(20px)",
  marginTop: "3.6em",
  padding: "1em 2em",
};

const CustomDrawer = ({ children, isOpen, handleToggle, direction = "left" }) => {
  return (
    <Drawer
      open={isOpen}
      onClose={handleToggle}
      direction={direction}
      overlayOpacity={0.5}
      lockBackgroundScroll
      style={styles}
    >
      {children}
    </Drawer>
  );
};

export default CustomDrawer;
