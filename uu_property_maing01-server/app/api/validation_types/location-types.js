/* eslint-disable */
const locationCreateDtoInType = shape({
  name: uu5String(20).isRequired(),
});

const locationGetDtoInType = shape({
  locationId: id().isRequired(),
});

const locationDeleteDtoInType = shape({
  locationId: id().isRequired(),
});
