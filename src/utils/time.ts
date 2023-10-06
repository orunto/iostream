// What is the distance from 1 January 2016

import { formatDistance } from "date-fns";

// to 1 January 2015, with a suffix?

export function verboseTime(date:Date) {

    const result = formatDistance(date, new Date(), {
      includeSeconds: true,
      addSuffix: true
    });

    return result;
}
//=> 'about 1 year ago'