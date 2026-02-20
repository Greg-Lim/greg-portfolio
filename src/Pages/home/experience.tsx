type Experience = {
  title: string;
  subtitle?: string;
  period: string;
  description: string;
  skills: string[];
  images?: string[];
};

type TextExperienceProps = {
  title: string;
  subtitle?: string;
  period: string;
  description: string;
  skills: string[];
};

type ImageExperienceProps = {
  title: string;
  subtitle?: string;
  period: string;
  description: string;
  skills: string[];
  images: string[];
};

export function TextExperience(exp: TextExperienceProps) {}

export function ImgExperience(exp: ImageExperienceProps) {}
