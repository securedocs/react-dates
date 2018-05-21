import moment from 'moment';

import { DISPLAY_FORMAT, ISO_FORMAT } from '../constants';

export default function toMomentObject(dateString, customFormat) {
  const dateFormats = customFormat ?
    [customFormat, "M/D/YYYY", DISPLAY_FORMAT, ISO_FORMAT] :
    ["M/D/YYYY", DISPLAY_FORMAT, ISO_FORMAT];

  const date = moment(dateString, dateFormats, true);
  return date.isValid() ? date.hour(12) : null;
}
