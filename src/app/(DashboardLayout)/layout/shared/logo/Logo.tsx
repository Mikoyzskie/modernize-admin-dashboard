import Link from "next/link";
import { styled } from "@mui/material";
import Image from "next/image";

const LinkStyled = styled(Link)(() => ({
  height: "37px",
  width: "180px",
  overflow: "hidden",
  display: "block",
  marginTop: "24px"
}));

const Logo = () => {
  return (
    <LinkStyled href="/">
      <Image src="/images/logos/logo-trash.png" alt="logo" height={37} width={174} priority />
    </LinkStyled>
  );
};

export default Logo;
