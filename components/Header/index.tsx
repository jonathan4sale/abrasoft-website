import React from "react";
import SmallHeader from "./SmallHeader";
import LargeHeader from "./LargeHeader";
import { Container, NavbarBrand } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.scss";

import CompanyLogo from "public/images/company-logo.webp";
import * as constants from "@/app/constants";

const Header = () => {
  return (
    <nav className={styles.navBar}>
      <Container className={styles.innerContainer}>
        <NavbarBrand>
          <Link className={styles.brandLink} href={constants.HOME_ROUTE}>
            <Image
              src={CompanyLogo}
              alt="Abrasoft Logo"
              height={70}
              width={70}
              className="d-inline-block align-text-top"
            />
            <p>Abrasoft</p>
          </Link>
        </NavbarBrand>
        <SmallHeader />
        <LargeHeader />
      </Container>
    </nav>
  );
};

export default Header;
