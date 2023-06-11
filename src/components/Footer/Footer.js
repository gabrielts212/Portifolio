
import { Flex, Text, Heading, Box, List, ListItem,UnorderedList,DrawerHeader,SimpleGrid,Divider,Link} from "@chakra-ui/react";
// import { Image } from '@chakra-ui/react'
import Image from "next/image";
// import Instagram from "../assets/images/Instagram.png";
// import Telegram from "../../assets/Images/telegram.png";
import Instagram from "../../components/assets/images/Instagram.png";
// import Youtube from "../../assets/Images/youtube.png";
import Linkedin from "../../components/assets/images/linkedin.png";
// import TikTok from "../../assets/Images/tiktok.png";
// import Spotify from "../../assets/Images/spotify.png";
import Facebook from "../../components/assets/images/facebook.png";
// import Twitter from "../../assets/Images/twitter.png";

const icons = [
  // {
  //   icon: Telegram,
  //   alt: "Telegram",
  // },
  {
    icon: Instagram,
    alt: "Instagram",
  },
  // {
  //   icon: Youtube,
  //   alt: "Youtube",
  // },
  {
    icon: Linkedin,
    alt: "Linkedin",
  },
  // {
  //   icon: TikTok,
  //   alt: "TikTok",
  // },
  // {
  //   icon: Spotify,
  //   alto: "Spotify",
  // },
  {
    icon: Facebook,
    alt: "Facebook",
  },
  // {
  //   icon: Twitter,
  //   alt: "Twitter",
  // },
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
