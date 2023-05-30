import { Typography } from "antd";
import { PersonProps } from "./personCard.props";

export const PersonCard: React.FC<PersonProps> = ({ data, controlsSlot }) => {
  const { name, birth_year, height } = data;

  return (
    <div>
      <Typography.Paragraph>name: {name}</Typography.Paragraph>
      <Typography.Paragraph>birth_year: {birth_year}</Typography.Paragraph>
      <Typography.Paragraph>height {height}</Typography.Paragraph>

      {controlsSlot && controlsSlot}
    </div>
  );
};
