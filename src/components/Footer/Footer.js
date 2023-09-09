import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Instagram from "../../components/assets/images/Instagram.png";
import Linkedin from "../../components/assets/images/linkedin.png";
import Facebook from "../../components/assets/images/facebook.png";
import Seta from "../../components/assets/images/seta.png";

const icons = [
  {
    icon: Instagram,
    alt: "Instagram",
    url: "/",
  },

  {
    icon: Linkedin,
    alt: "Linkedin",
    url: "https://www.linkedin.com/in/gabriel-nascimento-pereira/",
  },

  {
    icon: Facebook,
    alt: "Facebook",
    url: "/",
  },
  {
    icon: Seta,
    alt: "Link Topo",
    url: "/#Header",
  },
];

const Footer = () => {
  return (
    <Flex w="100%" h="180" bg="#070b21" justify="center" align="center">
      <Flex>
        <Flex gap={3.5} display={["flex", "flex", "flex", "flex", "flex"]}>
          {icons.map((icon, index) => {
            return (
              <Text
                {...icon}
                key={index}
                cursor="pointer"
                _hover={{
                  // Define as propriedades CSS que você deseja aplicar quando o mouse estiver sobre o botão
                  transform: "scale(1.4)", // Aumenta o tamanho em 20%
                  transition: "transform 0.1s", // Adiciona uma transição suave para a animação
                }}
              >
                <a href={icon.url} cursor="pointer">
                  <Image src={icon.icon} alt={icon.alt} />
                </a>
              </Text>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
