import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";

export type SocialIconProps = {
  media: "twitter" | "facebook";
};

export default function SocialIcon(props: SocialIconProps) {
  const { media } = props;
  let iconProp: IconDefinition;

  switch (media) {
    case "twitter":
      iconProp = faTwitter;
      break;
    case "facebook":
      iconProp = faFacebook;
      break;
  }

  return <FontAwesomeIcon icon={iconProp} />;
}
