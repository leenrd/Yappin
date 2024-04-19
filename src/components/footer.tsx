import Modal from "./modal";
import MaxWidthShell from "./shared/max-width-shell";

const Footer = () => {
  return (
    <MaxWidthShell>
      <footer className="flex justify-between items-center my-14">
        <h1>All rights reserved 2024</h1>
        <Modal />
      </footer>
    </MaxWidthShell>
  );
};

export default Footer;
