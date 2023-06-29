import Bullseye from "../assets/bulls-eye.webp";
import thumbsup from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Prop {
  rating: number;
}
const Emoji = ({ rating }: Prop) => {
  const EmojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsup, alt: "recommended", boxSize: "25px" },
    5: { src: Bullseye, alt: "Exceptional", boxSize: "35px" },
  };
  return <Image {...EmojiMap[rating]} marginTop={1}></Image>;
};

export default Emoji;
