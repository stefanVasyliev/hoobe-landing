import React from "react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, Link, MenuList, MenuItem, IconButton } from "@chakra-ui/react";

const MobileMenuButton = () => {
  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            _hover={{ background: "#F4F5F7" }}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            display={{ base: "flex", md: "none" }}
            variant="outline"
            borderRadius="full"
            as={IconButton}
          >
          </MenuButton>
          <MenuList borderRadius="12px" padding="4px" mt="10px">
            <MenuItem as={Link} href={"/templates"} padding="12px" borderRadius="8px">
              templates
            </MenuItem>
            <MenuItem as={Link} href={"/blog"} padding="12px" borderRadius="8px">
              blog
            </MenuItem>
          </MenuList>
        </>
      )
      }
    </Menu >
  );
};

export default MobileMenuButton;
