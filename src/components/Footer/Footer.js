
import { Flex, Text, Heading, Box, List, ListItem,UnorderedList,DrawerHeader,SimpleGrid,Divider,Link} from "@chakra-ui/react";
import Image from "next/image";
import Instagram from "../../components/assets/images/Instagram.png";
import Linkedin from "../../components/assets/images/linkedin.png";
import Facebook from "../../components/assets/images/facebook.png";


const icons = [

  {
    icon: Instagram,
    alt: "Instagram",
  },

  {
    icon: Linkedin,
    alt: "Linkedin",
  },

  {
    icon: Facebook,
    alt: "Facebook",
  },

];

const Footer = () => {
  return (
<Flex w="100%" h="200" bg="#000"  justify="center">
<Flex>

<Flex gap={3.5} display={["none", "none", "none", "flex", "flex"]}>
          {icons.map((icon, index) => {
            return (
              <Text{...icon} key={index}   cursor="pointer">
<Link href="/Header"  cursor="pointer">
          <Image src={icons} alt="link topo  ↑"/>
        </Link> 
                <Image src={icon.icon} alt={icon.alt}/>
              </Text>
            );
          })}
        </Flex>

</Flex>


    </Flex>
  )
}

export default Footer
