import colors from "../colors"

const getItemStyle = (type: string) => {
  switch (type) {
    case 'importantDeadlines':
      return colors.coastGrad;
    case 'downtime':
      return colors.error;
    case 'appointment':
      return colors.mint;
    case 'custom':
      return colors.petrolGrad3;
    case 'loanSchedule':
      return colors.harvest;
    case 'standingOrder':
      return colors.clay;
    default:
      return colors.petrol
  }
};

export default getItemStyle;