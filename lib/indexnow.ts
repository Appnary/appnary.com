/** Public IndexNow key. The matching file in public/ must contain this value. */
export const INDEXNOW_KEY = "02f765d66e9cfe724cdb16ec9930e062";

export const INDEXNOW_HOST = "appnary.com";

export function indexNowKeyLocation(): string {
  return `https://${INDEXNOW_HOST}/${INDEXNOW_KEY}.txt`;
}
