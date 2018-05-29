'use strict';

const iio = require('bindings')('iio.node');

module.exports = iio;

const iio_chan_type = `
    IIO_VOLTAGE,
    IIO_CURRENT,
    IIO_POWER,
    IIO_ACCEL,
    IIO_ANGL_VEL,
    IIO_MAGN,
    IIO_LIGHT,
    IIO_INTENSITY,
    IIO_PROXIMITY,
    IIO_TEMP,
    IIO_INCLI,
    IIO_ROT,
    IIO_ANGL,
    IIO_TIMESTAMP,
    IIO_CAPACITANCE,
    IIO_ALTVOLTAGE,
    IIO_CCT,
    IIO_PRESSURE,
    IIO_HUMIDITYRELATIVE,
    IIO_ACTIVITY,
    IIO_STEPS,
    IIO_ENERGY,
    IIO_DISTANCE,
    IIO_VELOCITY,
    IIO_CONCENTRATION,
    IIO_RESISTANCE,
    IIO_PH,
    IIO_UVINDEX,
    IIO_ELECTRICALCONDUCTIVITY,
    IIO_COUNT,
    IIO_INDEX,
    IIO_GRAVITY,
    IIO_CHAN_TYPE_UNKNOWN = INT_MAX
`;

const iio_modifier = `
    IIO_NO_MOD,
    IIO_MOD_X,
    IIO_MOD_Y,
    IIO_MOD_Z,
    IIO_MOD_X_AND_Y,
    IIO_MOD_X_AND_Z,
    IIO_MOD_Y_AND_Z,
    IIO_MOD_X_AND_Y_AND_Z,
    IIO_MOD_X_OR_Y,
    IIO_MOD_X_OR_Z,
    IIO_MOD_Y_OR_Z,
    IIO_MOD_X_OR_Y_OR_Z,
    IIO_MOD_LIGHT_BOTH,
    IIO_MOD_LIGHT_IR,
    IIO_MOD_ROOT_SUM_SQUARED_X_Y,
    IIO_MOD_SUM_SQUARED_X_Y_Z,
    IIO_MOD_LIGHT_CLEAR,
    IIO_MOD_LIGHT_RED,
    IIO_MOD_LIGHT_GREEN,
    IIO_MOD_LIGHT_BLUE,
    IIO_MOD_QUATERNION,
    IIO_MOD_TEMP_AMBIENT,
    IIO_MOD_TEMP_OBJECT,
    IIO_MOD_NORTH_MAGN,
    IIO_MOD_NORTH_TRUE,
    IIO_MOD_NORTH_MAGN_TILT_COMP,
    IIO_MOD_NORTH_TRUE_TILT_COMP,
    IIO_MOD_RUNNING,
    IIO_MOD_JOGGING,
    IIO_MOD_WALKING,
    IIO_MOD_STILL,
    IIO_MOD_ROOT_SUM_SQUARED_X_Y_Z,
    IIO_MOD_I,
    IIO_MOD_Q,
    IIO_MOD_CO2,
    IIO_MOD_VOC,
    IIO_MOD_LIGHT_UV,
`;