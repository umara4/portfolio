import { useEffect, useState } from "react";
import { Link } from "react-router";
import {
  Card,
  CardImageContainer,
  CardInteract,
  CardSection,
  CardText,
  CardTitle,
  useTheme,
} from "barrelrolla-ui";
import { BioCategory, BioDataType } from "../../data/bio";
import { motion, MotionProps, Variants } from "motion/react";

export default function BioCard({
  category,
  bio,
  index,
  ...rest
}: {
  category: BioCategory;
  bio: BioDataType;
  index?: number;
} & MotionProps) {
  const [loading, setLoading] = useState(true);
  const { id, title, specialty, imgClass, bgColor, description, dates } = bio;
  const themeContext = useTheme();
  const img = themeContext?.isDark && bio.imgDark ? bio.imgDark : bio.img;
  const [imageSource, setImageSource] = useState(img);

  useEffect(() => {
    setLoading(true);
    setImageSource(img);
    const image = new Image();
    image.onload = () => {
      setLoading(false);
    };
    image.onerror = () => {
      setImageSource("/logo.svg");
      setLoading(false);
    };
    image.src = img;
  }, [img]);

  const child: Variants = {
    hidden: {
      opacity: 0,
      translateX: index && index % 2 ? 100 : -100,
    },
    visible: {
      opacity: 1,
      translateX: 0,
    },
  };

  return (
    <motion.div
      className="group/wrapper flex w-full flex-col"
      variants={child}
      {...rest}
      viewport={{ amount: 0.3, once: true }}
      transition={{ duration: 0.3 }}
    >
      <Card
        containerClassName="group-odd/wrapper:self-start group-even/wrapper:self-end border-none max-w-4xl overflow-clip rounded-(--radius-containers)"
        horizontal
        key={title}
        color="main"
        className="h-full overflow-clip rounded-(--radius-containers)"
      >
        <CardInteract
          as={Link}
          to={`/${category}/${id}`}
          className="flex flex-col overflow-clip rounded-(--radius-containers) inset-ring @xl:h-58 @xl:flex-row"
          aria-label={`${title} link`}
        >
          <CardSection className="flex-1/2 @xl:group-even/wrapper:order-last">
            <CardImageContainer
              className="relative flex min-h-58 items-center justify-center overflow-hidden bg-neutral/10"
              style={{
                backgroundColor: bgColor || "",
              }}
            >
              {loading && <div className="h-58 w-full animate-pulse bg-neutral/10"></div>}
              {!loading && (
                <img
                  className={imgClass || "max-h-52 w-full object-contain p-8"}
                  src={imageSource}
                  alt={`${title} visual`}
                />
              )}
            </CardImageContainer>
          </CardSection>
          <CardSection className="flex-1/2">
            <CardTitle className="pb-0">{title}</CardTitle>
            {specialty && <p className="px-4 pb-2 font-normal">{specialty}</p>}
            {dates && <p className="px-4">{dates}</p>}
            <CardText dangerouslySetInnerHTML={{ __html: description }} />
          </CardSection>
        </CardInteract>
      </Card>
    </motion.div>
  );
}
