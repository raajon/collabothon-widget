import colors from "../colors"

const getItemStyle = (type: string) => {
    switch (type) {
      case 'downtime':
        return colors.harvest;
      case 'custom':
        return colors.mint;
      case 'appointment':
        return colors.warning;
      default:
        return colors.petrol
    }
};

export default getItemStyle;