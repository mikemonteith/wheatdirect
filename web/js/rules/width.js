/**
 * A set of default device width ranges: [min, max]
 * Devices should be matched on realWidth >= min and realWidth < max
 */
const defaultDeviceRanges = {
  mobile: [0, 640],
  tablet: [640, 769],
  desktop: [769, Infinity]
};

const getDeviceWidth = () => {
  return window.innerWidth;
};

export default config => {
  const { values } = config;

  const width = getDeviceWidth();

  for (let i = 0; i < values.length; i++) {
    const value = values[i];
    const [min, max] = defaultDeviceRanges[value.device];

    if (width >= min && width < max) {
      return value.url;
    }
  }
};
