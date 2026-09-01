
const IMAGE_BASE_URL = "https://79gcelddzk.ucarecd.net";

export function getImageUrl(
  uuid?: string | null,
): string | undefined {
  if (!uuid) return undefined;

  return `${IMAGE_BASE_URL}/${uuid}/`;
}